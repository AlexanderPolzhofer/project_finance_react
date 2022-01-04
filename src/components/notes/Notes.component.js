import React from 'react';
import Note from './note-component/Note.component';
import './Notes.styles.css';

const Notes = () => {
    return (
        <div className='container'>
            <h1>NOTES</h1>
            <div>
                <input type='text'></input>
                <button type='submit'>ADD</button>
            </div>
            <div className='note-component'>
                <Note />
            </div>
        </div>
    );
}

export default Notes;
