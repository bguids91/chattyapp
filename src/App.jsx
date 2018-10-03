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
        currentUser: { name: "Bob" },
        messages: [],
      }
    };
    this.addNewChat = this.addNewChat.bind(this);
  }

  addNewChat(chat) {
    const newChats = { username: this.state.data.currentUser.name, content: chat };
    this.exampleSocket.send(JSON.stringify(newChats));
  }

  componentWillMount() {
    console.log("componentDidMount <App />");
    this.exampleSocket.onopen = function (event) {
      console.log("Connection made to server");
    };
    this.exampleSocket.onmessage = (event) => {
      console.log("yes sir we gots a message!", JSON.parse(event.data));
      let newData = JSON.parse(event.data);
      console.log("how about some new data", newData);
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
      <ChatBar currentUser={this.state.data.currentUser.name} addNewChat={this.addNewChat} />
    </div>
    )
  }
}

export default App;
