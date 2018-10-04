import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.exampleSocket = new WebSocket("ws://0.0.0.0:3001/");
    this.state = {
      loading: true,
      data: {
        currentUser: { name: 'Anonymous' },
        messages: [],
      }
    };
    this.addNewChat = this.addNewChat.bind(this);
    this.addNewUsername = this.addNewUsername.bind(this);
  }

  addNewChat(chat) {
    const newChats = { username: this.state.data.currentUser.name, content: chat };
    this.exampleSocket.send(JSON.stringify(newChats));
  }

  addNewUsername(username) {
    let data = { ...this.state.data };
    data.currentUser.name = username;
    console.log(data);
    this.setState({ data });
  }

  componentWillMount() {
    console.log("componentDidMount <App />");
    this.exampleSocket.onopen = function (event) {
      console.log("Connection made to server");
    };
    this.exampleSocket.onmessage = (event) => {
      let newData = JSON.parse(event.data);
      const messages = this.state.data.messages.concat(newData)
      let data = { ...this.state.data };
      data.messages = messages;
      this.setState({ data });
    }
  }


  render() {
    return (<div>
      <NavBar />,
      <MessageList messages={this.state.data.messages} />,
      <ChatBar currentUser={this.state.data.currentUser.name} addNewChat={this.addNewChat} addNewUsername={this.addNewUsername}/>
    </div>
    )
  }
}

export default App;
