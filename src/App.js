import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn+Register/SignIn";
import SignUp from "./Components/SignIn+Register/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import HomePage from "./Components/home-page/home-page";

function App() {
  // const user = null;
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Router>
        {/* {!user ? ( */}
          <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route exact path="/login"> <SignIn /></Route>
            <Route exact path="/signUp"><SignUp /></Route>
          </Switch>
        {/* ) : ( */}
          <Switch>
            <Route exact path="/browse">
              <HomePage />
            </Route>
          </Switch>
        {/* )} */}
      </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
