import React, { useState } from "react"
import {Names} from './Item';

 export default function App() {
   const [query, setQuery] = React.useState("");
   const [tasks, setTasks] = React.useState([]);
    const handleChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    const handleAdd = () => {
        const payload = {
            title: query,
            status: false
        }

        let newitem = [...tasks, payload]
        setTasks(newitem)
    }
    console.log(tasks)
    return (
        <div>
            <h1>TASKS</h1>
            <input value = {query} placeholder="add something" onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
            <div>
                {tasks.map((item) => {
                   return (<Names { ...item} />) ; 
                })}
            </div>
        </div>
        
    )
};
