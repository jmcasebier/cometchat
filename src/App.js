import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { CometChat } from '@cometchat-pro/chat';
import { APP_ID } from './config.js';
import Chatbox from "./components/Chatbox";
import ChatHome from "./components/Dashboard";
import Login from "./components/Login";
import CreateChannel from "./components/CreateChannel"

export default class App extends Component {
  constructor(props) {
    super(props);
    
    CometChat.init(APP_ID).then(
      hasInitialized => {
        console.log("Initialization completed successfully:", hasInitialized);
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chatbox} />
            <Route path="/dashboard" component={ChatHome} />
            <Route path="/creategroup" component={CreateChannel} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
