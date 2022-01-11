import React from 'react';

import RemoveIcon from '../remove-icon/RemoveIcon.component';
import './Task.styles.css';

const Task = ({ stockName, notes, id }) => {
    
    const getDate = () => {
        const today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }

const removeTask = () => {
    alert('click' + id)
}

    return (
        <div className='task-container'>
            <div className='date'>{getDate()}</div>
            <div className='stock'>{stockName}</div>
            <div onClick = {() => removeTask()} className='removeIcon'><RemoveIcon /></div>
            <div className='notes'>{notes}</div>
        </div>
    );
}

export default Task;

