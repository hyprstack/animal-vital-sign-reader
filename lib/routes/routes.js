/**
 * Created by mario (https://github.com/hyprstack) on 16/06/15.
 */
'use strict';

var _ = require('underscore');


var landingPage = {
    description: 'This route responds with the landing page html.',
    handler: function (request, reply) {
        reply.file('index.html');
    }
};

var loginPage = {
    description: "This rout displays the login page to the user.",
    handler: function (request, reply) {
        reply.view('login');
    }
};

// Our fake User database - TODO: replace with real database once user authentication is working
var users = {
    mario: {
        password: 'test',
        name: 'mario'
    }
};

var login = {
    description: "This rout attempts to log the user into his profile.",
    handler: function (request, reply) {


        var message = '';
        var account = null;

        if (request.auth.isAuthenticated) {
            return reply.redirect('/user');
        }

        if (!request.payload.username ||
            !request.payload.password) {

            message = 'Missing username or password';
        }
        else {
            account = users[request.payload.username];
            if (!account ||
                account.password !== request.payload.password) {

                message = 'Invalid username or password';
            }
        }

        request.auth.session.set(account);
        return reply.redirect('/user');

    },
    auth: {
        mode: 'try',
        strategy: 'sessionCookie'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false
        }
    }
};

var userpage = {
    description: "Test user page",
    handler: function (request, reply) {
        reply.view('user');
    },
    auth: 'sessionCookie'
};



module.exports = [
    { method: 'GET', path: '/lib/{param*}', config: { handler: { directory: { path: 'lib' } } } },
    { method: 'GET', path: '/', config: landingPage },
    { method: 'GET', path: '/login', config: loginPage},
    { method: 'POST', path: '/login', config: login},
    { method: 'GET', path: '/user', config: userpage}
];
