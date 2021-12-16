import React from 'react';

interface ButtonProps {
    startTimer: () => void
    stopTimer: () => void
    resetTimer: (Date: any, autoStart: boolean) => void
}

const Buttons:React.FC<ButtonProps> = ({startTimer, stopTimer, resetTimer}) => {
    return (
        <>
            <input type={"submit"} value={'Start'} onClick={startTimer}/>
            <input type={"submit"} value={'Pause'} onClick={stopTimer}/>
            <input type={"submit"} value={'Reset'} onClick={()=>resetTimer(null,false)}/>
        </>
    );
}

export default Buttons;