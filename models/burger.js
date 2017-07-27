var orm = require("../config/orm.js");

var burger = {

	selectAll: function(callback) {
		orm.selectAll("burgers", "id", function(data) {
			callback(data);
		});
	},

	insertOne: function(burgerName, callback) {
		orm.insertOne("burgers", {burger_name: burgerName}, function(data) {
			callback(data);
		});
	},

	updateOne: function(state, id, callback) {
		orm.updateOne("burgers", {devoured: state}, {id: id}, function(data) {
			callback(data);
		});
	}

};

module.exports = burger
