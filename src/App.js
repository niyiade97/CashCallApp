import { Routes, Route } from "react-router-dom";
import CashRequestPage from "./Views/CashRequestPage";
import ForgotPasswordPage from "./Views/ForgotPasswordPage";
import FundRequestPage from "./Views/FundRequestPage";
import LoginPage from "./Views/LoginPage";
import PasswordResetPage from "./Views/PasswordResetPage";
import TransactionPage from "./Views/TransactionPage";

function App() {
  return (
    <div className="font-sans">
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route  path="login" element={<LoginPage />} />
      <Route  path="forgot-password" element={<ForgotPasswordPage />} />
      <Route  path="reset-password" element={<PasswordResetPage />} />
      <Route  path="fund-request" element={<FundRequestPage />} />
      <Route  path="cash-request" element={<CashRequestPage />} />
      <Route  path="transaction" element={<TransactionPage />} />
    </Routes>
    </div>
  );
}

export default App;
