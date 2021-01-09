import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { Main } from "../Main/Main";
import { SavedNewsPage } from "../../pages/SavedNewsPage";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route path={'/saved-news'} component={SavedNewsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
