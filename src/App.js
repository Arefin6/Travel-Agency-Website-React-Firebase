import React, { createContext, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="*">
             <h1 style={{color:"red"}}>Sorry NotFound 404!</h1>
          </Route>
        </Switch>
        
        </Router>   
    </userContext.Provider>     
  );
}

export default App;
