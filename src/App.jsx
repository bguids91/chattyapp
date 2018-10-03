import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const uuidv1 = require('uuid/v1');

let exampleSocket = new WebSocket("ws://0.0.0.0:3001/");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {
        currentUser: { name: "Bob" },
        messages: [
          {
            id: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      }
    };
    this.addNewChat = this.addNewChat.bind(this);
  }

  addNewChat(chat) {
    const newChats = { id: uuidv1(), username: this.state.data.currentUser.name, content: chat };
    const messages = this.state.data.messages.concat(newChats)
    let data = { ...this.state.data };
    data.messages = messages;
    exampleSocket.send(JSON.stringify(newChats));
    this.setState({ data })
  }

  componentWillMount() {
    console.log("componentDidMount <App />");
    exampleSocket.onopen = function (event) {
      console.log("Connection made to server");
    };
  }

  render() {
    return (<div>
      <NavBar />,
      <MessageList messages={this.state.data.messages} />,
      <ChatBar currentUser={this.state.data.currentUser.name} addNewChat={this.addNewChat} />
    </div>
    )
  }
}

export default App;
