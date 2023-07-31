import "../styles/Task.css";
import Button from "./Button";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task-container ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>
      </div>

      <div className="task-action-buttons-container">
        <Button
          className={`completed-button ${
            task.completed ? "complete" : "incomplete"
          }`}
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Incomplete" : "Complete"}
        </Button>

        <Button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
