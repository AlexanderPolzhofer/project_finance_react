import React from 'react';

import RemoveIcon from '../remove-icon/RemoveIcon.component';
import './Task.styles.css';

const Task = ({ stockName, notes }) => {
    
    const getDate = () => {
        const today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    return (
        <div className='task-container'>
            <div className='date'>{getDate()}</div>
            <div className='stock'>{stockName}</div>
            <div className='removeIcon'><RemoveIcon /></div>
            <div className='notes'>{notes}</div>
        </div>
    );
}

export default Task;

