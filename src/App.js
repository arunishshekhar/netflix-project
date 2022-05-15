import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LoginPage/LandingPage";
import Home from "./Components/Home/Home";
import LoginPage from "./Components/LoginPage/LoginPage";
function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
