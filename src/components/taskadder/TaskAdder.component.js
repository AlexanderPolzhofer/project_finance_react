import React, { useState } from 'react';

import './TaskAdder.style.css';

function TaskAdder() {

    const [inputValue, setInputValue] = useState('');


    const handleClick = e => {
        alert('click');
        console.log(e)

    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    return (
        <div className='task-container'>
            <input className='item' type='text' placeholder='DATUM' />
            <input className='item' type='text' placeholder='UNTERNEHMEN' onChange={handleChange} />
            <button className='item' onClick={handleClick}>ADD</button>
            <input className='last-item' type='text' placeholder='NOTIZEN' />
        </div>
    );
}

export default TaskAdder;
