import React, { useState } from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import TaskList from '../tasklist/Tasklist.component';

import './Notes.styles.css'

const Notes = () => {


    const [tasks, setTasks] = useState([]);

    const addTask = value => {
        setTasks(tasks => [...tasks, value])
    }

    

    return (
        <div className='notes-container'>
            <u><h1>Notizen</h1></u>
            <TaskAdder onTaskAdded={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default Notes;
