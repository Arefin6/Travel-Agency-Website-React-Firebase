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

    const [user,setUser] = useState({
      name:'',
      email:'',
      password:'', 
      confirmPassword:'',
      error:''  
        
    });

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
    setNewUser(!newUser);
   }
//    var passwordValue;
//    var conPasswordValue;
//    const handleBlurPassword = (e) =>{
//         passwordValue=e.target.value;
//         return passwordValue;
//    } 
//    const handleBlurConfirm = (e) =>{
//     conPasswordValue=e.target.value;  
// } 
//  console.log(passwordValue,conPasswordValue);  

const handleBlur = (e)=>{
    
  const newUserInfo = {...user};
   newUserInfo[e.target.name] = e.target.value;
   setUser(newUserInfo);  
  
  }   
  const handleSubmit = (e) =>{
     
      const {password,confirmPassword,email} = user;

     if(password !== confirmPassword){
      alert("Password did not match");
     }
     else{
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfos = {...user};
        setUser(newUserInfos);
         setLoggedInUser(newUserInfos);
          history.replace(from);

      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        const newUserInfo ={...user};
        newUserInfo.error =errorMessage;
        setUser(newUserInfo);
        // console.log(errorMessage);
        // ...
      })
     }
     
     
     
    e.preventDefault();
}
 const handleLogin = (e) =>{
  
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res =>{
      const newUserInfos ={...user};
      setUser(newUserInfos);

      setLoggedInUser(newUserInfos);

      history.replace(from);
      
      console.log("success");
  })
  .catch(function(error) {
    // Handle Errors here.
        var errorMessage = error.message;
        const newUserInfo ={...user};
        newUserInfo.error =errorMessage;
        setUser(newUserInfo);
        console.log(errorMessage);
    // ...
  });

  e.preventDefault();
 }
    return (
        <div>
           <Header></Header>
           {!newUser && 
           <form onSubmit={handleLogin}>
                <div className="row container p-5 ">
                 <div className="offset-md-4 col-md-5 offset-md-3 login-form">
                 { user.error &&
                  <p className="alert alert-danger" role="alert">{user.error}</p>
                }
                  <h4 className="mb-4 mt-3">Login</h4>

                 <input type="text" className="form-control mb-4" style={{color:"#070606",
                    backgroundColor:"#eee6e6",fontWeight:"bold"}} placeholder="Username or Email" name="email" required 
                    onBlur={handleBlur}/>
                 <input type="password" className="form-control" placeholder="Password" name="password" required
                  onBlur={handleBlur}/>
                   <div className="mt-4">
                   <input type="checkbox" className="mr-2" name="RemmberMe"/>
                   <label htmlFor="RememberMe">Remember Me</label>
                   <a href="#" className="forgetPas log-ancor">Forget Password</a>
                   </div>
                 <input type="submit" value="Login" className="btn btn-warning log-btn mt-4 mb-3" style={{width:"100%"}} />
                  <p className="ml-3">Don't Have an Account? <a className="log-ancor" onClick={() => handleNewUser()}>Create an Account</a></p>
                 </div>
                
                </div>
            </form>
            }
            {
              newUser && 
            <form onSubmit={handleSubmit}>
              <div className="row container p-5" >
               <div className="offset-md-4 col-md-5 offset-md-3 login-form">
                { user.error &&
                  <p className="alert alert-danger" role="alert">{user.error}</p>
                }
                <h4 className="mb-4 mt-3">Create Account</h4>
                
                <input type="text" className="form-control mb-4" style={{color:"#070606",
                  backgroundColor:"#eee6e6",fontWeight:"bold"}} placeholder="Name" name="name" onBlur={handleBlur} required />

               <input type="text" className="form-control mb-4" style={{color:"#070606",
                  backgroundColor:"#eee6e6",fontWeight:"bold"}} placeholder="Username or Email" name="email" onBlur={handleBlur} required />

               <input type="password" className="form-control" placeholder="Password" name="password" onBlur={handleBlur} required/>

               <input type="password" className="form-control mt-4" placeholder="Confirm Password" name="confirmPassword" onBlur={handleBlur} required />
                
               <input type="submit" value="Create an account" className="btn btn-warning log-btn mt-4 mb-3 form-control"style={{width:"100%"}} />
                <p className="ml-3">Already Have an Account? <a className=" log-ancor" onClick={ () =>handleNewUser()}>Login</a></p>
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