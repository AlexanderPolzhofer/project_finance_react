import React, { useState, useRef } from 'react';

import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

const Createnotes = ({ notes, setNotes }) => {
    const [error, setError] = useState('');

    const titleRef = useRef(null);
    const textRef = useRef(null);
    const colorRef = useRef(null);

    const setValuesToEmptyString = () => {
        (titleRef.current).value = '';
        (textRef.current).value = '';
        (colorRef.current).value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleRef.current.value === '' || textRef.current?.value === '') {
            return setError('Es müssen alle Felder befüllt werden!')
        }
        setError('');
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current).value,
            text: (textRef.current).value,
            color: (colorRef.current).value,
            date: (new Date()).toString()
        }])

        setValuesToEmptyString();
    }

    return (
        <>
            <h2>Create Notes</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Titel</Form.Label>
                    <Form.Control type="text" placeholder="Gib den Titel ein" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder="Gib deine Notizen ein" ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control defaultValue='#dfdfdf' type="color" id='colorInput' title="Wähle eine Farbe" ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary'>SUBMIT</Button>
            </Form>
        </>
    );
}

export default Createnotes;
