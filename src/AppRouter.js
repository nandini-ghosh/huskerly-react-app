import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SplashPage from "./SplashPage";
import JoinOrRegister from "./LoginFlow/JoinOrRegister";
import UserInfo from "./LoginFlow/UserInfo";
import Register from "./LoginFlow/Register";
import ConfirmationPage from "./LoginFlow/ConfirmationPage";

// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashPage />} />
            {/* <Route path="/join-or-register" element={<Authenticator><JoinOrRegister /></Authenticator>} /> */}
            <Route path="/join-or-register" element={<JoinOrRegister />} />
            <Route path="/join" element={<UserInfo />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/registration-confirmation" element={<ConfirmationPage/>} />
        </Routes>
        </BrowserRouter>
    )
}

// export default withAuthenticator(AppRouter);
export default AppRouter;