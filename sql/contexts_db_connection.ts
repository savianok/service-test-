const mysql = require('mysql');

let db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.USER_DB_HOST,
	password: process.env.PASSWORD_DB_HOST,
	database: process.env.DATABASE,
});

module.exports = {
	db,
	mysql,
};
