import React from "react";
import "./HeaderPage.css";

function HeaderPage() {
  return (
    <div className="loginPage">
      <div className="loginPage_bg">
        <img className="logo" src="/Images/logo.svg" alt="logo" />
        <button className="login-sigin-btn">Sign In</button>
      </div>
      <div className="login-Img-Bg">
        <div className="main-content-centre">
          <h1 className="main-body-title">
            Unlimited movies, TV shows and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <form className="signup-form">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="form-input-submit">
              <div className="input-field-err">
                <ul className="input-column">
                  <li>
                    {" "}
                    <label htmlFor="input-email">Email address</label>
                  </li>
                  <li>
                    <input
                      type="email"
                      id="input-email"
                      value=""
                      placeholder="Email address "
                    />
                  </li>
                </ul>
              </div>
              <button className="submit-email-btn">{`Get Started  >`}</button>
            </div>
            <h5 className="input-err">{"Email is required"}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
