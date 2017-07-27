var connection = require("./connection.js");

var orm = {

	selectAll: function(tableName, columnName, callback) {
		let query = "SELECT * FROM ?? ORDER BY ??;";
		connection.query(query, [tableName, columnName], function(err, data) {
			if (err) throw err;
			callback(data);
		});
	},

	insertOne: function(tableName, setObj, callback) {
		let query = "INSERT INTO ?? SET ?;";
		connection.query(query, [tableName, setObj], function(err, data) {
			if (err) throw err;
			callback(data);
		});	
	},

	updateOne: function(tableName, setObj, whereObj, callback) {
		let query = "UPDATE ?? SET ? WHERE ?;";
		connection.query(query, [tableName, setObj, whereObj], function(err, data) {
			if (err) throw err;
			callback(data);
		});
	}
};

module.exports = orm