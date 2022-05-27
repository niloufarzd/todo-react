import React, { useState } from 'react'
import './style.css'
import TaskList from './TaskList';

const App =() =>{
  const [newTaskText,setNewTaskText] =useState("");
  const [tasks,setTasks]= useState([
    "do a task","do","just do"
  ]);

  const addTask = ()=>{
    if(!newTaskText)
    return
    setTasks( currentTasks=>{
     return [...currentTasks ,newTaskText]
    })
    setNewTaskText("")

  };
  const onChangeInput = (e)=>{
   const value= e.target.value;
   setNewTaskText(value);
  }
  return (
    <div className={"container"}>
      <input value={newTaskText} onChange={onChangeInput}/><button onClick={addTask}>add</button>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default App
