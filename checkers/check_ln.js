var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://www.linkedin.com/countserv/count/share?url=' + url;

    request({url: apiUrl, json: true}, callback);

}

module.exports = check;
