import React from 'react';

interface NumbersProps {
    minutes: number
    seconds: number
}
const Numbers:React.FC<NumbersProps> = ({minutes,seconds}) => (
    <>
        <div className={'minutes'} role={'minutes'}>
            {minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        </div>
        <div className={'colon'}>
            :
        </div>
        <div className={'seconds'} role={'seconds'}>
            {seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        </div>
    </>
);

export default Numbers;