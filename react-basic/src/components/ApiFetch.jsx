import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ApiFetch = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    const [editedTask, setEditedTask] = useState({id: '', title: ''});
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/', {
            headers: {
                'Authorization' : 'Token c12069539fbd4f9ad59b11446567e60bd313da92'
            }
        })
        .then(res => {setTasks(res.data)})
    },[]);


    const getTask = () => {
        axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            headers: {
                'Authorization' : 'Token c12069539fbd4f9ad59b11446567e60bd313da92'
            }
        })
        .then(res => {setSelectedTask(res.data)})

    }

    const deleteTask = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            headers: {
                'Authorization' : 'Token c12069539fbd4f9ad59b11446567e60bd313da92'
            }
        })
        .then(res => {setTasks(tasks.filter(task => task.id !== id)); setSelectedTask([])})

    }


    const newTask = (task) => {
        const data = {
            title: task.title
        }

        axios.post(`http://127.0.0.1:8000/api/tasks/`, data, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token c12069539fbd4f9ad59b11446567e60bd313da92'
            }
        })
        .then(res => {setTasks([...tasks, res.data]); setEditedTask({id: '', title: ''})})

    }

    const editTask = (task) => {

        axios.put(`http://127.0.0.1:8000/api/tasks/${task.id}/`,task, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token c12069539fbd4f9ad59b11446567e60bd313da92'
            }
        })
        .then(res => {setTasks(tasks.map(task => (task.id === editedTask.id ? res.data : task)));
            setEditedTask({id: '', title: ''})
        })

    }

    const handleInputChange = () => evt => {
            const value = evt.target.value;
            const name = evt.target.name;
           setEditedTask({...editedTask, [name]:value})
        }

   return(

    <div>
        <ul>
            {
                tasks.map((task, index) => <li key={index}> {task.title} {task.id}
                    <button onClick={() => deleteTask(task.id)}>
                        <i className='fas fa-trash-alt'></i>
                    </button>

                    <button onClick={() => setEditedTask(task)}>
                        <i className='fas fa-pen'></i>
                    </button>
                </li>)
            }

        </ul>

        Set id <br />
        <input type="text" value={id} onChange={evt => {setId(evt.target.value)}} />
        <br />

        <button onClick={() => getTask()}>Get</button>
        <h3>{selectedTask.title} {selectedTask.id}</h3>

        <input type="text" name='title' value={editedTask.title} onChange={handleInputChange()} placeholder="New Task ?" required />
        {editedTask.id ? 
        <button onClick={() => editTask(editedTask)}>Update</button> :
        <button onClick={() => newTask(editedTask)}>Created</button> }

        {/* <button onClick={() => deleteTask()}>Delete</button> */}
    </div>

   )
}
