import { Routes, Route } from "react-router-dom";
import AddUserPage from "./Views/AddUserPage";
import AllRequestPage from "./Views/AllRequestPage";
import ApprovedRequestPage from "./Views/ApprovedRequestPage";
import CashRequestPage from "./Views/CashRequestPage";
import ChangePasswordPage from "./Views/ChangePasswordPage";
import ChequeRequestPage from "./Views/ChequeRequest";
import DisbursedRequestPage from "./Views/DisbursedRequestPage";
import ForgotPasswordPage from "./Views/ForgotPasswordPage";
import FundRequestPage from "./Views/FundRequestPage";
import LoginPage from "./Views/LoginPage";
import PasswordResetPage from "./Views/PasswordResetPage";
import PendingRequestPage from "./Views/PendingRequestPage";
import ProfilePage from "./Views/ProfilePage";
import RejectedRequestsPage from "./Views/RejectedRequestsPage";
import UsersPage from "./Views/UsersPage";
function App() {
  return (
    <div className="font-sans">
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route  path="login" element={<LoginPage />} />
      <Route  path="forgot-password" element={<ForgotPasswordPage />} />
      <Route  path="reset-password" element={<PasswordResetPage />} />
      <Route  path="dashboard" element={<FundRequestPage />} />
      <Route  path="cash-request" element={<CashRequestPage />} />
      <Route  path="requests" element={<AllRequestPage />} />
      <Route  path="approved-requests" element={<ApprovedRequestPage />} />
      <Route  path="rejected-requests" element={<RejectedRequestsPage />} />
      <Route  path="pending-requests" element={<PendingRequestPage />} />
      <Route  path="disbursed-requests" element={<DisbursedRequestPage />} />
      <Route  path="cheque-request" element={<ChequeRequestPage />} />
      <Route  path="profile" element={<ProfilePage />} />
      <Route  path="profile/change-password" element={<ChangePasswordPage />} />
      <Route  path="users" element={<UsersPage />} />
      <Route  path="users/addUser" element={<AddUserPage />} />
    </Routes>
    </div>
  );
}

export default App;
