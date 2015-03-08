var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://cdn.api.twitter.com/1/urls/count.json?url=' + url;

    request({url: apiUrl, json: true}, callback);

}

module.exports = check;
