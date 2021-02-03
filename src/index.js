import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from "react-router-dom";
import {UserProvider} from "./hooks/useUser";

const app = (<UserProvider>
  <App/>
</UserProvider>);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      { app }
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

