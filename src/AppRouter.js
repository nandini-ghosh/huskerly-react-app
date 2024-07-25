import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import UserInfo from "./LoginFlow/UserInfo";
import SplashPage from "./SplashPage";




function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/join-or-register" element={<JoinOrRegister />} />
            <Route path="/user-info" element={<UserInfo />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;