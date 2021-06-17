const express = require('express');
const mongoose = require('mongoose')
const task = require('./models/task.js');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const tasks = await task.find();
    res.json(tasks);
})

app.post('/', async (req, res) => {
    console.log(req.body)
    // const newTask = new task(req.body);
    // newTask.reminder = true;
    // await newTask.save();

    res.send("SAVED");
})

app.listen(5000, () => {
    console.log("Listening on port 5000.")
})