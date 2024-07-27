import * as React from 'react';
import useTimer from './useTimer';
import './style.css';

const Stopwatch = () => {

    const {time, startTimeCount, pauseTimeCount, resetTimeCount} = useTimer();

    return(
        <div id="stopwatch">
            <p className='counter'>
                <span><sup>HH</sup>{time.hour<10?`0${time.hour}`:time.hour}</span>
                :
                <span><sup>mm</sup>{time.min<10?`0${time.min}`:time.min}</span>
                :
                <span><sup>ss</sup>{time.sec<10?`0${time.sec}`:time.sec}</span>
                .
                <span><sup>SSS</sup>{time.milliSec<10?`00${time.milliSec}`:time.milliSec<100?`0${time.milliSec}`:time.milliSec}</span>
            </p>
            <div className='counterButtons'>
                <button className="btn btn-primary" onClick={startTimeCount}>Start</button>
                <button className="btn btn-primary" onClick={pauseTimeCount}>Pause</button>
                <button className="btn btn-secondary" onClick={resetTimeCount}>Reset</button>  
            </div>
        </div>
    )
}

export default Stopwatch;