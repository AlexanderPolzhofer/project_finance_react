import React from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import TaskList from '../tasklist/Tasklist.component';

const Notes = () => {
    return (
        <div>
            <h1>NOTES</h1>
            <TaskAdder />
            <TaskList />
        </div>
    );
}

export default Notes;
