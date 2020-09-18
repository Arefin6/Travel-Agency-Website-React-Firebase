import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import fbLogo from "../../Icon/fb.png";
import googleLogo from "../../Icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import  './firebaseConfig';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const [newUser,setNewUser] = useState(false);
    let { from } = location.state || { from: { pathname: "/" } };
    var gProvider = new firebase.auth.GoogleAuthProvider();
    var fProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(gProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var {displayName,email} = result.user;

            const signedInUser = {name:displayName,email};
            setLoggedInUser(signedInUser);
            
            history.replace(from);
    
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
    }
    const handleFacebookSignIn = () =>{
        firebase.auth().signInWithPopup(fProvider)
        .then(result => {
            var {displayName,email} = result.user;

            const signedInUser = {name:displayName,email};
            setLoggedInUser(signedInUser);
            
            history.replace(from);
            console.log(result.user);

        }).catch(e => console.log(e));
  }

  const handleNewUser = () =>{
    setNewUser(true);
}
  const handleLogin = () =>{
    console.log("Login mama");
}
    return (
        <div>
           <Header></Header>
           {!newUser && <form>
                <div className="row container p-5 ">
                 <div className="offset-md-4 col-md-5 offset-md-3 login-form">
                  <h4 className="mb-4 mt-3">Login</h4>

                 <input type="text" className="form-control mb-4" style={{color:"#070606",
                    backgroundColor:"#eee6e6",fontWeight:"bold"}} placeholder="Username or Email"/>
                 <input type="password" className="form-control" placeholder="Password" />
                   <div className="mt-4">
                   <input type="checkbox" className="mr-2" name="RemmberMe"/>
                   <label htmlFor="RememberMe">Remember Me</label>
                   <a href="#" className="forgetPas log-ancor">Forget Password</a>
                   </div>
                 <button className="btn btn-warning log-btn mt-4 mb-3"onClick={handleLogin}>Login</button>
                  <p className="ml-3">Don't Have an Account? <a className="log-ancor" onClick={handleNewUser}>Create an Account</a></p>
                 </div>
                
                </div>
            </form>
            }
            {
              newUser && 
              <form>
              <div className="row container p-5 ">
               <div className="offset-md-4 col-md-5 offset-md-3 login-form">
                <h4 className="mb-4 mt-3">Create Account</h4>

               <input type="text" className="form-control mb-4" style={{color:"#070606",
                  backgroundColor:"#eee6e6",fontWeight:"bold"}} placeholder="Username or Email"/>
               <input type="password" className="form-control" placeholder="Password" />
                 <div className="mt-4">
                 <input type="checkbox" className="mr-2" name="RemmberMe"/>
                 <label htmlFor="RememberMe">Remember Me</label>
                 <a href="#" className="forgetPas log-ancor">Forget Password</a>
                 </div>
               <button className="btn btn-warning log-btn mt-4 mb-3"onClick={handleLogin}>Login</button>
                <p className="ml-3">Don't Have an Account? <a className="log-ancor" onClick={handleNewUser}>Create an Account</a></p>
               </div>
              
              </div>
          </form>

            }
              <p className="or">or</p>
              <button className="logo-btn btn" onClick={handleFacebookSignIn} >
                  <img src={fbLogo} alt=""/> Continue With Facebook</button>
              <button className="logo-btn btn" onClick={handleGoogleSignIn}>
                  <img src={googleLogo} alt="" />
                  Continue with Google</button>
        </div>

    );
};

export default Login;