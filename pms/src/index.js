import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./all.min.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./layout/Dashboard";
import Content from "./pages/Content";
import Store from "./pages/Store";
import Stock from "./pages/Stock";
import Backups from "./pages/Backups";
import Employees from "./pages/Employees";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Product from "./pages/Product";
import EmployeesDetails from "./pages/EmployeesDetails";
import JobApplications from "./pages/JobApplications";
import Supplier from "./pages/Supplier";
const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Content /> },
      { path: "store", element: <Store /> },
      { path: "store/product/:id", element: <Product /> },
      { path: "employees", element: <Employees /> },
      { path: "employees/details/:id", element: <EmployeesDetails /> },
      { path: "employees/application/:id", element: <JobApplications /> },
      { path: "stock", element: <Stock /> },
      { path: "supplier", element: <Supplier /> },
      { path: "orders", element: <Orders /> },
      { path: "backups", element: <Backups /> },
      { path: "profile", element: <Profile /> },
      { path: "editProfile", element: <EditProfile /> },
    ],
  },
]);
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
