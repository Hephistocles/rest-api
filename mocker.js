'use strict';
let swagmock = require('swagmock');
let path = require('path');
let Promise = require('bluebird')
let apiPath = path.resolve(__dirname, './config/swagger.json');
let sm = swagmock(apiPath)

module.exports = (args) => {
    return new Promise(function(resolve, reject) {
        sm.responses(args, function(err, data) {
            resolve(data)
        })
    });
};
