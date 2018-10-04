import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const connected = this.props.connectedUsers;
    console.log(connected);
    return (<nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h4>Connected users: {connected} </h4>
    </nav>)
  }
}
export default NavBar;