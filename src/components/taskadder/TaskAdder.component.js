import React from 'react';

import './TaskAdder.style.css';

const TaskAdder = () => {

    return (
        <div className='task-container'>
            <input className='item' type='text' placeholder='DATUM' />
            <input className='item' type='text' placeholder='UNTERNEHMEN' />
            <button className='item' type='submit' onClick={() => alert('clicke')}>ADD</button>
            <input className='last-item' type='text' placeholder='NOTIZEN' />
        </div>
    );
}

export default TaskAdder;
