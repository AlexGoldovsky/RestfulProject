var express = require('express');

module.exports = (function() {    'use strict';
    var web = express.Router();

    var Model2 = require($base+'Models/model2');

    web.get('/', function(req, res) {
        res.send('some json');
    });

    return web;
})();