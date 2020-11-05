import React from 'react';
import {GoogleLogin} from 'react-google-login';


const LoginG = () =>{
    const clientId = "682685397242-sajgu06dml71ckcvin5r68rsi72ahoip.apps.googleusercontent.com";

    const responseSuccess = () =>{
        alert('Success!! ');
        console.log("Login successful ");
    }

    const responseFailure = () =>{
        alert ("Unable to Login !!");
        console.log("Login failure !");
    }

    return (
        <GoogleLogin
           clientId = {clientId}
           onSuccess = {responseSuccess}
           onFailure = {responseFailure}
           buttonText = "Login"
           cookiePolicy = {'single_host_origin'}
        />
    );

}

export default LoginG;