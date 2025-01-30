import './TitleSection.css'
import AddTaskButton from '../AddTaskButton/AddTaskButton'

function TitleSection(){

    return(
        <section className="title-section">
            <div className="container">
                <h1>Tasks</h1>
                <AddTaskButton />
            </div>
        </section>
    )
}

export default TitleSection