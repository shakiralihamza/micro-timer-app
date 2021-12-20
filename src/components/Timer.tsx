import React from 'react';
import Numbers from "./Numbers";
import Buttons from "./Buttons";
import Heading from "./Heading";
import {useStopwatch} from "react-timer-hook";

function Timer() {
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({autoStart: false});
    return (
        <div className={'form'}>
            <Heading/>
            <div className={'section'}>
                <Numbers minutes={minutes} seconds={seconds}/>
            </div>
            <div className={'section'}>
                <Buttons
                    startTimer={start}
                    stopTimer={pause}
                    resetTimer={reset}
                />
            </div>
            {/*the following element is just used for testing purposes:*/}
            <input type="checkbox" role={'isRunning'} checked={isRunning} style={{display:"none"}}/>
        </div>
    );
}

export default Timer;