var request = require('request');

function check(url, callback) {
    var apiUrl = 'https://clients6.google.com/rpc';
    var body = {
        "method":"pos.plusones.get",
        "id":"p",
        "params":{
            "nolog":true,
            "id": url,
            "source":"widget",
            "userId":"@viewer",
            "groupId":"@self"
            },
        "jsonrpc":"2.0",
        "key":"p",
        "apiVersion":"v1"
    };

    request.post({url: apiUrl, body: body, json: true, timeout: 3000}, callback);

}

module.exports = check;
