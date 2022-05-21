import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import HomePage from './Components/home-page/home-page';
import Fallback from './Components/FallbackPage/Fallback';
import Payments from './Components/Payments/Payments';
import { CookiesProvider } from 'react-cookie';
import PaymentStatus from './Components/Payments/PaymentStatus';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
      <CookiesProvider>
            <App />
      </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
