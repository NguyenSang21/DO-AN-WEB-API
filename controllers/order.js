var orderModel = require('../models/order');
var cm = require('../models/user');


exports.findAll = function (req, res) {
    var userId = req.params.userId;
    orderModel.findAll(userId, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findAllOrder = function (req, res) {
    orderModel.findAllOrder(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.create = function (req, res) {
    // Create and Save a new Note
    var value = req.body;

    orderModel.create(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    var value = req.body;
    
    orderModel.update(value, function(err, data){
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
    orderModel.delete(value, function (err, data) {
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
    orderModel.findOneUsername(username, function (err, data) {
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
    orderModel.findOneUserId(userId, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};
