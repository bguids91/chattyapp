import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const onSubmitChat = e => {
        e.preventDefault();
        const chatContentInput = e.target.elements.contentInput;
        this.props.addNewChat(chatContentInput.value);
        chatContentInput.value = '';
      }
      const onSubmitUser = e => {
        e.preventDefault();
        const chatUserInput = e.target.elements.userInput;
        this.props.addNewUsername(chatUserInput.value);
      }

    return (<footer className="chatbar" >
    <div className="container">
        <div className="row">
    <div className="col-4">
      <form onSubmit={onSubmitUser} className="form-inline">
        <input className="chatbar-username form-control" name="userInput" type="text" placeholder="Your Name(Optional)" />
        <input type="submit" id="hidden-button" />
      </form>
    </div>
    <div className="col-8">
      <form onSubmit={onSubmitChat} className="form-inline">
        <input className="chatbar-message form-control" name="contentInput" type="text" placeholder="Type a message and hit ENTER" />
        <input type="submit" id="hidden-button" />
      </form>
      </div>
      </div>
      </div>
    </footer>)
  }
}

export default ChatBar;