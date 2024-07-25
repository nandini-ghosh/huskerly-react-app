import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SplashPage from "./SplashPage";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import UserInfo from "./LoginFlow/UserInfo";
import Register from "./LoginFlow/Register";
import ConfirmationPage from "./LoginFlow/ConfirmationPage";
import Approvals from "./SystemAdmin/Approvals";

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            {/* Login (Join/Register) */}
            <Route path="/" element={<SplashPage />} />
            <Route path="/join-or-register" element={<JoinOrRegister />} />
            <Route path="/join" element={<UserInfo />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/registration-confirmation" element={<ConfirmationPage/>} />

            {/* System Admin */}
            <Route path="/approvals" element={<Approvals/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;