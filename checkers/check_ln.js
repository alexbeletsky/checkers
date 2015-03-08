var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://www.linkedin.com/countserv/count/share?url=' + url;

    request({url: apiUrl, json: true}, function (err, resp, body) {
        callback(err, {resp: body, headers: resp.headers});
    });

}

module.exports = check;
