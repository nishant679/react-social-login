import React from 'react';

const LoginHome = () =>{

    return(
        <div className="flex-box">
           <h2 className="login-title">Login to your Account</h2>
           <button className="btn btn-google">
           <i class="fa fa-google"></i>
           continue with google </button>
           <button className="btn btn-fb"> continue with facebook  </button>
           <button className="btn btn-linkedIn"> continue with LinkedIn </button>
        </div>
    );
}

export {LoginHome};