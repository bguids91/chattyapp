import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const onSubmit = e => {
        e.preventDefault();
        const chatContentInput = e.target.elements.contentInput;
        this.props.addNewChat(chatContentInput.value);
        chatContentInput.value = '';
    }
    return (<footer className="chatbar">
      <form onSubmit={onSubmit}>
        <input className="chatbar-username" type="text" defaultValue={this.props.currentUser} />
        <input className="chatbar-message" name="contentInput" type="text" placeholder="Type a message and hit ENTER" />
        <input type="submit" id="hidden-button" />
      </form>
    </footer>)
  }
}

export default ChatBar;