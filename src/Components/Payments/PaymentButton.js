import React from "react";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useCookies } from 'react-cookie';

const PaymentButton = ({ userCredentials }) => {
  const { logIn, signUp } = useUserAuth();
  const [cookie, setCookie] = useCookies(['cookie-name']);

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  const getData = (data) => {
    return fetch(`http://localhost:5000/api/payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const makePayment = () => {
    getData({ amount: userCredentials.type === 'premium' ? 499 : 199, email: userCredentials.email }).then((response) => {
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information)
    });
  };

  const registerUser = async (email, password, subscriptionType) => {

    await signUp(email, password);
    logIn(email, password);
    setCookie('loggedUser', email);
    setCookie(email, subscriptionType);
  }

  return <button onClick={
    () => {
      makePayment();
      registerUser(userCredentials['email'], userCredentials['password'], userCredentials['subscriptionType']);
    }
  } className="step-btn step-btn-plan-select"> Pay Now</button>;
};

export default PaymentButton;
