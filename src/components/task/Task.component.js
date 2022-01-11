import React from 'react';

import RemoveIcon from '../remove-icon/RemoveIcon.component';
import './Task.styles.css';

const Task = ({ stockName, notes }) => {
    return (
        <div className='task-container'>
            <div className='date'>DATUM</div>
            <div className='stock'>{stockName}</div>
            <div className='removeIcon'><RemoveIcon /></div>
            <div className='notes'>{notes}</div>
        </div>
    );
}

export default Task;

