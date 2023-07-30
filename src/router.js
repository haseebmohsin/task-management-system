import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./features/ErrorPage";
import Home from "./features/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <LoginForm />,
      },

      {
        path: "/login",
        element: <LoginForm />,
      },

      {
        path: "/register",
        element: <RegistrationForm />,
      },

      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
