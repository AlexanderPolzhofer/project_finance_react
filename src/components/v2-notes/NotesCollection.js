import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NotesList from './NotesList';
import CreateNotes from './CreateNotes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from '../../utils/useLocalStorage/useLocalStorage';

const NotesCollection = () => {
    const [notes, setNotes] = useLocalStorage('notes', []);

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <NotesList notes={notes} setNotes={setNotes} />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <CreateNotes notes={notes} setNotes={setNotes} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NotesCollection;
