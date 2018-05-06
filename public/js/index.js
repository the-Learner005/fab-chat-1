
//Client side email
var socket = io();
socket.on('connect',function(){
    console.log("Connected to Server");

});
socket.on('newMessage',function(data){
    console.log('Hey I have recieved new Message !!! ' ,data);
});
socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

// socket.on('newEmail',function(email){
//     console.log('New Email Arrived',  email);
// });
//From CLient to server
socket.emit('createMessage',{
    from:'Ayesha',
    text: 'Hello I am ayesha ! Whats going on ?'
});