Chatty App
=====================

A real-time chat web application that is primarily a client-side SPA (single-page app) built with ReactJS. 
Contains a chat log displaying messages and notifications as well as an input field to change your name and an input field to send a message. The client-side app communicates with a server via WebSockets for multi-user real-time updates.
No persistent database is involved; the focus is on the client-side experience.

### Screenshots

!["Screenshot of Chatty App"](https://github.com/bguids91/chattyapp/blob/master/docs/Screen%20Shot%202018-10-06%20at%2014.14.33.png?raw=true)

### Dependencies

**Client Side** 

- babel-core
- babel-loader
-babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom
- boostrap

**Server Side**

- express
- ws
- uuid

