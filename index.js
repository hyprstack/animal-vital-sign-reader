/**
 * Created by mario (https://github.com/hyprstack) on 07/06/15.
 */
'use strict';

var Hapi = require('hapi');
var Rs = require('./lib/routes/routes.js');
var AuthCookie = require('hapi-auth-cookie');

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
server.register( AuthCookie, function (err) {

    if (err) {
        console.log("Failed loading plugin");
    }

    // Configure auth scheme
    var CookieOptions = {
            password: 'secret',
            cookie: 'sessionCookie',
            ttl: 3*60*1000,
            clearInvalid: true,
            redirectTo: '/login',
            isSecure: false // required for non-https applications
    };

    server.auth.strategy('sessionCookie', 'cookie', CookieOptions);

    server.route(Rs);

    if (!module.parent) {

        server.start(function () {
            console.log('Server started: ' + server.info.uri);
        });
    }

});

module.exports = server;
