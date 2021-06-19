const express = require('express');
const mongoose = require('mongoose')
const task = require('./models/task.js');
const cors = require('cors');
const morgan = require('morgan')
const app = express();

//Connect Mongo
mongoose.connect('mongodb://localhost:27017/TaskTracker', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        console.log('Database Connected');
    })
    .catch(() => {
        console.log('Error Connecting to Database, exiting...');
        process.exit();
    })

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const tasks = await task.find();
    res.send(tasks);
})

app.post('/', async (req, res) => {
    const newTask = new task(req.body);
    await newTask.save();
    res.send(newTask);
})

app.post('/:id', async (req, res) => {
    const {id} = req.params;
    const fTask = await task.findById(id);
    fTask.reminder = !fTask.reminder;
    await fTask.save();
    res.send(true);
})

app.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await task.findByIdAndDelete(id);
    res.send(true);

})

app.listen(5000, () => {
    console.log("Listening on port 5000.")
})