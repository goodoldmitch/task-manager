function CurrentTime(){

    const currentTime = new Date();

    return(
        <div>{currentTime.toLocaleTimeString()}</div>
    )
}

export default CurrentTime