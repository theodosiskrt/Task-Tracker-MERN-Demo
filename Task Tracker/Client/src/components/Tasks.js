import Task from './Task.js'
import Message from './Message.js'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task, idx) => ( 
            <Task key={idx} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            <Message/>
        </>
    )
}

export default Tasks
