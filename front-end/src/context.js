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
        console.log('worked')
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => setTaskList([response]));
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/addTask',{
            
            task: {
                title: title,
                date: date,
                notes: notes
            }
        }).then(function (response) {
            getTaskList();
          })
          .catch(function (error) {
            console.log(error);
          });
        setTitle('');
        setDate('');
        setNotes('');
    }

    const getTaskList = () => {
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => setTaskList([response]));
    }
    
    const onClickDelete = (id) => {
        console.log('deleted')
        axios.delete(`http://localhost:4000/deleteTask/${id}`)
        setTitle('');
        setDate('');
        setNotes('');
    }

    useEffect(() => {
        getTaskList();
    },[taskList])

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

