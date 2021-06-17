import {useState} from 'react'

const AddTask = ({addTask}) => {
    const [task,setTask] = useState('');
    const [date,setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!task){
            alert("Please add text");
            return;
        }
        addTask({task, date, reminder})
        setTask('');
        setDate('');
        setReminder(false);
    }
    
    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Day & time</label>
                <input type="text" placeholder='Add day and time' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block'type="submit" value='Save Task'/>
        </form>
    )
}

export default AddTask
