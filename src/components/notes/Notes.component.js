import React, { useState, useEffect } from 'react';

import TaskAdder from '../taskadder/TaskAdder.component';
import Task from '../task/Task.component';
import TaskList from '../tasklist/Tasklist.component';

import './Notes.styles.css'

const Notes = () => {

    const [stockName, setStockName] = useState('');
    const [notes, setNotes] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = value => {
        alert("adding task: " + value)
        console.log(value)
        setStockName(value.name)
        setNotes(value.notes)

        setTasks(tasks =>[...tasks,value])
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
