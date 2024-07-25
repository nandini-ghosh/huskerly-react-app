import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SplashPage from "./SplashPage";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import UserInfo from "./LoginFlow/UserInfo";
import Register from "./LoginFlow/Register";
import ConfirmationPage from "./LoginFlow/ConfirmationPage";




function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/join-or-register" element={<JoinOrRegister />} />
            <Route path="/join" element={<UserInfo />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/registration-confirmation" element={<ConfirmationPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;