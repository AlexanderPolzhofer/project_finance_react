import React from 'react';

import Notes from './Notes';

import 'bootstrap/dist/css/bootstrap.min.css';

const Noteslist = ({ notes, setNotes }) => {
    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const renderNotes = () => {
        if (notes === null || undefined) {
            return null;
        } else {
            return notes.map(note =>
                <Notes key={note.id} note={note} handleDelete={handleDelete} />)
        }
    }

    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            {renderNotes()}
        </>
    );
}

export default Noteslist;
