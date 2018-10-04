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

    return (<footer className="chatbar">
      <form onSubmit={onSubmitUser}>
        <input className="chatbar-username" name="userInput" type="text" defaultValue={this.props.currentUser} />
        <input type="submit" id="hidden-button" />
      </form>
      <form onSubmit={onSubmitChat}>
        <input className="chatbar-message" name="contentInput" type="text" placeholder="Type a message and hit ENTER" />
        <input type="submit" id="hidden-button" />
      </form>
    </footer>)
  }
}

export default ChatBar;