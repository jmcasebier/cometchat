import React, { Component } from 'react';
import './App.css';
import { CometChat } from '@cometchat-pro/chat';
import { APP_ID } from './config.js';

class App extends Component {
  constructor(props) {
    super(props);
    
    CometChat.init(APP_ID).then(
      hasInitialized => {
        console.log("Initialization completed successfully", hasInitialized);
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    );
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
