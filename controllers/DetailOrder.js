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


