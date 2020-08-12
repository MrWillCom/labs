var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var sockets = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log(`connection: ${socket.id}`);

    sockets.push(socket.id)

    io.sockets.connected[socket.id].emit('event', `msg from server to ${socket.id}`);

    socket.on('event', (data) => {
        console.log(data);
    });

    socket.on('specificMsg', (data) => {
        io.sockets.connected[data.socketId].emit('specificMsg', data.data);
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});