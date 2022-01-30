import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

const Notes = ({ note, handleDelete }) => {

    return (
        <div>
            <Card style={{ backgroundColor: note.color, marginBottom: '8px' }}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.text}</Card.Text>
                    <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
                    <Button className='mt-3' variant='danger' onClick={() => handleDelete(note.id)}>DELETE</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Notes;
