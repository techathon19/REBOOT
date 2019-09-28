var mysql = require('mysql2');

var connection = mysql.createConnection({       //Details of the connection
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hotspot'
});



var db;
function connectDatabase() {                //To Establish connection with database
    if (!db) {
        db = connection;

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();   // Exporting for other Pages