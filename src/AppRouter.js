import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SplashPage from "./SplashPage";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import UserInfo from "./LoginFlow/UserInfo";
import Register from "./LoginFlow/Register";
import ConfirmationPage from "./LoginFlow/ConfirmationPage";
import Approvals from "./SystemAdmin/Approvals";
import ManageOrganizations from "./SystemAdmin/ManageOrganizations";
import Home from "./Dashboard/Home";
import Profile from "./Dashboard/Profile";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Login (Join/Register) */}
                <Route path="/" element={<SplashPage />} />
                <Route path="/join-or-register" element={<JoinOrRegister />} />
                <Route path="/join" element={<UserInfo />} />
                <Route path="/register" element={<Register />} />
                <Route path="/registration-confirmation" element={<ConfirmationPage />} />

                {/* Settings */}
                <Route path="/profile" element={<Profile />} />

                {/* System Admin */}
                <Route path="/approvals" element={<Approvals />} />
                <Route path="/manage-organizations" element={<ManageOrganizations />} />

                {/* Messaging Dashboard */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;