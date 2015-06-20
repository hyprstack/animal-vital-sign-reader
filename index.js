/**
 * Created by mario (https://github.com/hyprstack) on 07/06/15.
 */
'use strict';

var Hapi = require('hapi');
var rs = require('./lib/routes/routes.js');
var Path = require('path');


var server = new Hapi.Server();

server.connection({port: process.env.PORT || 8080});

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './lib/templates',
    layoutPath: './lib/templates'
});

server.route(rs);

if(!module.parent) {
    server.start(function(){
        console.log("Server started: " + server.info.uri);
    });
}

module.exports = server;




