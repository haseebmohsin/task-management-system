import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul
          className="tasks-ul"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Task
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                  />
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;
