import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function greeting(name) {
//   const date = new Date()
//   const hours = date.getHours()
//   console.log(hours)
    
//   let timeOfDay;
//   if (hours >= 4 && hours<12) {
//     timeOfDay = "morning"
//   } else if(hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//   } else if(hours >= 17 && hours < 20) {
//     timeOfDay = "evening"
//   } else {
//     timeOfDay = "night"
//   }
//   return `Good ${timeOfDay}, ${name}!`
// }

// greeting("Bob")