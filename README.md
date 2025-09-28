# Pharmacy Management System (PMS)

Small-to-medium React application for managing a pharmacy: inventory, suppliers, orders, employees, job applications and user profile. Built with Create React App, React Router, Redux slices, Formik/Yup forms and Ant Design / Bootstrap UI components.

## Key features
- Authentication: login, forgot-password, password reset.
- Dashboard: overview widgets and quick stats.
- Product store: browse products, view product details, add to orders.
- Orders: manage in-store orders and view all orders (nested routes under Orders).
- Stock management: view stock, edit stock item details (price, min level, reorder).
- Supplier management: suppliers list, supplier purchase reports, supplier product purchase flow.
- Employees & HR: employees listing, employee details, job vacancies, job applications and application details.
- Profile: view and edit user profile including image upload.
- Pagination, date filters, rate display and data tables across pages.

## Routes (excerpt from pms/src/App.js)
- / -> Login
- /forgot-password
- /password-reset/:token
- /dashboard -> Dashboard layout
  - /dashboard -> Content (dashboard home)
  - /dashboard/store
  - /dashboard/store/product/:id
  - /dashboard/employeesContent
    - /dashboard/employeesContent/jobApplications
    - /dashboard/employeesContent/jobApplications/:id
    - /dashboard/employeesContent/details/:id
    - /dashboard/employeesContent/addVacancy
  - /dashboard/stock
  - /dashboard/stock/:id
  - /dashboard/supplierContent
    - /dashboard/supplierContent (supplier list)
    - /dashboard/supplierContent/reports
    - /dashboard/supplierContent/reports/:id
    - /dashboard/supplierContent/:id (supplier product)
  - /dashboard/orders
    - /dashboard/orders/all-orders
    - /dashboard/orders/in-store-orders
  - /dashboard/profile
  - /dashboard/editProfile

## Pages (important files)
- pms/src/pages/Content.js — Dashboard home
- pms/src/pages/Store.js — Product catalog
- pms/src/pages/Product.js — Product detail page
- pms/src/pages/Orders.js — Orders list
- pms/src/layout/OrderLayout.js — Orders nested routes
- pms/src/pages/InStoreOrders.js — In-store order management
- pms/src/pages/Profile.js, EditProfile.js — Profile view & edit
- pms/src/pages/Login.js, ForgotPassword.js, ResetPassword.js — Auth flows
- pms/src/pages/Employees*.js — Employees, details, job applications
- pms/src/pages/Stock*.js — Stock list and stock item management
- pms/src/pages/Supplier*.js — Supplier and reports pages
- pms/src/pages/Reports*.js — Purchase reports and details
- pms/src/pages/SupplyProducts.js — Supplier product purchase

## Tech stack
- React (Create React App)
- React Router v6
- Redux (slices per domain)
- Formik + Yup (forms & validation)
- Ant Design & React Bootstrap (UI components)
- Axios for API calls
- Jest / React Testing Library for tests (if present)

## Getting started (Windows)
1. From repository root:
   - npm install
2. App folder:
   - cd pms
   - npm install
   - npm start
3. Open http://localhost:3000

Build:
- cd pms
- npm run build
- Build output: pms/build

Tests:
- cd pms
- npm test

## Environment
- Typical env variables (add to pms/.env):
  - REACT_APP_API_URL=<api base URL>
  - REACT_APP_SOME_KEY=<optional>

Adjust names to match your backend and slices.

## Project structure (high level)
- pms/src/
  - components/ — shared UI components (uploader, stat cards, tables)
  - pages/ — route-level pages (listed above)
  - layout/ — Dashboard and nested layouts (OrderLayout, etc.)
  - states/ — redux slices (authSlice, storeSlice, stockSlice, jobSlice, supplySlice, orderSlice, etc.)
  - App.js — router and top-level route composition
  - index.js — app bootstrap

## Development tips
- Inspect `pms/src/App.js` for route composition and nested routes.
- Check relevant slice under `pms/src/states/` when a page is stuck in loading or fails to fetch data.
- Use the centralized axios instance (if present) to configure base URL and interceptors.
- Keep forms in Formik + Yup for consistent validation.


