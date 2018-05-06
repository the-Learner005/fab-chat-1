const http = require('http');
const express = require('express');
const path = require('path');
const socketIO= require('socket.io');

var app = express();
var server = http.createServer(app);
var io= socketIO(server);
var publicPath = path.join(__dirname , '../public');
var PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection',function (socket) {
    console.log("User Connected");
    //____________________//
    socket.on('disconnect',function(){
        console.log("User Disconnected");
    });
    // socket.emit('newEmail',{
    //     from:'Ayesha',
    //     to:'Asma',
    //     createdAt: new Date().toString()
    //
    // });
    socket.emit('newMessage',{
        From: 'Asma',
        time: new Date().toString()
    });
    socket.on('createMessage',function(){
        console.log("New Message is sent after creating");
    });
});

server.listen(PORT,function(){
    console.log("Server is ready on port " +  PORT);
});