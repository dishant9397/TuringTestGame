import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// AIzaSyCtEH8HVvABGTM3IrNpEXm5NpfVOIvkTd8
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
      </style>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
