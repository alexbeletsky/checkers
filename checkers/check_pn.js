var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://api.pinterest.com/v1/urls/count.json?callback=_&url=' + url;

    request({url: apiUrl, json: true}, function (err, resp, body) {
        callback(err, {resp: body, headers: resp.headers});
    });

}

module.exports = check;
