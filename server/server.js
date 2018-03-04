const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const path = require('path')
const port = process.env.port || 8080;
var publicPath = path.join(__dirname,'../public')

var app = express();

app.use(express.static(publicPath));

// app.listen(port, () =>{
//     console.log(`Server is running on ${port}`)
// });

var server = http.createServer(app);

var io = socketIO(server)

server.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})

io.on('connection',(socket) =>{
    console.log("New Socket Connection - New user created");

    socket.on('disconnect',()=>{
        console.log("Connection terminated");
    });
});