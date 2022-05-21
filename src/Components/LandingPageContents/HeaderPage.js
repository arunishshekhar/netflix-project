import React from "react";
import "./HeaderPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../Context/UserAuthContext";

function HeaderPage() {
  const [mailInput, setEmail] = useState("");
  const { signUpEmail, setSignUpEmail } = useUserAuth();

  // const [isMailValid, setValid] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setSignUpEmail(mailInput);
    // validateEmail(e.target.value);
  };

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     )
  //     ? setValid(false)
  //     : setValid(true);
  // };

  return (
    <div className="loginPage">
      <div className="loginPage_bg">
        <img className="logo" src="/Images/logo.svg" alt="logo" />
        <Link to="/login">
          <button className="login-sigin-btn">Sign In</button>
        </Link>
      </div>
      <div className="login-Img-Bg">
        <div className="main-content-centre">
          <h1 className="main-body-title">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="main-subtitle">Watch anywhere. Cancel anytime.</p>
          <form className="signup-form">
            <p style={{ 'font-size': '1.3rem' }}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="form-input-submit">
              {/* <div className="input-field-err">
                <ul className="input-column">
                  <li>
                    {" "}
                    <label htmlFor="input-email">Email address</label>
                  </li>
                  <li className="email-box">
                    <input
                      type="email"
                      id="input-email"
                      value={mailInput}
                      placeholder="Email address "
                      onChange={handleInputChange}
                    />
                  </li>
                </ul>
              </div> */}
              <Link to="/signup">
                {" "}
                <button
                  className="submit-email-btn"
                // onClick={validateEmail}
                >{`Get Started `}</button>
              </Link>
            </div>
            {/* {(isMailValid)&&<h5 className="input-err">{"Email is invalid"}</h5>} */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
