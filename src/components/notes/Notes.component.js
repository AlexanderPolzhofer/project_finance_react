import React, { useState } from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import TaskList from '../tasklist/Tasklist.component';

import './Notes.styles.css'

const Notes = () => {

    const [tasks, setTasks] = useState([]);

    // function addTask: gets a value (=task) and push it to the spreaded task array
    const addTask = value => {
        setTasks(tasks => [...tasks, value])
    }

    // function onDelete: gets a value (=id) and checks wich task should be removed
    const onDelete = (id) => {
        alert("Notes: " + id)
    }

    return (
        <div className='notes-container'>
            <u><h1>Notizen</h1></u>
            <TaskAdder addTask={addTask} />
            <TaskList tasks={tasks} onDelete={onDelete} />
        </div>
    );
}

export default Notes;
