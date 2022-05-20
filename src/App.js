import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/home-page/home-page";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Components/SignIn+Register/SignIn";
import SignUp from "./Components/SignIn+Register/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import IndivisualDetail from "./Components/indivsual-detail/indivisual-detail";

import AdminController from "./Components/admin-controller/admin-controller";
import Payments from "./Components/Payments/Payments";


function App() {
  const [cookie, setCookie] = useCookies(['cookie-name']);
  console.log(cookie);

  return (
    <div className="App">
      <UserAuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {
                (!cookie['loggedUser'] || cookie['loggedUser'] == 'undefined')
                  ?
                  <LandingPage />
                  :
                  <Redirect to='/browse' />
              }
            </Route>
            <Route exact path="/login"> <SignIn /></Route>
            <Route exact path="/signUp">
              {/* <SignUp /> */}
              <Payments/>
              </Route>
            <Route exact path="/admin"><AdminController/></Route>
            <Route exact path="/browse">
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </Route>
            <Route exact path="/browse/:id/:isMovie">
              <ProtectedRoute>
                <IndivisualDetail />
              </ProtectedRoute>
            </Route>
            <Route exact path="/browse/:cat">
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
