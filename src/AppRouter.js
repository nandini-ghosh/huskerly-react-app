import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import SplashPage from "./SplashPage";

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashPage/>}></Route>
            <Route path="/join-or-register" element={<JoinOrRegister/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;