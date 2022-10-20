import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const[isOpen,setIsOpen]=useState(false);
  const[text,setText]=useState("Show Task Bar")
  const[task,setTask]=useState()
const url="https://6351820b3e9fa1244e608439.mockapi.io/apii/task"

  const toggle=()=>{
    setIsOpen(!isOpen);
    const buttonText=isOpen ? "Show Task Bar" :"Hide Task Bar"
    setText(buttonText)
  }

  const getTask=async ()=>{
    const {data}= await axios(url);
    setTask(data)
    console.log(data);
    
  }
  useEffect(()=>{
    getTask()
  },[])
  return (
    <div>
      <Button size="lg" onClick={(e)=>toggle()} variant="danger">{text}</Button>

      {isOpen && <AddTask />}
      <TaskList />
    </div>
  );
};

export default Home;
