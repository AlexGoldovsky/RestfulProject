var express = require('express');

module.exports = (function() {
    'use strict';
    var api = express.Router();

    var Model2 = require($base+'Models/model2');

    // GET METHODS
    api.get('/', function(req, res){
		Model2.get(function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	api.get('/:_id', function(req, res){
		Model2.getById(req.params._id, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	// POST METHODS
	api.post('/', function(req, res){
		var data = req.body;
		Model2.add(data, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	// PUT METHODS
	api.put('/:_id', function(req, res){
		var id = req.params._id;
		var data = req.body;
		Model2.update(id, data, {}, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	// DELETE METHODS
	api.delete('/:_id', function(req, res){
		var id = req.params._id;
		Model2.delete(id, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	return api;
})();