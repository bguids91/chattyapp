import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.content === "/hungry") {
    return (<div className="message">
      <span className="message-username">{this.props.username}</span>
      <span className="message-content"><img src="https://media0.giphy.com/media/78BrUoRs5II2A/giphy.gif?cid=3640f6095bb924be653839576b0346a2" /></span>
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