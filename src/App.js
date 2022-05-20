import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/home-page/home-page";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Components/SignIn+Register/SignIn";
import SignUp from "./Components/SignIn+Register/SignUp";
import { UserAuthContextProvider, useUserAuth } from "./Context/UserAuthContext";
import VideoPlayer from "./Components/video-player/video-player";
import IndivisualDetail from "./Components/indivsual-detail/indivisual-detail";
// import Firebase from './firebase';

function App() {
  const [cookies, removeCookie] = useCookies(['cookie-name']);
    // let { user } = useUserAuth();
  // Firebase.database().ref('/').set('hello');

  return (
    <div className="App">

      {/* {console.log(user)} */}
      <UserAuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {
                (cookies['loggedUser'] && cookies['loggedUser'] != 'undefined')
                  ?
                  <LandingPage />
                  :
                  <Redirect to='/browse' />
              }
            </Route>
            <Route exact path="/login"> <SignIn /></Route>
            <Route exact path="/signUp"><SignUp /></Route>
            <Route exact path="/browse">
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </Route>
            <Route exact path="/browse/:id/:isMovie">
              <ProtectedRoute>
                <IndivisualDetail />
                {/* <VideoPlayer /> */}
              </ProtectedRoute>
            </Route>
            <Route exact path="/browse/:cat">
              <ProtectedRoute>
                <HomePage />
                {/* <IndivisualDetail /> */}
                {/* <VideoPlayer /> */}
              </ProtectedRoute>
            </Route>
          </Switch>
        </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
