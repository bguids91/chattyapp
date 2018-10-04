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
const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === socket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  let connectedClients = ({ type: "connectedClients", number: wss.clients.size })
  console.log(connectedClients);
  wss.broadcast(JSON.stringify(connectedClients));

  ws.on('message', function incoming(data) {
    console.log(JSON.parse(data));
    let incomingData = JSON.parse(data);
    switch (incomingData.type) {
      case "postMessage":
        incomingData = {
          type: "incomingMessage",
          id: uuidv1(),
          username: incomingData.username,
          content: incomingData.content
        }
        break;
      case "postNotification":
        incomingData = {
          type: "incomingNotification",
          content: incomingData.content
        }
        break;
      }
      wss.broadcast(JSON.stringify(incomingData))
  });

  ws.on('close', () => {
    console.log('Client disconnected')
    let disconnectedClients = ({type: "disconnectedClients", number: wss.clients.size })
    console.log(disconnectedClients);
    wss.broadcast(JSON.stringify(disconnectedClients));
  });
});


      // wss.clients.forEach(function each(client) {
      //   if (client.readyState === socket.OPEN) {
      //     client.send(JSON.stringify(newUser));
      //   }
      // })
