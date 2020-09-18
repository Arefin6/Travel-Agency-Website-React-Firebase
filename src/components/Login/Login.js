import React from 'react';
import Header from '../Header/Header';
import './Login.css';
import fbLogo from "../../Icon/fb.png";
import googleLogo from "../../Icon/google.png";

const Login = () => {
    const handleGoogleSignIn = () =>{
          console.log("Googlr mama");
    }
    return (
        <div>
           <Header></Header>
            <form>
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
                 <button className="btn btn-warning log-btn mt-4 mb-3">Login</button>
                  <p className="ml-3">Don't Have an Account? <a href="#" className="log-ancor">Create an Account</a></p>
                 </div>
                
                </div>
            </form>
              <p className="or">or</p>
              <button className="logo-btn btn" >
                  <img src={fbLogo} alt=""/> Continue With Facebook</button>
              <button className="logo-btn btn" onClick={handleGoogleSignIn}>
                  <img src={googleLogo} alt="" />
                  Continue with Google</button>
        </div>

    );
};

export default Login;