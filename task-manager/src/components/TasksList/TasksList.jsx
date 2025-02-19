import TaskItem from "../TasksItem/TaskItem"

function TasksList({tasksListData}){
    
    return(
        <div className='task-list'>
            <div className="container">
                {
                    tasksListData.map((task) => <TaskItem key={task.id} taskData={task} />)
                }
            </div>
        </div>
    )
}

export default TasksList