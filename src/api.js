import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const addUser = (user) => api.post("/users", user);
export const getGroups = () => api.get("/groups");

export const getTasks = () => api.get("/tasks");
export const getTasksByGroupId = (groupId) =>
  api.get(`/tasks?groupId=${groupId}`);
export const addTask = (task) => api.post("/tasks", task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
