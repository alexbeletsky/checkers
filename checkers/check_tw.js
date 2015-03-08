var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://cdn.api.twitter.com/1/urls/count.json?url=' + url;

    request({url: apiUrl, json: true}, function (err, resp, body) {
        callback(err, {resp: body, headers: resp.headers});
    });

}

module.exports = check;
