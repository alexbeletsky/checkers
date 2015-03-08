var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://api.pinterest.com/v1/urls/count.json?callback=_&url=' + url;

    request({url: apiUrl, json: true}, callback);

}

module.exports = check;
