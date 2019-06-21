var mysql = require('mysql');

function select(sql) {
    var promise = new Promise(function (resolve, reject) {
        var connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'db_macroeconomic_visualization'
        });
        connection.connect();
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            resolve(result);
        });
        connection.end();
    })
    return promise
}
module.exports = {
    select
}
