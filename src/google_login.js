import React from 'react';
import {GoogleLogin} from 'react-google-login';


const LoginG = () =>{
    const clientId = "682685397242-sajgu06dml71ckcvin5r68rsi72ahoip.apps.googleusercontent.com";

    const responseSuccess = (response) =>{
        alert('Success!! ');
        console.log(response);
    }

    const responseFailure = (response) =>{
        alert ("Unable to Login !!");
        console.log(response);
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