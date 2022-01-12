import React, { useState } from 'react';

import './TaskAdder.style.css';

function TaskAdder({ addTask }) {

    const [inputValueStockName, setInputValueStockName] = useState('');
    const [inputValueTakeNotes, setInputValueTakeNotes] = useState('');
    const [taskId, setTaskId] = useState(1);

    const handleClick = () => {
        setTaskId(taskId + 1)
        addTask({ name: inputValueStockName, notes: inputValueTakeNotes, id: taskId });
        setInputValueStockName('');
        setInputValueTakeNotes('');
    }

    const handleChangeStockName = e => {
        setInputValueStockName(e.target.value);
    }

    const handleChangeTakeNotes = e => {
        setInputValueTakeNotes(e.target.value);
    }

    return (
        <div className='task-container'>
            <input className='item' type='text' placeholder='UNTERNEHMEN' onChange={handleChangeStockName} value={inputValueStockName} />
            <button className='item' onClick={handleClick}>ADD</button>
            <input className='last-item' type='text' placeholder='NOTIZEN' onChange={handleChangeTakeNotes} value={inputValueTakeNotes} />
        </div>
    );
}

export default TaskAdder;
