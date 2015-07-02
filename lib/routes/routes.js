/**
 * Created by mario (https://github.com/hyprstack) on 16/06/15.
 */
'use strict';

var _ = require('underscore');
var handlers = require('../Handlers/handlers.js');


var landingPage = {
    description: 'This route responds with the landing page html.',
    handler: handlers.landing
};

var loginPage = {
    description: "This rout displays the login page to the user.",
    handler: handlers.login
}

module.exports = [
    { method: 'GET', path: '/lib/{param*}', config: { handler: { directory: { path: 'lib' } } } },
    { method: 'GET', path: '/', config: landingPage },
    { method: 'GET', path: '/login', config: loginPage}
];
