import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
      <Auth0Provider
          domain="rrafolsmoreno.eu.auth0.com"
          clientId="h32seM8H2bT3HBkuHYtvJMJWe7nmPXcd"
          redirectUri={window.location.origin}
      >
          <App />
      </Auth0Provider>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
