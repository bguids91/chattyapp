import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const connected = this.props.connectedUsers;
    console.log(connected);
    return (<div className="sidebar-content text-center">
      <h2 id="logo">Welcome to <b>Chatty</b></h2>
      <br></br>
      <img src="./images/pacman (1).png" /><span>-----</span><img src="./images/pacman (2).png" />
      <h6 id="connected-users"> Connected users: {connected} </h6>
      </div>)
  }
}
export default NavBar;

