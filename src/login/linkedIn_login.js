import React, { useState, Component } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';


const LoginLI = () =>{

    const [state, code] = useState();

    const handleSuccess = () =>{
        console.log("Successfully Loged IN ");

    }

    const handleFailure = () =>{
        console.log("Login Failed");
    }

    return (
        <div>
        <LinkedIn
        clientId="81lx5we2omq9xh"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/linkedin"
        renderElement={({ onClick, disabled }) => (
          <button className="btn btn-linkedIn" onClick={onClick} disabled={disabled}>Login with LinkedIn</button>
        )}
      />
      </div>
    );
}

export {LoginLI};

