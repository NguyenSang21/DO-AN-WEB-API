var db= require('./manageDB');

exports.findAll=function(value, callback){
	var query = "select * from chitiethd where idHD = ?";

	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
    });
    
}

exports.create = function (value ,callback) {
	var query = "INSERT INTO chitiethd SET ?";
	db.executeParamsQuery(query, value, function (err, data){
        callback(err, data);
    });
}

exports.update = function (value, callback) {
	var query = "update chitiethd Set TrangThai=? Where idCTHD = ? ";
	db.executeParamsQuery(query, [value.TrangThai, Number(value.idCTHD)], function(err, data){
		callback(err, data);
	});
}