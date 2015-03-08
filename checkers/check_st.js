var request = require('request');

function check(url, callback) {
    var apiUrl = 'http://badge.stumbleupon.com/badge/embed/5/?url=' + url;

    request({url: apiUrl, json: true}, callback);

}

module.exports = check;
