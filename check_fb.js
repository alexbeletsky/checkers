var request = require('request');

var url = 'https://likeastore.com';

function check(url, callback) {
    callback(null, {resp: {}, headers: {}});
}

check(url, function (err, resp) {
    console.log(resp);
});
