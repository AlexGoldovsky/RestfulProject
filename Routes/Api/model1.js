var express = require('express');

module.exports = (function() {
    'use strict';
    var api = express.Router();

    var Model1 = require($base+'Models/Model1');

    // GET METHODS
    api.get('/', function(req, res){
		Model1.get(function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	api.get('/:_id', function(req, res){
		Model1.getById(req.params._id, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	// POST METHODS
	api.post('/', function(req, res){
		var data = req.body;
		Model1.add(data, function(err, result){
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
		Model1.update(id, data, {}, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	// DELETE METHODS
	api.delete('/:_id', function(req, res){
		var id = req.params._id;
		Model1.delete(id, function(err, result){
			if(err){
				throw err;
			}
			res.json(result);
		});
	});

	return api;
})();