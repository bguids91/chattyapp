import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, data: {
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
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000);
  }

  render() {
    if (this.state.loading) {
      return (<h1> Please wait while Chatty App is loading...</h1>)
    } else {
      return (<div>
        <NavBar />,
      <MessageList messages={this.state.data.messages} />,
      <ChatBar currentUser={this.state.data.currentUser.name} />
      </div>
      )
    }
  }
}

export default App;
