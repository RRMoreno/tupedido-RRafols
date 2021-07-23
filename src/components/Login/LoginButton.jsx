import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import './LoginButton.scss'


export const LoginButton = () => {
    const {loginWithPopup} = useAuth0();

    return <button className="login-button" onClick={loginWithPopup} color="primary">
        Login
    </button>
}