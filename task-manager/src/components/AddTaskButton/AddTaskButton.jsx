import './AddTaskButton.css'

function AddTaskButton({onclick}){

    return(
        <button className="add-task-button" onClick={onclick}>New task</button>
    )
}

export default AddTaskButton