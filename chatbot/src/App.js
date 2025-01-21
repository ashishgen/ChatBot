import { Component } from 'react';
import React from 'react';
import './App.css';
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbotConfig";
import MessageParser from "./Component/MessageParser";
import ActionProvider from "./Component/ActionProvider";
import Chat1 from './Component/chat1';


function App() {
  return (
    <div className="App">
      <Chat1 />
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
        <config />
        <MessageParser />
        <ActionProvider />
  
    </div>
  
  );
}

export default App;
