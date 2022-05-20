import React, { useEffect, useState } from "react";
import PaymentButton from "../PaymentButton";
import "./Step31.css";

function Step31({getUserData,userCredentials }) {

  const handleSelect=(e)=>{
    getUserData({subscriptionType:e.target.value})

  }
  
  
  return (
    <div className="step-3">
      <div className="step31">
        <p className="step-track">STEP 2 OF 3</p>
        <h2 className="step-title">Choose the plan that’s right for you </h2>
        <p className="step-desc">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark-group--icon"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="checkmark-group-text">
            {" "}
            Watch all you want. Ad-free.
          </span>
        </p>
        <p className="step-desc">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark-group--icon"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="checkmark-group-text">
            {" "}
            Recommendations just for you.{" "}
          </span>
        </p>
        <p className="step-desc">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark-group--icon"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="checkmark-group-text">
            Change or cancel your plan anytime.{" "}
          </span>
        </p>

        <div className="plan-grid">
          <div className="plans-selector">
            <label className={(userCredentials.subscriptionType==='standard'?'selected':'')+" plans-choice"}   onClick={handleSelect}>
              <input type="radio" value="standard" name='plan'></input>
              <span className="plan-name" value="standard">Standard
              <br/>Rs.199</span>
            </label>

            <label className={(userCredentials.subscriptionType==='premium'?'selected':'')+" plans-choice"}  onClick={handleSelect}>
              <input type="radio" name='plan' value="premium"></input>
              <span className="plan-name"  >Premium<br/>Rs.499</span>
            </label>
          </div>
        </div>
        <div className='plan-btn-contain'>
        {/* <button className="step-btn step-btn-plan-select">Pay</button> */}
        <PaymentButton userCredentials={userCredentials}  />
        </div>
      </div>
    </div>
  );
}

export default Step31;
