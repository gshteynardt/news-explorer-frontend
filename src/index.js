import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from "react-router-dom";
import {UserProvider} from "./hooks/useUser";
import {ArticlesProvider} from "./hooks/useArticles";

const app = (
  <Router>
    <UserProvider>
      <ArticlesProvider>
        <App/>
      </ArticlesProvider>
    </UserProvider>
  </Router>
    );

ReactDOM.render(
  <React.StrictMode>
      { app }
  </React.StrictMode>,
  document.getElementById('root')
);

