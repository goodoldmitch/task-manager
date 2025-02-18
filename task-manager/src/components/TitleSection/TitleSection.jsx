import { useState } from 'react';
import './TitleSection.css'
import AddTaskButton from '../AddTaskButton/AddTaskButton'

function TitleSection(){
    const [isFormShowed, setIsFormShowed] = useState(false)

    const onCLick =  (e) => {
        e.preventDefault()
        !isFormShowed ? setIsFormShowed(true) : setIsFormShowed(false)
        console.log(isFormShowed);
    }

    return(
        <section className="title-section">
            <div className="container">
                <h1>Tasks</h1>
                <AddTaskButton onclick = {onCLick} />
            </div>
        </section>
    )
}

export default TitleSection