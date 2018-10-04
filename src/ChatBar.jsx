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

    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <form onSubmit={onSubmitUser} className="form-inline">
              <input className="chatbar-username form-control" name="userInput" type="text" placeholder="Your Name(Optional)" />
              <input type="submit" id="hidden-button" />
            </form>
          </div>
          <div className="col-7">
            <form onSubmit={onSubmitChat} className="form-inline">
              <input className="chatbar-message form-control" name="contentInput" type="text" placeholder="Type a message and hit ENTER" />
              <input type="submit" id="hidden-button" />
            </form>
          </div>
        </div>
      </div>)
  }
}

export default ChatBar;