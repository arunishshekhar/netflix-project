import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn+Register/SignIn";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LandingPage />
        ) : (
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
