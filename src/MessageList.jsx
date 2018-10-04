import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const messages = this.props.messages.map(mes => (
      <Message key={mes.id} username={mes.username} content={mes.content} />
    ));
    const notification = this.props.notification
    return (
      <main className="messages">
        <div className="message system">
          {notification}
        </div>
        {messages}
      </main>)
  }
}

export default MessageList