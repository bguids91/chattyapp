import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<footer className="chatbar">
      <form>
        <input className="chatbar-username" type="text" defaultValue={this.props.currentUser} />
        <input className="chatbar-message" type="text" placeholder="Type a message and hit ENTER" />
      </form>
    </footer>)
  }
}
export default ChatBar;