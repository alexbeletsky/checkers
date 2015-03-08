var _ = require('lodash');
var async = require('async');
var checkers = require('./checkers');

var url = 'https://likeastore.com';

var state = Object.keys(checkers).reduce(function (memo, checker) {
    memo[checker] = {
        success: 0,
        errors: 0
    };

    return memo;
}, {});

function checkAll(callback) {
    var local = _.clone(state);
    async.reduce(Object.keys(checkers), local, function (memo, checker, callback) {
        checkers[checker](url, function (err, resp, body) {
            if (err || resp.statusCode !== 200) {
                memo[checker].errors++;
            } else {
                memo[checker].success++;
            }

            callback(null, memo);
        });
    }, function (err, updated) {
        state = updated;

        console.log('completed at: ' + new Date() + '\n', state);

        callback(err, state);
    });
}

function runLoop() {
    async.map(_.range(8), function (item, callback) {
        checkAll(callback);
    }, function (err, results) {
        console.log('map finished');

        err && console.err(err);

        var t = setTimeout(runLoop, 0);
    });
}

runLoop();
