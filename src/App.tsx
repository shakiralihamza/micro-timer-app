import React from 'react';
import Timer from "./components/Timer";
import './App.css';

function App() {
    return (
        <section>
            <div className={'color'}/>
            <div className={'color'}/>
            <div className={'color'}/>
            <div className={'box'}>
                <div className={'square'}/>
                <div className={'square'}/>
                <div className={'square'}/>
                <div className={'square'}/>
                <div className={'square'}/>
                <div className={'container'}>
                    <Timer/>
                </div>
            </div>
        </section>
    );
}

export default App;
