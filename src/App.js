import { Routes, Route } from "react-router-dom";
import CashRequestPage from "./Views/CashRequestPage";
import ForgotPasswordPage from "./Views/ForgotPasswordPage";
import FundRequestPage from "./Views/FundRequestPage";
import LoginPage from "./Views/LoginPage";
import PasswordResetPage from "./Views/PasswordResetPage";

function App() {
  return (
    <div className="font-sans">
    <Routes>
      <Route exact path="login" element={<LoginPage />} />
      <Route exact path="forgot-password" element={<ForgotPasswordPage />} />
      <Route exact path="reset-password" element={<PasswordResetPage />} />
      <Route exact path="fund-request" element={<FundRequestPage />} />
      <Route exact path="cash-request" element={<CashRequestPage />} />
    </Routes>
    </div>
  );
}

export default App;
