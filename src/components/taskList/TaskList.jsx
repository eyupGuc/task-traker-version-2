import React from 'react'
import {RiDeleteBack2Fill} from "react-icons/ri"

const TaskList = ({task}) => {
  console.log(task)
  return (
    <div>
      
      {task.map((item)=>{
        const[id,task,date]=item;
        return <div 
        key={id}
        className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2" >
            <div>
            <h4>{task}</h4>
            <p>{date}</p>
            </div>
            <div>
            <RiDeleteBack2Fill
            style={{
              
            }}/>
            </div>
        </div>
      })}
    </div>
  )
}

export default TaskList
