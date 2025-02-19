import { useState , useEffect } from "react";

function CurrentTime(){

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
    }, [currentTime])

    return(
        <div>{currentTime.toLocaleTimeString()}</div>
    )
}

export default CurrentTime