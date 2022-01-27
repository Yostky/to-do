import { Form, Row, Button, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { AppContext } from '../context';


const TaskList = () => {
    const {
        title,
        date,
        notes,
        setTitle,
        setDate,
        setNotes,
        handleSubmit,
        getTaskList
    } = useContext(AppContext);

    return (
        <Form className="background borderLine p-5 mx-auto max-width " onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3 justify" controlId="formHorizontalEmail" >
                <Form.Label column sm={3}>
                Task title
                </Form.Label>
                <Col sm={5}>
                <Form.Control type="textarea" value = {title} placeholder="Add title" onChange={(e)=> setTitle(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify" controlId="formHorizontalPassword">
                <Form.Label column sm={3}>
                Complete by
                </Form.Label>
                <Col sm={5}>
                <Form.Control type="date" value = {date} placeholder="Date to be completed" onChange={(e)=> setDate(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify" controlId="formHorizontalPassword">
                <Form.Label column sm={3}>
                Task notes
                </Form.Label>
                <Col sm={5}>
                <Form.Control type="textarea" value = {notes} placeholder="Add notes" onChange={(e)=> setNotes(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify">
                <Col sm={{ span: 5, offset: 1 }}>
                <Button type="submit" onClick={getTaskList}>Save task</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default TaskList;