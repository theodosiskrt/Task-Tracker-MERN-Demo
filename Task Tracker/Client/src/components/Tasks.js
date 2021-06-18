import Task from './Task.js'
import Message from './Message.js'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task) => ( 
            <Task key={task._id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            <Message/>
        </>
    )
}

export default Tasks
