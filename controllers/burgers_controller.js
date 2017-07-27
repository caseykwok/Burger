var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", {
			all: data
		});
	});
});

router.post("/", function(req, res) {
	burger.insertOne(req.body.burger, function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	burger.updateOne(true, req.params.id, function() {
		res.redirect("/");
	});
});

module.exports = router;