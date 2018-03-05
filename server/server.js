const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const fs = require('fs')

const path = require('path')
const port = process.env.port || 8080;
var publicPath = path.join(__dirname,'../public')

var app = express();

app.use(express.static(publicPath));

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});

// Implementation of sockets:
var server = http.createServer(app);

var io = socketIO(server)

// Working code:
// server.listen(port, ()=> {
//     console.log(`Server is running on ${port}`)
// })

server.listen(65080, ()=> {
    console.log('Server is running on Port 65080');
    fs.writeFile("/tmp/test", "Server is running on Port 65080", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
});

io.on('connection',(socket) =>{
    console.log("New Socket Connection - New user created");

    socket.on('disconnect',()=>{
        console.log("Connection terminated");
    });
});