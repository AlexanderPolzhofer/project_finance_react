import React from 'react';

import Task from '../task/Task.component';
import './Tasklist.styles.css';

const Tasklist = ({ tasks }) => {
    return (
        <div className='container'>
            {tasks.map(task => <Task key={task.id} stockName={task.name} notes={task.notes} />)}
        </div>
    );
}

export default Tasklist;
