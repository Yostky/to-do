const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4000;

app.listen(port, ()=> {
    console.log('app is running on port 4000')
})

app.get('/tasks', (req, res) => {
    const TASK_QUERY = "SELECT * FROM todo.tasks"
    connection.query(TASK_QUERY, (err, response)=> {
        if(err) console.log("error ln 18:", err);
        else res.send(response);
    })
})

app.post('/addTask', (req, res) => {
    const ADD_QUERY = `
    INSERT INTO todo.tasks (
        title,
        date,
        notes
        ) 
        VALUES (
            ?,
            ?,
            ?
        )`;
    connection.query(ADD_QUERY, [
        req.body.task.title,
        req.body.task.date,
        req.body.task.notes
    ], 
    (err, response)=> {
        if(err) console.log("error ln 42:",err);
        return res.send({id: response.insertId});
    })
})

app.delete('/deleteTask/:taskid', (req, res) => {
    const DELETE_QUERY = `DELETE FROM todo.tasks where (taskid=${req.params.taskid})`;
    connection.query(DELETE_QUERY, (err, response)=> {
        if(err) console.log("error ln 50:",err);
        return res.send(response);
    })
})