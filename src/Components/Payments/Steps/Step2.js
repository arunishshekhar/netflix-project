import React, { useState,useEffect } from "react";

import "./Step2.css";
import { useUserAuth } from "../../../Context/UserAuthContext";
function Step2({nextStep,getUserData}) {
  const [mailInput, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const { signUpEmail, setSignUpEmail } = useUserAuth();
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    // setSignUpEmail(mailInput);
    // validateEmail(e.target.value);
  };

 
  

  const validateInput= ()=>{
   
    
    if (!mailInput&&!password){
     
      setError(['Mail & Password are empty'])
    }
    else if(!password){
      setError('Password is empty')
    }
    else if(!mailInput) {
      setError('Mail is empty')

    }
    else{
      
      
      setError('')
      getUserData({
        email:mailInput,
        password:password
      })
      nextStep(3)
    }

  }
  return (
    <div className="step1">
      <p className="step-track">STEP 1 OF 3</p>
      <h2 className="step-title">Create a password to start your membership</h2>
      <p className="step-desc">
        Just a few more steps and you're done! We hate paperwork, too.
      </p>
      {error.length===1?<span className="error-msg">{error[0]}</span >:error.length>1?<span className="error-msg">{error}</span>:''}

      <form className="form-input-submit form-style" 
      onSubmit={(e)=>{
        e.preventDefault()
        validateInput()}}
        >
        <div className="input-field-err">
          <ul className="input-column">
            <li>
              {" "}
              <label htmlFor="input-email">Email address</label>
            </li>
            <li className="email-box">
              <input
                type="email"
                id="input-email-signup"
                className="input-signup-details" 
                value={mailInput}
                placeholder="Email address "
                onChange={handleInputChange}
              />
            </li>
          </ul>
        </div>
        <div className="input-field-err">
          <ul className="input-column">
            <li>
              {" "}
              <label htmlFor="input-email">Password</label>
            </li>
            <li className="email-box">
              <input
                type="password"
                id="input-password-signup"
                className="input-signup-details" 
                value={password}
                placeholder="Password "
                onChange={(e)=>setPassword(e.target.value)}
              />
            </li>
          </ul>
        </div>
        <input type='submit' className="step-btn" value="Next" 
        // onClick={()=>nextStep(3)}
        />
      </form>
    </div>
  );
}

export default Step2;
