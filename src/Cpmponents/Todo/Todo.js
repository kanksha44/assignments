import React, { useState, useEffect } from "react";
import "./Todo.css";
import Newtask from "./../NewTask/Newtask";

function Task({ task, index, Completetask, Deletetask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => Deletetask(index)}>
        x
      </button>
      <button onClick={() => Completetask(index)}>Complete</button>
    </div>
  );
}
function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Do Codezinger problems",
      completed: true,
    },
    {
      title: "Go for a walk",
      completed: true,
    },
    {
      title: "Assignment video",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const Completetask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  const Deletetask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            Completetask={Completetask}
            Deletetask={Deletetask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <Newtask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
