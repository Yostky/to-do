import { createContext } from "react";
import axios from 'axios';
import React, {useState, useEffect} from 'react';
 
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => setTaskList([...response]));
    },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            date,
            notes
        }

        await axios.post('http://localhost:4000/addTask',{
            task: newTask
        })

        .then((response) => {
            const id = response.data.id;
            newTask.taskid = id
            setTaskList([...taskList, newTask])
        })

        .catch((error) => {
            console.log("error: ", error);
        });
        setTitle('');
        setDate('');
        setNotes('');
    }

    const getTaskList = () => {
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => setTaskList([...response]));
    }
    
    const onClickDelete = (id, index) => {
        axios.delete(`http://localhost:4000/deleteTask/${id}`)
        setTitle('');
        setDate('');
        setNotes('');
        const taskListBuffer = taskList;
        taskListBuffer.splice(index, 1);
        setTaskList([...taskListBuffer]);
    }

    return (
        <AppContext.Provider value={{
            title,
            date,
            notes,
            taskList,
            setTitle,
            setDate,
            setNotes,
            setTaskList,
            handleSubmit,
            getTaskList,
            onClickDelete
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const {Consumer} = AppContextProvider;

export default AppContextProvider;

