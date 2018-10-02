// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Message.jsx';
import ChatBar from './ChatBar.jsx';

ReactDOM.render(<div><Messages /><ChatBar /></div>, document.getElementById('react-root'));

