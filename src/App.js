import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import AddUserPage from "./Views/AdminView/AddUserPage";
import AllRequestPage from "./Views/UserView/AllRequestPage";

import SupervisorRequestPage from "./Views/SupervisorView/SupervisorRequestPage";
import SupervisorProfilePage from "./Views/SupervisorView/SupervisorProfilePage";
import SupervisorApprovedRequestPage from "./Views/SupervisorView/SupervisorApprovedRequestPage";
import SupervisorRejectedRequestsPage from "./Views/SupervisorView/SupervisorRejectedRequestsPage";
import SupervisorPendingRequestPage from "./Views/SupervisorView/SupervisorPendingRequestPage";
import SupervisorDisbursedRequestPage from "./Views/SupervisorView/SupervisorDisbursedRequestPage";

import ApprovedRequestPage from "./Views/UserView/ApprovedRequestPage";
import CashRequestPage from "./Views/UserView/CashRequestPage";
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

import AdminCashRequestPage from "./Views/AdminView/AdminCashRequestPage";
import AdminChequeRequestPage from "./Views/AdminView/AdminChequeRequestPage";
import AdminFundRequestPage from "./Views/AdminView/AdminFundRequestPage";
import AdminRequestPage from "./Views/AdminView/AdminRequestPage";
import AdminApprovedRequestPage from "./Views/AdminView/AdminApprovedRequestPage";
import AdminPendingRequestPage from "./Views/AdminView/AdminPendingRequestPage";
import AdminDisbursedRequestPage from "./Views/AdminView/AdminDisbursedRequestPage";

import DashboardPage from "./Views/AdminView/DashboardPage";
import DepartmentPage from "./Views/AdminView/DepartmentPage";
import AdminRejectedRequestsPage from "./Views/AdminView/AdminRejectedRequestsPage";
import AdminProfilePage from "./Views/AdminView/AdminProfilePage";

import UserProtectedRoute from "./Utils/auth/UserProtectedRoute";
import SupervisorProtectedRoute from "./Utils/auth/SupervisorProtectedRoute";
import AdminProtectedRoute from "./Utils/auth/AdminProtectedRoute";

function App() {

  console.log("environment", process.env);

  return (
    <div className="font-sans">
         <Router basename={process.env.REACT_APP_SUBFOLDER}>
          <Routes>
            {/* auth routes */}
            <Route  path="/" element={<LoginPage />} />
            <Route  path="login" element={<LoginPage />} />
            <Route  path="reset-password" element={<PasswordResetPage />} />
            
            {/* admin routes */}
            <Route path="users" element={<UsersPage />} />
            <Route path="departments" element={<DepartmentPage />}  />
            <Route  path="admin-profile" element={<AdminProfilePage />} />
            <Route  path="admin-approved-requests" element={<AdminApprovedRequestPage />} />
            <Route  path="admin-rejected-requests" element={<AdminRejectedRequestsPage />} />
            <Route  path="admin-pending-requests" element={ <AdminPendingRequestPage />} />
            <Route  path="admin-disbursed-requests" element={<AdminDisbursedRequestPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route  path="admin-fund-request" element={<AdminFundRequestPage />} />
            <Route  path="admin-requests" element={<AdminRequestPage />} />
            <Route  path="admin-cash-request" element={<AdminCashRequestPage />} />
            <Route  path="admin-cheque-request" element={<AdminChequeRequestPage />} />
            {/* <AdminProtectedRoute path="/dashboard" element={<DashboardPage />} />
            {/* user */}
            <Route  path="requests" element={<AllRequestPage />} />
            <Route  path="profile" element={<ProfilePage />} />
            <Route  path="fund-request" element={<FundRequestPage />} />
            <Route  path="cash-request" element={<CashRequestPage />} />
            <Route  path="cheque-request" element={<ChequeRequestPage />} />
            <Route  path="approved-requests" element={<ApprovedRequestPage />} />
            <Route  path="rejected-requests" element={<RejectedRequestsPage />} />
            <Route  path="pending-requests" element={<PendingRequestPage />} />
            <Route  path="disbursed-requests" element={<DisbursedRequestPage />} />
          
            {/* supervisor */}
            <Route  path="supervisor-requests" element={<SupervisorRequestPage />} />
            <Route  path="supervisor-profile" element={<SupervisorProfilePage />} />
            <Route  path="supervisor-approved-requests" element={<SupervisorApprovedRequestPage />} />
            <Route  path="supervisor-disbursed-requests" element={<SupervisorDisbursedRequestPage />} />
            <Route  path="supervisor-rejected-requests" element={<SupervisorRejectedRequestsPage />} />
            <Route  path="supervisor-pending-requests" element={<SupervisorPendingRequestPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
