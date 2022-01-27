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
        if(err) console.log(err);
        else res.send(response);
    })
})

app.post('/addTask', (req, res) => {
    console.log(req.body.task.title)
    const ADD_QUERY = `
    INSERT INTO todo.tasks (
        task,
        date,
        notes
        ) 
        VALUES (
            '${req.body.task.title}',
            '${req.body.task.date}',
            '${req.body.task.notes}'
            )`;
    connection.query(ADD_QUERY, (err)=> {
        if(err) console.log(err);
        else res.send('task has been added');
    })
})

app.delete('/deleteTask/:taskid', (req, res) => {
    const DELETE_QUERY = `DELETE FROM todo.tasks where (taskid=${req.params.taskid})`;
    connection.query(DELETE_QUERY, (err, response)=> {
        if(err) console.log(err);
    })
})