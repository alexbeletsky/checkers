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
        callback(err, state);
    });
}

function runLoop() {
    checkAll(function (err, stats) {
        err && console.err(err);
        console.log(new Date(), stats);

        setTimeout(runLoop, 0);
    });
}

runLoop();
