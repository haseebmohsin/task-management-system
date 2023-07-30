import React from "react";
import "../styles/Task.css";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task-container ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>
      </div>

      <div className="task-action-buttons-container">
        <button
          className={`completed-button ${
            task.completed ? "complete" : "incomplete"
          }`}
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Incomplete" : "Complete"}
        </button>

        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
