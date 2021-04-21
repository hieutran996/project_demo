import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import ReactRouter from './router/ReactRouter'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <ReactRouter />
      </Switch>
    </Router>
  );
}

export default App;
