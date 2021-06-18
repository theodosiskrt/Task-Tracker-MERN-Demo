import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task._id)}>
            <h3>{task.task} <FaTimes onClick={() => onDelete(task._id)} style={{color :'red', cursor: 'pointer'}}/></h3>
            <p>{task.date}</p>
            
        </div>
    )
}

export default Task
