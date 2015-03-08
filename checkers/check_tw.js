var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://cdn.api.twitter.com/1/urls/count.json?url=' + url;

    request({url: apiUrl, json: true, timeout: 3000}, function (err, resp, body) {
        callback(err, resp, body);
    });
}

module.exports = check;
