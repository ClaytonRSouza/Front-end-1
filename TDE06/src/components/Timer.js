import { useEffect, useState } from "react";
import "./Timer.css"

const Timer = () => {
    const [secunds, setSecunds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecunds(prevSecunds => prevSecunds + 1)
        }, 1000);

        return () => clearInterval(interval)
    })
    return (
        <div className="timerContainer">
            <h1 className="timerh1">Timer</h1>
            <p className="timerP">{secunds} segundos</p>
        </div>
    );
}

export default Timer;