import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {GoogleButton}  from './login/buttonComponent';


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
           render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}> </GoogleButton>
          )}
           onSuccess = {responseSuccess}
           onFailure = {responseFailure}
           cookiePolicy = {'single_host_origin'}
        />
    );

}

export default LoginG;