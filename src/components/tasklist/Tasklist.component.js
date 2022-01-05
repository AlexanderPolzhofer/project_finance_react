import React from 'react';

import './Tasklist.styles.css';

const Tasklist = (props) => {
    const { tasks } = props;

  
    return (
        <div className='container'>

            {tasks}
          
        </div>
    );
}

export default Tasklist;
