import { useState } from "react";

const useTimer = () => {
    const initialTime = {
        timeElapsed:0,
        hour:0,
        min:0,
        sec:0,
        milliSec:0
    }

    const [timerId, setTimerId] = useState(null);
    const [time, setTime] = useState(initialTime);

    function startTimeCount(){
        if(timerId) return;
        let startTime = new Date().getTime();
        let intervalId = setInterval(()=>{
            let timeNow = new Date().getTime();
            let timeElapsed = timeNow - startTime + time.timeElapsed;
            setTime({
                timeElapsed,
                hour:(Math.trunc((timeElapsed / (1000*60*60)) % 24)),
                min:(Math.trunc((timeElapsed /(1000*60)) % 60)),
                sec:(Math.trunc((timeElapsed / 1000) % 60)),
                milliSec:(timeElapsed % 1000)
            })
        },1)
        setTimerId(intervalId);
    }

    function pauseTimeCount(){
        if(timerId){
            clearInterval(timerId);
            setTimerId(null);
        }
    }

    function resetTimeCount(){
        if(timerId) clearInterval(timerId);
        setTime(initialTime);
        setTimerId(null)
    }

    return {time, startTimeCount, pauseTimeCount, resetTimeCount};
}

export default useTimer;