import { useState } from "react";

function CurrentTime(){

    const [currentTime, setCurrentTime] = useState(new Date());

    setInterval(() => {
        setCurrentTime(new Date())
    }, 1000);

    return(
        <div>{currentTime.toLocaleTimeString()}</div>
    )
}

export default CurrentTime