import React from "react";

const Completetask = ({ task, index, Completetask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button onClick={() => Completetask(index)}>Complete</button>
    
    </div>
 
    

);
};

export default Completetask;
