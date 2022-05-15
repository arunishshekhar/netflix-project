import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="loginPage_bg">
        <img className="logo" src="/Images/logo.svg" alt="logo" />
        <button className="login-sigin-btn">Sign In</button>
      </div>
      <div className="login-Img-Bg">
        <div className="main-content-centre">

          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <form>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="form-input-submit">
              <ul className="input-field-err">
                <li>
                  <div className="input-column">
                  <label htmlFor="input-email" >Email address</label>
                  <input type="email" id="input-email" value=''/>
                  </div>
                </li>
                <li>{}</li>
              </ul>
              <button className="submit-email-btn">{`Get Started >`}</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
