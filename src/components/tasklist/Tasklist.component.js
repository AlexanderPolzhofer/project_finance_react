import React from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import Task from '../task/Task.component';


const Tasklist = () => {
    return (
        <div className='container'>
            <h1>NOTES</h1>
            <TaskAdder />
            <Task />

        </div>
    );
}

export default Tasklist;
