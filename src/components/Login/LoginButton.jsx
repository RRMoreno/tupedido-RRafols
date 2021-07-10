import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import './LoginButton.scss'


export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    function dologin() {
        console.log('click');
        loginWithRedirect().then(value => {
            console.log(value);
        })
    }

    return <button className="login-button" onClick={dologin} color="primary">
        Login
    </button>
}