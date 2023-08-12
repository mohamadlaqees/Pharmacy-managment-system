import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Reports from "./pages/Reports";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Content from "./pages/Content";
import Dashboard from "./layout/Dashboard";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Employees from "./pages/Employees";
import EmployeesDetails from "./pages/EmployeesDetails";
import JobApplications from "./pages/JobApplications";
import Stock from "./pages/Stock";
import SupplierContent from "./pages/SupplierContent";
import Supplier from "./pages/Supplier";
import Orders from "./pages/Orders";
import Backups from "./pages/Backups";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Content />} />
          <Route path="store" element={<Store />} />
          <Route path="store/product/:id" element={<Product />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees/details/:id" element={<EmployeesDetails />} />
          <Route path="employees/application/:id" element={<JobApplications />}/>
          <Route path="stock" element={<Stock />} />
          <Route path="supplierContent" element={<SupplierContent />}>
            <Route path="" element={<Supplier  />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="orders" element={<Orders />} />
          <Route path="backups" element={<Backups />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
