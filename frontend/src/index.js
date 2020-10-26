import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { GoogleLogin } from 'react-google-login';

// const respGoogle = resp => {
//     console.log(resp);
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <GoogleLogin
      clientId=""
      buttonText="Login"
      onSuccess={respGoogle}
      onFailure={respGoogle}
      cookiePolicy={'single_host_origin'}
    /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);