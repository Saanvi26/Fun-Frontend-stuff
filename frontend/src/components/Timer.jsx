import { useState, useEffect } from 'react'
import "./Timer.css"
function Timer() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [mins,setMins]=useState(0);
    function inputTimeValue(e) {
        const value = e.target.value;
        if (value === "" || isNaN(parseInt(value)) || parseInt(value) < 0) {
            setTime(0);
        } else {
            setTime(parseInt(value));
            setStart(false); 
        }
    }

    useEffect(() => {
        if (!start || time <= 0) {
            return;
        }

        const timer = setTimeout(() => {
            setTime(time-1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [time, start]);

    const handleStart = () => {
        if (time > 0) {
            setStart(!start);
        }
    };

    return (
        <div className='timer-component'>
            <h1>Timer App !</h1>
            <div>
                <input className='input-element' placeholder='Enter the Time in seconds' onChange={inputTimeValue} />
            </div>
            <h3 className="time-display-element">{mins}:{time}</h3>
            <div>
                <button className='button-element' onClick={handleStart}>
                    {start ? 'Pause' : "Let's Start"}
                </button>
            </div>
        </div>
    )
}

export default Timer;