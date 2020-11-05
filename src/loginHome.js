import React from 'react';
import LoginG from './google_login';
import {LoginFB} from './login/facebook_login';

const LoginHome = () =>{

    return(
        <div className="flex-box">
           <h2 className="login-title">Login to your Account</h2> 
           <LoginG />
           <LoginFB />
           <button className="btn btn-linkedIn"> continue with LinkedIn </button>
        </div>
    );
}

export {LoginHome};