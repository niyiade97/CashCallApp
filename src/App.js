import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import AddUserPage from "./Views/AdminView/AddUserPage";
import AllRequestPage from "./Views/UserView/AllRequestPage";
import ApprovedRequestPage from "./Views/UserView/ApprovedRequestPage";
import CashRequestPage from "./Views/UserView/CashRequestPage";
import ChangePasswordPage from "./Views/UserView/ChangePasswordPage";
import ChequeRequestPage from "./Views/UserView/ChequeRequest";
import DisbursedRequestPage from "./Views/UserView/DisbursedRequestPage";
import ForgotPasswordPage from "./Views/ForgotPasswordPage";
import FundRequestPage from "./Views/UserView/FundRequestPage";
import LoginPage from "./Views/LoginPage";
import PasswordResetPage from "./Views/PasswordResetPage";
import PendingRequestPage from "./Views/UserView/PendingRequestPage";
import ProfilePage from "./Views/UserView/ProfilePage";
import RejectedRequestsPage from "./Views/UserView/RejectedRequestsPage";
import UsersPage from "./Views/AdminView/UsersPage";
import AdminRequestPage from "./Views/AdminView/AdminRequestPage";
import AdminApprovedRequestPage from "./Views/AdminView/AdminApprovedRequestPage";
import AdminPendingRequestPage from "./Views/AdminView/AdminPendingRequestPage";
import AdminDisbursedRequestPage from "./Views/AdminView/AdminDisbursedRequestPage";
import "tailwindcss/tailwind.css";
import DashboardPage from "./Views/AdminView/DashboardPage";
import DepartmentPage from "./Views/AdminView/DepartmentPage";
import AddDepartmentPage from "./Views/AdminView/AddDepartmentPage";
import AdminRejectedRequestsPage from "./Views/AdminView/AdminRejectedRequestsPage";

function App() {

  console.log("environment", process.env);

  return (
    <div className="font-sans">
        <BrowserRouter basename={process.env.REACT_APP_SUBFOLDER}>
          <Routes>

            {/* auth routes */}
            <Route  path="/" element={<LoginPage />} />
            <Route  path="login" element={<LoginPage />} />
            <Route  path="reset-password" element={<PasswordResetPage />} />
            <Route  path="forgot-password" element={<ForgotPasswordPage />} />
            
            {/* admin routes */}
            <Route path="users" element={ <UsersPage  /> }  />
            <Route path="users/addUser" element={<AddUserPage /> } />

            <Route path="departments" element={ <DepartmentPage  /> }  />
            <Route path="departments/addDepartment" element={<AddDepartmentPage /> } />
           
            

            
            
            <Route  path="profile" element={<ProfilePage />} />
            <Route  path="profile/change-password" element={<ChangePasswordPage />} />
            
            <Route path="fund-request" element={<FundRequestPage />} />
            
            <Route  path="admin-approved-requests" element={<AdminApprovedRequestPage />} />
            <Route  path="admin-rejected-requests" element={<AdminRejectedRequestsPage />} />
            <Route  path="admin-pending-requests" element={<AdminPendingRequestPage />} />
            <Route  path="admin-disbursed-requests" element={<AdminDisbursedRequestPage />} />

            
            <Route path="dashboard" element={<DashboardPage />} />

            {/* user */}
            <Route path="fund-request" element={<FundRequestPage />} />
            <Route  path="cash-request" element={<CashRequestPage />} />
            <Route  path="cheque-request" element={<ChequeRequestPage />} />

            <Route  path="requests" element={<AllRequestPage />} />
            <Route  path="admin-requests" element={<AdminRequestPage />} />

            <Route  path="approved-requests" element={<ApprovedRequestPage />} />
            <Route  path="rejected-requests" element={<RejectedRequestsPage />} />
            <Route  path="pending-requests" element={<PendingRequestPage />} />
            <Route  path="disbursed-requests" element={<DisbursedRequestPage />} />
          </Routes>

          
        </BrowserRouter>
    </div>
  );
}

export default App;
