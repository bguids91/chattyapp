import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.content === "/hungry") {
    return (<div className="message">
      <span className="message-username">{this.props.username}</span>
      <span className="message-content"><img src="https://media3.giphy.com/media/3BaaBb6y8J9Fm/giphy.gif?cid=3640f6095bb923036c3365736fc380bb" /></span>
    </div>)
    } else {
      return (<div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>
      </div>)
    }
  }
}
export default Message;