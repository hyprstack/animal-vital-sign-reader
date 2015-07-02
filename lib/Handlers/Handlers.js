/**
 * Created by mario (https://github.com/hyprstack) on 02/07/15.
 */

'use strict';

var handlers = {};

handlers.landing = function (request, reply) {
    reply.file('index.html');
};

handlers.login = function (request, reply) {
    reply.view('login');
};

module.exports = handlers;