import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    const messages = this.props.messages.map(mes => (
      <Message key={mes.id} username={mes.username} content={mes.content} />
    ));
    return(
    <main className="messages">
      {messages}
      <div className="message system">
      </div>
    </main>)
  }
}

export default MessageList