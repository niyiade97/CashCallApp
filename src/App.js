import { Routes, Route, BrowserRouter } from "react-router-dom";
import React,{ useState } from "react";
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import UserDashboardContainer from "./Components/User/UserDashboardContainer";
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
import AdminChequeRequestPage from "./Views/AdminView/AdminChequeRequestPage";
import AdminProfilePage from "./Views/AdminView/AdminProfilePage";
import AdminChangePasswordPage from "./Views/AdminView/AdminChangePasswordPage";
import AdminCashRequestPage from "./Views/AdminView/AdminCashRequestPage";
import AdminFundRequestPage from "./Views/AdminView/AdminFundRequestPage";
import DataContext from "./Utils/DataContext";
import DataContextprovider from "./Utils/DataContext";
import DataContextProvider from "./Utils/DataContext";
import "tailwindcss/tailwind.css";

function App() {
 
  return (
    <div className="font-sans">

    
    <DataContextProvider basename={process.env.PUBLIC_URL}>
    <Routes>    
   
      <Route path="users" element={ <UsersPage  /> }  />
      <Route path="users/addUser" element={<AddUserPage /> } />
    
     
      <Route  path="/" element={<FundRequestPage />} />
      <Route  path="login" element={<LoginPage />} />
      <Route  path="forgot-password" element={<ForgotPasswordPage />} />
      <Route  path="reset-password" element={<PasswordResetPage />} />
      <Route  path="requests" element={<AllRequestPage />} />
      <Route  path="approved-requests" element={<ApprovedRequestPage />} />
      <Route  path="rejected-requests" element={<RejectedRequestsPage />} />
      <Route  path="pending-requests" element={<PendingRequestPage />} />
      <Route  path="disbursed-requests" element={<DisbursedRequestPage />} />
      <Route  path="cheque-request" element={<ChequeRequestPage />} />
      <Route  path="profile" element={<ProfilePage />} />
      <Route  path="profile/change-password" element={<ChangePasswordPage />} />
      
      <Route  path="cash-request" element={<CashRequestPage />} />
      <Route path="home" element={<FundRequestPage />} />

      <Route  path="admin-requests" element={<AdminRequestPage />} />
      <Route  path="admin-approved-requests" element={<AdminApprovedRequestPage />} />
      <Route  path="admin-rejected-requests" element={<AdminRequestPage />} />
      <Route  path="admin-pending-requests" element={<AdminPendingRequestPage />} />
      <Route  path="admin-disbursed-requests" element={<AdminDisbursedRequestPage />} />
      <Route  path="admin-cheque-request" element={<AdminChequeRequestPage />} />
      <Route  path="admin-profile" element={<AdminProfilePage />} />
      <Route  path="admin-profile/change-password" element={<AdminChangePasswordPage />} />
      
      <Route  path="admin-cash-request" element={<AdminCashRequestPage />} />
      <Route path="dashboard" element={<AdminFundRequestPage />} />
    </Routes>
    </DataContextProvider>
    
    
    {/* <DashboardContainer>
      <Routes>
      <Route  path="dashboard" element={<FundRequestPage />} />
      </Routes>
    </DashboardContainer> */}
    </div>
  );
}

export default App;
