const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


const dbConfigHeroku = {
	host: "ro2padgkirvcf55m.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "nukbxsn62jtfly9k",
	password: "ajgvt2148k0whvn1",
	database: "e174k8pwi3i3d0ae",
	multipleStatements: false,
	reconnect: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		