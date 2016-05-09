var mongoose = require('mongoose');

// Schema
var Schema = mongoose.Schema({
	field: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Model = module.exports = mongoose.model('Schema2', Schema);

// Get (with limit)
module.exports.get = function(callback, limit){
	Model.find(callback).limit(limit);
}

// Get by id
module.exports.getById = function(id, callback){
	Model.findById(id, callback);
}

// Add
module.exports.add = function(data, callback){
	Model.create(data, callback);
}

// Update
module.exports.update = function(id, data, options, callback){
	var query = {_id: id};
	var update = {
		field: data.field,
	}
	Model.findOneAndUpdate(query, update, options, callback);
}

// Delete
module.exports.delete = function(id, callback){
	var query = {_id: id};
	Model.remove(query, callback);
}