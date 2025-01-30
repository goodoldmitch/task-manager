import TaskItem from "../TasksItem/TaskItem"

function TasksList(){
    
    return(
        <div className='task-list'>
            <div className="container">
               <TaskItem /> 
               <TaskItem /> 
               <TaskItem /> 
            </div>
        </div>
    )
}

export default TasksList