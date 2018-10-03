// server.js

const express = require('express');
const socket = require('ws')
const SocketServer = socket.Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({
  server
});


wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(data) {
    let incomingData = JSON.parse(data);
    let newMessage = { id: uuidv1(), username: incomingData.username, content: incomingData.content }
    wss.clients.forEach(function each(client) {
      if (client.readyState === socket.OPEN) {
        client.send(JSON.stringify(newMessage));
      }
    })
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
