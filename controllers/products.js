var productModel = require('../models/products');
var cm = require('../models/products');

exports.create = function (req, res) {
    // Create and Save a new Note
    var value = req.body;

    productModel.create(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};


exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    productModel.findAll(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findOneProduct = function (req, res) {
    // Retrieve and return all notes from the database.
    var id = req.params.productId;
    console.log(id);
    productModel.findOneProduct(id, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findProductHSX = function (req, res) {
    // Retrieve and return all notes from the database.
    productModel.findProductHSX(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        console.log(data);
        res.send(data);
    }
    );
};

exports.findOneProductHSX = function (req, res) {
    // Retrieve and return all notes from the database.
    var name = req.params.nameHSX;
    productModel.findOneProductHSX(name, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findOneProductGia = function (req, res) {
    // Retrieve and return all notes from the database.
    console.log(req.params);
    var giabd = req.params.giabd;
    var giakt = req.params.giakt;
    productModel.findOneProductGia(giabd, giakt, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findOneProductType = function (req, res) {
    // Retrieve and return all notes from the database.
    var id = req.params.typeId;
    productModel.findOneProductType(id, function (err, data) {
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
    var id = req.params.productId;
    console.log(id);
    var value = req.body;
    productModel.update(value, function(err, data){
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
    var value = req.params.productId;
    productModel.delete(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findPageProduct = function (req, res) {
    // Delete a note with the specified noteId in the request
    var id = req.params.pageId;
    productModel.findPageProduct(id, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};