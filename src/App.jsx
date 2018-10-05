import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import { StringDecoder } from 'string_decoder';

class App extends Component {
  constructor(props) {
    super(props);
    this.exampleSocket = new WebSocket("ws://0.0.0.0:3001/");
    this.state = {
      loading: true,
      data: {
        currentUser: { name: 'Anonymous' },
        messages: [],
        notification: { content: '' },
        connectedClients: { number: 0 }
      }
    };
    this.addNewChat = this.addNewChat.bind(this);
    this.addNewUsername = this.addNewUsername.bind(this);
  }

  addNewChat(chat) {
    const newChats = { type: "postMessage", username: this.state.data.currentUser.name, content: chat };
    this.exampleSocket.send(JSON.stringify(newChats));
  }

  addNewUsername(username) {
    const newUser = { type: "postNotification", content: `${this.state.data.currentUser.name} has changed their name to ${username}` }
    this.exampleSocket.send(JSON.stringify(newUser))
    let data = { ...this.state.data };
    data.currentUser.name = username;
    this.setState({ data });
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.exampleSocket.onopen = function (event) {
      console.log("Connection made to server");
    };
    this.exampleSocket.onmessage = (event) => {
      let newData = JSON.parse(event.data);
      console.log(newData);
      switch (newData.type) {
        case "incomingMessage":
          console.log("Client side, we are in post")
          const messages = this.state.data.messages.concat(newData)
          let data = { ...this.state.data };
          data.messages = messages;
          this.setState({ data })
          break;
        case "incomingNotification":
          const notification = newData.content
          let object = { ...this.state.data };
          object.notification.content = notification;
          this.setState({ object })
          break;
        case "connectedClients":
          const connected = newData.number;
          console.log(connected);
          let connect = { ...this.state.data };
          connect.connectedClients.number = connected;
          console.log(connect)
          this.setState({ connect })
          break;
        case "disconnectedClients":
          const disconnected = newData.number;
          let disconnect = { ...this.state.data };
          disconnect.connectedClients.number = disconnected;
          console.log(disconnect)
          this.setState({ disconnect })
          break;
        // default:
        //   throw new Error("Unknown event type " + data.type);
      }
    }
  }


  render() {
    return (
      <div className="row">
        <div className="col" id="sidebar">
          <NavBar connectedUsers={this.state.data.connectedClients.number} />
        </div>
        <div className="col" id="main-content">
          <MessageList messages={this.state.data.messages} notification={this.state.data.notification.content} />
          <footer className="chatbar">
            <ChatBar currentUser={this.state.data.currentUser.name} addNewChat={this.addNewChat} addNewUsername={this.addNewUsername} />
          </footer>
        </div>
      </div>
    )
  }
}

export default App;
