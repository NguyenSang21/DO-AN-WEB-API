var userModel = require('../models/user');
var cm = require('../models/user');

exports.create = function (req, res) {
    // Create and Save a new Note
    var value = req.body;
    console.log(value);
    userModel.create(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};


exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    userModel.findAll(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};


exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    var value = req.body;
    console.log(value);
    userModel.update(value, function(err, data){
            if(err) {
                res.status(400).send(err);
                return;
            } else {
                res.send(data);
            }
        });
};


exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    var value = req.params.userId;
    userModel.delete(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findOneUsername = function (req, res) {
    // Retrieve and return all notes from the database.
    var username = req.params.username;
    console.log(username);
    userModel.findOneUsername(username, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findOneUserId = function (req, res) {
    // Retrieve and return all notes from the database.
    var userId = req.params.userId;
    userModel.findOneUserId(userId, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};
