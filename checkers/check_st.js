var request = require('request');

function check(url, callback) {
    var apiUrl = 'http://badge.stumbleupon.com/badge/embed/5/?url=' + url;

    request({url: apiUrl, json: true}, function (err, resp, body) {
        callback(err, {resp: body, headers: resp.headers});
    });

}

module.exports = check;
