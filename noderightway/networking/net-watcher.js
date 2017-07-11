'use trick';

const 
    fs = require('fs');
    net = require('net');

    filename = process.argv[2],

    server = net.createServer(function(connection){

        //reporting
        console.log('Subscriber connected. ');
        connection.write("Now Watch '" + filename + " ' for changes... \n");

        //watcher setup

        let watcher = fs.watch(filename, function() {
            connection.write("File '" + filename + "' changed: " + Date.noew() + "\n");
        });

        //clear up

        connection.on('close', function() {
            console.log("Subscriber disconnected. ");
            watcher.close();
        });
    });

    if(!filename) {
        throw Error(' No target file name for specified.');
    }

    server.listen(5432, function() {
        console.log('Listening for subscribes...');
    });