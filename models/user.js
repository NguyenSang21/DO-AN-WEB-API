var db= require('./manageDB');
exports.findAll = function(callback){
	db.executeQuery("select * from ngdung",function(err,data){
		callback(err,data);
	});
}
exports.create = function (value ,callback) {
	var query = "INSERT INTO ngdung SET ?";
	db.executeParamsQuery(query, value, function (err, data){
        callback(err, data);
    });
}

exports.update = function (value, callback) {
	var query = "update ngdung Set Username=?, Pass=?, hoTen=?, ngSinh=?, gTinh=?, SDT=?, email=?, Loai=?, diaChiGiaoHang=? Where idNGDUNG = ? ";
	db.executeParamsQuery(query, [value.Username, value.Pass, value.hoTen,value.ngSinh, value.gTinh, value.SDT,value.email, value.Loai, value.diaChiGiaoHang, value.idNGDUNG], function(err, data){
		callback(err, data);
	});
}

exports.delete=function(value,callback){
	var query = "delete from ngdung where idNGDUNG = ?";
	console.log(value);
	db.executeParamsQuery(query,value,function(err,data){
		callback(err,data);
	});
}

exports.findOneUsername = function(value, callback){
	console.log(value);
	var query = "select * from ngdung where Username = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}

exports.findOneUserId = function(value, callback){
	console.log(value);
	var query = "select * from ngdung where idNGDUNG = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}