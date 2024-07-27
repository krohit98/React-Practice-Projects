import * as React from 'react';
import useTimer from './useTimer';

const Stopwatch = () => {

    const {time, startTimeCount, pauseTimeCount, resetTimeCount} = useTimer();

    return(
        <div>
            <p>{time.hour<10?`0${time.hour}`:time.hour}:{time.min<10?`0${time.min}`:time.min}:{time.sec<10?`0${time.sec}`:time.sec}:{time.milliSec<10?`00${time.milliSec}`:time.milliSec<100?`0${time.milliSec}`:time.milliSec}</p>
            <button onClick={startTimeCount}>Start</button>
            <button onClick={pauseTimeCount}>Pause</button>
            <button onClick={resetTimeCount}>Reset</button>
        </div>
    )
}

export default Stopwatch;