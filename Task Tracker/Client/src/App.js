import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'
import axios from 'axios'

import { useState, useEffect } from 'react'


import React from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/');
    const data = res.json();
    return data;
    
  }

//Toggle Reminder
const toggleReminder = async (id) => {
  await axios.post(`http://localhost:5000/${id}`)
  .then((data) => {
    if(data)
      setTasks(tasks.map((task) => task._id === id ? {...task, reminder: !task.reminder} : task))

  })
}

//Delete Task
const deleteTask = async (id) => {
  const res = await axios.delete(`http://localhost:5000/${id}`)
  if(res.data);
    setTasks(tasks.filter((task) => task._id !== id));
}

const addTask = async (task) => {
  axios.post('http://localhost:5000', {...task})
  .then(async ({data}) => {
    setTasks([...tasks, data]);
  }
  )

}

  return (
    <div className="container">
      <Header onClick={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask addTask={addTask }/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks Available')}
    </div>
  );
}


export default App;
