var request = require('request');

var url = 'https://likeastore.com';

function check(url, callback) {
    var apiUrl = 'https://api.facebook.com/method/links.getStats?format=json&urls=' + url;

    request({url: apiUrl, json: true}, function (err, resp, body) {
        callback(err, {resp: body, headers: resp.headers});
    });

}

check(url, function (err, resp) {
    console.log(resp);
});
