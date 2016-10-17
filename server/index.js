var 
    app    = require('express')(),
    server = require('http').Server(app),
    io     = require('socket.io')(server),
    settings = require('./settings');

server.listen(settings.port);



io.on('connection', (socket)=>{

    console.log(socket.id);
    socket.emit('news', { hello: 'there world!???' });

    socket.on('foobar', (data) => {
        console.log(data);
    });

});