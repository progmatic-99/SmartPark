import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase'

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: "smart-park-290414.firebaseapp.com",
//   databaseURL: "https://smart-park-290414.firebaseio.com",
//   projectId: "smart-park-290414",
//   storageBucket: "smart-park-290414.appspot.com",
//   messagingSenderId: "213018512596",
//   appId: "1:213018512596:web:a6e672484d39eabd4c7f41",
//   measurementId: "G-GMS9Y3X8NR"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
