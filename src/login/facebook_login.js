import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
  }
   

const LoginFB = () =>{
      const appId  = "1100255976982023";

      const componentClicked = () =>{
          console.log("facebook login btn clicked");
      }

      return (
          <FacebookLogin 
             appId = {appId}
             autoLoad = {true}
             fields = "name, email, picture"
             onClick = {componentClicked}
             callback = {responseFacebook}
             cssClass = "btn btn-fb"
          />
      );
}

export {LoginFB};