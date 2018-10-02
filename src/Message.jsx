import React, { Component } from 'react';

class Messages extends Component {
  render () {
    return (<div className="message">
  <span className="message-username">{this.props.username}Puff Daddy</span>
  <span className="message-content">{this.props.content}Hello, my name is Puff</span>
</div>)
  }
}
export default Messages;