var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://api.facebook.com/method/links.getStats?format=json&urls=' + url;

    request({url: apiUrl, json: true}, callback);
}

module.exports = check;
