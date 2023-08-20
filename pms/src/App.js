import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Reports from "./pages/Reports";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Content from "./pages/Content";
import Dashboard from "./layout/Dashboard";
import Store from "./pages/Store";
import EmployeesContent from "./pages/EmployeesContent";
import EmployeesDetails from "./pages/EmployeesDetails";
import ApplicationDetails from "./pages/ApplicationDetails";
import Stock from "./pages/Stock";
import SupplierContent from "./pages/SupplierContent";
import Supplier from "./pages/Supplier";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import JobApplications from "./pages/JobApplications";
import SupplyProducts from "./pages/SupplyProducts";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OrderLayout from "./layout/OrderLayout";
import InStoreOrders from "./pages/InStoreOrders";
import AddVacancy from "./pages/AddVacancy";
import ReportsDetails from "./pages/ReportsDetails";
import StockDetails from "./pages/StockDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Content />} />
          <Route path="store" element={<Store />} />
          <Route path="store/product/:id" element={<Product />} />
          <Route path="employeesContent" element={<EmployeesContent />}>
            {/* <Route path="" element={<Employees />} /> */}
            <Route path="jobApplications" element={<JobApplications />} />
            <Route path="addVacancy" element={<AddVacancy />} />
          </Route>

          <>
            <Route
              path="employeesContent/jobApplications/:id"
              element={<ApplicationDetails />}
            />
            <Route
              path="employeesContent/details/:id"
              element={<EmployeesDetails />}
            />
            <Route
              path="dashboard/employeesContent/jobApplications"
              element={<JobApplications />}
            />
          </>

          <>
            <Route path="stock" element={<Stock />} />
            <Route path="stock/:id" element={<StockDetails />} />
            <Route path="dashboard/stock" element={<Reports />} />
          </>

          <>
            <Route path="supplierContent" element={<SupplierContent />}>
              <Route path="" element={<Supplier />} />
              <Route path="reports" element={<Reports />} />
            </Route>
            <Route
              path="dashboard/supplierContent/reports"
              element={<Reports />}
            />
            <Route
              path="supplierContent/reports/:id"
              element={<ReportsDetails />}
            />
            <Route path="supplierContent/:id" element={<SupplyProducts />} />
          </>

          <Route path="orders" element={<OrderLayout />}>
            <Route path="all-orders" element={<Orders />} />
            <Route path="in-store-orders" element={<InStoreOrders />} />
          </Route>

          <>
            <Route path="profile" element={<Profile />} />
            <Route path="editProfile" element={<EditProfile />} />
          </>
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="password-reset/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
