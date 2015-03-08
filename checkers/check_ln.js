var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://www.linkedin.com/countserv/count/share?url=' + url;

    request({url: apiUrl, json: true, timeout: 3000}, callback);

}

module.exports = check;
