var request = require('request');

function check(url, callback) {
    var apiUrl = 'http://badge.stumbleupon.com/badge/embed/5/?url=' + url;

    request({url: apiUrl, json: true, timeout: 3000}, callback);

}

module.exports = check;
