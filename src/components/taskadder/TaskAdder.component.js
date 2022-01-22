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
            <input style={{ backgroundColor: 'white' }} disabled placeholder='DATUM' />
            <input type='text' placeholder='UNTERNEHMEN' onChange={handleChangeStockName} value={inputValueStockName} />
            <button className='submitButton' onClick={handleClick}>ADD</button>
            <textarea cols='5' rows='10' className='inputNotes' type='text' placeholder='NOTIZEN' onChange={handleChangeTakeNotes} value={inputValueTakeNotes}/>
        </div>
    );
}

export default TaskAdder;
