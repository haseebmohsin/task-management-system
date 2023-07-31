# Task Management System

This project is a Task Management System built using React, where users can create, update, and delete tasks. The application uses JSON Server as a fake API to manage tasks.

## Getting Started

To run this application, follow the steps below:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.

### Start JSON Server

Before running the frontend, you need to start the JSON Server to simulate the backend API. To do this, run the following command:

`npm run start-server`

The JSON Server will start and serve the data from the src/db.json file on http://localhost:3001.

### Start the Frontend

Once the JSON Server is up and running, you can start the frontend of the application. Open another terminal and navigate to the project directory.

`npm start`

The app will run in the development mode and open http://localhost:3000 in your default browser.

### Features

1. User can register and select a specific group to which they want to belong to.
2. User can login and after login they will redirected to the task management home page.
3. Users can add new tasks to the system by providing a task name and description.
4. Tasks can be marked as completed or incomplete.
5. Users can delete tasks they no longer need.
6. Tasks can be re-ordered using drag and drop functionality.

This Task Management System provides a simple and intuitive user interface to manage tasks effectively.

### Dependencies

The application uses the following dependencies:

`axios` - For making HTTP requests to the JSON Server.

`json-server` - To simulate a backend server and serve the data.

`react` - The core library to build the user interface.

`react-beautiful-dnd` - For drag and drop functionality in task re-ordering.

`react-hot-toast` - For displaying toast notifications.

Please make sure you have Node.js and npm installed on your machine to run the application.

**Note:** They real time notifications are not possible while using json mock server, we can convert the backend of this app and use something like Express.js and than we can easily integrate real time notifications by using socket.io.

Now you can use the Task Management System! Feel free to explore the code and enhance the features as per your requirements. Happy task managing!
