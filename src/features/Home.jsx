import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { toast } from "react-hot-toast";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles/Home.css";
import Header from "../components/Header";
import {
  getTasksByGroupId as getTasksByGroupIdAPI,
  addTask as addTaskAPI,
  updateTask as updateTaskAPI,
  deleteTask as deleteTaskAPI,
} from "../api";

const Home = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve user data from localStorage on component mount
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userFromLocalStorage);

    // Redirect to login page if user data is not available
    if (!userFromLocalStorage) {
      navigate("/login");
    } else {
      fetchTasks(userFromLocalStorage.groupId);
    }
  }, [navigate]);

  const fetchTasks = async (groupId) => {
    try {
      const tasksResponse = await getTasksByGroupIdAPI(groupId);
      const tasks = tasksResponse.data;
      setTasks(tasks);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setIsLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      if (!user || !user.groupId) {
        toast.error("User details not available. Please log in again.");
        return;
      }

      // Add id and groupId to the task
      const newTask = {
        id: new Date().getTime(),
        groupId: user.groupId,
        ...task,
      };

      const response = await addTaskAPI(newTask);

      setTasks([...tasks, response.data]);
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      if (!taskToUpdate) return;

      const updatedTask = {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      };

      await updateTaskAPI(taskId, updatedTask);
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? updatedTask : task
      );

      setTasks(updatedTasks);
      toast.success("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteTaskAPI(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));

      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Error deleting task!");
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = Array.from(tasks);
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Header user={user} />

      <div className="home-container">
        <div className="tasks-list-container">
          {isLoading && <div className="loading-container"> Loading...</div>}

          {!isLoading && tasks.length > 0 && (
            <DragDropContext onDragEnd={onDragEnd}>
              <h1>Task List</h1>

              <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </DragDropContext>
          )}
        </div>

        <div className="add-task-form-container">
          <h1>Add New Task</h1>
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </>
  );
};

export default Home;
