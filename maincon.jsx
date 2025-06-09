import React, { useState } from "react";
import './maincon.css';

function Container() {
  
    
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      if (task.trim() !== "") {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask("");
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    const toggleComplete = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    return (
      <div className="container">
        <div className="box input-box">
          <h1>📝 To-Do List</h1>
          <div>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
              className="input"
            />
            <button onClick={addTask} className="button">Add</button>
          </div>
        </div>
  
        <div className="box list-box">
          <ul className="list">
            {tasks.map((item, index) => (
              <li key={index} className="list-item">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(index)}
                />
                <span className={item.completed ? "completed" : ""}>
                  {item.text}
                </span>
                <button onClick={() => deleteTask(index)} className="delete-button">❌</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}






export default Container;