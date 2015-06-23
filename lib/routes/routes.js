/**
 * Created by mario (https://github.com/hyprstack) on 16/06/15.
 */
'use strict';

var _ = require('underscore');


var landingPage = {
    description: 'This route responds with the landing page html.',
    handler: function (req, reply) {
        reply.file('index.html');
    }
};

module.exports = [
    { method: 'GET', path: '/lib/{param*}', config: { handler: { directory: { path: 'lib' } } } },
    { method: 'GET', path: '/', config: landingPage }
];
