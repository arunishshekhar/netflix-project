import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/home-page/home-page";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute";

import SignIn from "./Components/SignIn+Register/SignIn";
import SignUp from "./Components/SignIn+Register/SignUp";
import { UserAuthContextProvider, useUserAuth } from "./Context/UserAuthContext";
import { getAuth } from "firebase/auth";;

function App() {
  const user = null;
  // const { checkLogged } = useUserAuth();
  console.log(getAuth());
  return (
    <div className="App">
      <UserAuthContextProvider>

        <Router>
          <Switch>
            <Route exact path="/"><LandingPage /></Route>
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
