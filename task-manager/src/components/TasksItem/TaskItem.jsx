import './TaskItem.css'
import AccountLine from "../AccountLine/AccountLine";

function TaskItem({taskData}){

    return(
        <div className="task-item">
            <h3>{taskData.taskText}</h3>
            <div className="time-spent">00:00</div>
            <button>Start</button>
            <AccountLine />
        </div>
    )
}

export default TaskItem