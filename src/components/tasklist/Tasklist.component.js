import React from 'react';

import Task from '../task/Task.component';
import styles from './Tasklist.styles.css';

const Tasklist = ({ tasks, onDelete }) => {

    return (
        <div className={styles.container}>
            {tasks.map(task => {
                return <div className={styles.taskComponent}>
                    <Task
                        key={task.id}
                        id={task.id}
                        stockName={task.name}
                        notes={task.notes}
                        onDelete={onDelete}
                    />
                </div>
            })}
        </div>
    );
}

export default Tasklist;
