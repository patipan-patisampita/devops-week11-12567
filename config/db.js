const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'db-express',
});

// For pool initialization, see above
connect.getConnection(function (err, conn) {
    // Do something with the connection
    connect.query('SELECT * FROM users', function (err, rows) {
        if (err) {
            console.log('ERRORR connected database',err)
        }

        console.log('Connected database successfully', rows)
    });

    // Don't forget to release the connection when finished!
    connect.releaseConnection(conn);
});

module.exports = connect
