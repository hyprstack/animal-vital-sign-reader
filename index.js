/**
 * Created by mario (https://github.com/hyprstack) on 07/06/15.
 */
'use strict';

var Hapi = require('hapi');
var rs = require('./lib/routes/routes.js');


var server = new Hapi.Server();

server.connection({port: process.env.PORT || 8080});

server.route(rs);

if(!module.parent) {
    server.start(function(){
        console.log("Server started: " + server.info.uri);
    });
}

module.exports = server;




