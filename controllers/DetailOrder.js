var detailOrderModel = require('../models/DetailOrder');

exports.findAll = function (req, res) {
    var orderId = req.params.orderId;
    console.log(orderId);
    detailOrderModel.findAll(orderId, function (err, data) {
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

    detailOrderModel.create(value, function (err, data) {
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
    console.log(value);
    detailOrderModel.update(value, function(err, data){
            if(err) {
                res.status(400).send(err);
                return;
            } else {
                res.send(data);
            }
        });
};


