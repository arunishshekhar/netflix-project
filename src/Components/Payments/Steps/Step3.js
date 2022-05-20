import React from "react";
import './Step3.css'
function Step3({nextStep}) {
  return (
    <div className="step1">
      <div className="bg-checkmark">
      </div>
      <p className="step-track">STEP 2 OF 3</p>
      <h2 className="step-title">Choose your plan.</h2>
      <p className="step-desc">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="checkmark-group--icon"
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
          No commitments, cancel anytime.
        </span>
      </p>
      <p className="step-desc">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="checkmark-group--icon"
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
          Everything on Netflix for one low price.
        </span>
      </p>
      <p className="step-desc">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="checkmark-group--icon"
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
          No ads and no extra fees. Ever.
        </span>
      </p>
      <button className="step-btn" onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step3;
