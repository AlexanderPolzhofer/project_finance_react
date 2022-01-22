import React from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage/useLocalStorage';

import TaskAdder from '../taskadder/TaskAdder.component';
import TaskList from '../tasklist/Tasklist.component';

import './Notes.styles.css'

const Notes = () => {

    const [tasks, setTasks] = useLocalStorage('tasks',[]);

    // function addTask: gets a value (=task) and push it to the spreaded task array

    const addTask = value => {
        setTasks(tasks => [...tasks, value])
    }

    // function onDelete: gets a value (=id), compares the id with the task id 
    // and returns true if they match, creates a new Array and set it to the state

    const onDelete = (id) => {
        const taskArray = tasks.filter((task) => task.id !== id);
        setTasks(taskArray)
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
