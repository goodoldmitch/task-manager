import './TaskItem.css'
import AccountLine from "../AccountLine/AccountLine";

function TaskItem(){

    return(
        <div className="task-item">
            <h3>Here's the text of the task with increadable amount of words in this title</h3>
            <div className="time-spent">00:00</div>
            <button>Start</button>
            <AccountLine />
        </div>
    )
}

export default TaskItem