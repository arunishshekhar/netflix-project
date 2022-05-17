import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/home-page/home-page";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Components/SignIn+Register/SignIn";
import SignUp from "./Components/SignIn+Register/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";


function App() {
  const [cookies, removeCookie] = useCookies(['cookie-name']);
  const user = cookies['loggedUser'];
  console.log(user);
  // removeCookie('loggedUser');
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {
                ((user == 'undefined' ))
                  ?
                  <LandingPage />
                  :
                  <HomePage />
              }
            </Route>
            <Route exact path="/login"> <SignIn /></Route>
            <Route exact path="/signUp"><SignUp /></Route>
            <Route exact path="/browse">
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </Route>
          </Switch>
        </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
