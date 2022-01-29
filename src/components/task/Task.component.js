import React from 'react';

import RemoveIcon from '../remove-icon/RemoveIcon.component';
import './Task.styles.css';

const Task = ({ stockName, notes, id, onDelete }) => {

    const getDate = () => {
        const today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    const getTaskId = () => {
        onDelete(id);
    }

    return (
        <div className='task-container'>
            <div className='taskItem'>{getDate()}</div>
            <div className='taskItem'><u>{stockName}</u></div>
            <div onClick={() => getTaskId()} id='removeIcon'>
                <RemoveIcon />
            </div>
            <div className='notes'>{notes}</div>
        </div>
    );
}

export default Task;

