import React from "react";
import './Steps.css'
function Step1({nextStep}) {
  return (
    <div className="step1">
      <div className="bg-container">
          <span className="bg-devices"></span>
      </div>
      <p className="step-track">STEP 0 OF 3</p>
      <h2 className="step-title">Finish setting up your account</h2>
      <p className="step-desc">
        Netflix is personalised for you. Create a password to watch on any
        device at any time.
      </p>
      <button className="step-btn" onClick={()=>nextStep(1)}>Next</button>
    </div>
  );
}

export default Step1;
