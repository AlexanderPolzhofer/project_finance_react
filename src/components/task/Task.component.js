import React from 'react';

import './Task.styles.css';

const Task = ({ stockName, notes }) => {
    return (
        <div className='task-container'>
            <div className='box1'>DATUM</div>
            <div className='box2'>{stockName}</div>
            <div className='box3'>&#10006;</div>
            <div className='box4'>{notes}</div>
        </div>
    );
}

export default Task;

