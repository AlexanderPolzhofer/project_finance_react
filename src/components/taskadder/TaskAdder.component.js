import React, { useState } from 'react';

import './TaskAdder.style.css';

function TaskAdder({ addTask }) {

    const [error, setError] = useState();
    const [inputValueStockName, setInputValueStockName] = useState('');
    const [inputValueTakeNotes, setInputValueTakeNotes] = useState('');
    const [taskId, setTaskId] = useState(1);

    const handleClick = () => {
        if (inputValueStockName === '' || inputValueTakeNotes === '') {
            return setError('Es müssen alle Eingabefelder befüllt werden!');
        } else {
            setTaskId(taskId + 1)
            addTask({ name: inputValueStockName, notes: inputValueTakeNotes, id: taskId });
            setInputValueStockName('');
            setInputValueTakeNotes('');
            setError('');
        }
    }

    const handleChangeStockName = e => {
        setInputValueStockName(e.target.value);
    }

    const handleChangeTakeNotes = e => {
        setInputValueTakeNotes(e.target.value);
    }

    return (
        <div>
            <div style={{ backgroundColor: '#ff6961', color: 'white', borderRadius: '5px', margin: '13px 0' }}>{null ? ' ' : error}</div>
            <div className='task-container'>
                <input style={{ backgroundColor: 'white' }} disabled placeholder='DATUM' />
                <input type='text' placeholder='UNTERNEHMEN' onChange={handleChangeStockName} value={inputValueStockName} />
                <button className='submitButton' onClick={handleClick}>ADD</button>
                <textarea cols={5} rows={10} className='inputNotes' type='text' placeholder='NOTIZEN' onChange={handleChangeTakeNotes} value={inputValueTakeNotes} />
            </div>
        </div>

    );
}

export default TaskAdder;
