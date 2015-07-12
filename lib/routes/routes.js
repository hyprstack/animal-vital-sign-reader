/**
 * Created by mario (https://github.com/hyprstack) on 16/06/15.
 */
'use strict';

var _ = require('underscore');
var Joi = require('joi');

var internals = {};


// Our fake User database - TODO: replace with real database once user authentication is working
internals.users = {
    mario: {
        username: 'mario',
        password: 'test',   // 'secret'
        name: 'Mario Mendes',
        id: '1234'
    }
};

internals.validate = function validate (user, password) {

    if (!internals.users[user]) {
        return false;
    }

    return internals.users[user].password === password;
};


internals.landingPage = {

    description: 'This route responds with the landing page html.',

    handler: function (request, reply) {
        reply.file('index.html');
    }
};

internals.loginPage = {

    description: "This rout displays the login page to the user.",

    handler: function (request, reply) {
        reply.view('login');
    }
};

internals.login = {

    description: "This rout attempts to log the user into his profile.",

    validate: {
        payload: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    },

    handler: function (request, reply) {

        console.log(request.payload.username);
        console.log(request.payload.password);

        var user = request.payload.username;
        var pass = request.payload.password;

        if (!internals.validate(user, pass)) {
            console.log("Invalid username or password!");
            return reply.view('login', { fail: true, message: "Invalid username or password!" });
        }

        request.auth.session.set({ user: internals.users[user].username });
        console.log(request.auth.credentials);
        return reply.redirect('/user');

    }

};

internals.userpage = {

    description: "Test user page",

    auth: 'sessionCookie',

    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false
        }
    },

    handler: function (request, reply) {
        //console.log(request.auth.credentials);
        //
        //var message = '';
        //var account = null;
        //
        //if (request.auth.isAuthenticated) {
        //    console.log("User is authenticated!");
        //    return reply.redirect('/user');
        //}
        //
        //if (!request.payload.username ||
        //    !request.payload.password) {
        //
        //    message = 'Missing username or password';
        //}
        //else {
        //    account = users[request.payload.username];
        //    console.log(account);
        //    if (!account ||
        //        account.password !== request.payload.password) {
        //
        //        message = 'Invalid username or password';
        //    }
        //}

        reply.view('user', { username: request.auth.credentials.name });
    }
};



module.exports = [
    { method: 'GET', path: '/lib/{param*}', config: { handler: { directory: { path: 'lib' } } } },
    { method: 'GET', path: '/', config: internals.landingPage },
    { method: 'GET', path: '/login', config: internals.loginPage},
    { method: 'POST', path: '/login', config: internals.login},
    { method: 'GET', path: '/user', config: internals.userpage}
];
