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
      <iframe src="https://giphy.com/embed/gUNA7QH4AeLde" width="150" height="150" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/happy-video-games-gUNA7QH4AeLde"></a></p>
      <h6 id="connected-users"> Connected users: {connected} </h6>
    </div>)
  }
}
export default NavBar;

