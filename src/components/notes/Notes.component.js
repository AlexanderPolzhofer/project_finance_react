import React, { useState, useEffect } from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import Task from '../task/Task.component';
import TaskList from '../tasklist/Tasklist.component';

import './Notes.styles.css'

const Notes = () => {

    const [tasks, setTasks] = useState([<Task />]);

    useEffect(() => {
        setTasks(<Task />)
    }, []);

    const input = (value) => {
        console.log('inputvalue: ' + value)
    }

    return (
        <div className='notes-container'>
            <u><h1>Notizen</h1></u>
            <TaskAdder input={input} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default Notes;
