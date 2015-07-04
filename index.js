/**
 * Created by mario (https://github.com/hyprstack) on 07/06/15.
 */
'use strict';

var Hapi = require('hapi');
var Rs = require('./lib/routes/routes.js');
var AuthCookie = require('hapi-auth-cookie');
var Joi = require('joi');


//var validate = function (request, reply) {
//
//    var username = request.payload.username;
//    var password = request.payload.password;
//
//    var user = users[username];
//    var isValid = user && user.password === password;
//
//    if (!isValid) {
//        return reply().redirect('/login');
//    }
//
//    var credentials = { name: user.name } // Will be accessible in request.auth.credentials
//
//    request.auth.session.set(credentials);
//    return reply('Logged In');
//};


var server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 8080,
    host: 'localhost'
});

server.views({
    engines: {
        'html': {
            module: require('handlebars'),
            compileMode: 'sync'
        }
    },
    relativeTo: __dirname,
    path: './lib/templates',
    partialsPath: './lib/templates/partials',
    layoutPath: './lib/templates/layout',
    layout: true
});

// Load plugins
server.register(AuthCookie, function (err) {

    // Configure auth scheme
    var authOptions = {
        password: 'secret',
        cookie: 'NameOfCookie',
        ttl: 3*60*1000,
        redirectTo: '/login',
        isSecure: false,
        //validateFunc: validate
    };

    server.auth.strategy('sessionCookie', 'cookie', authOptions);

    server.route(Rs);

    if (!module.parent) {

        server.start(function () {
            console.log('Server started: ' + server.info.uri);
        });
    }

});

module.exports = server;




