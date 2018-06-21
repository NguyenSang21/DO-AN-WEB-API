var db= require('./manageDB');

exports.findAll=function(value, callback){
	var query = "select * from hoadon where idNGDUNG = ?";

	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
    });
    
}

exports.findAllOrder = function(callback){

	db.executeQuery("select * from hoadon",function(err,data){
		callback(err,data);
    });
    
}


exports.create = function (value ,callback) {
	var query = "CALL insertHoaDon(?, ?, ?, ?, ?, ?)";
	db.executeParamsQuery(query, [value.idNGDUNG, value.tongTien, value.NgayMua, value.tinhTrang, value.diaChi, value.soSanPham], function (err, data){
        callback(err, data);
    });
}

exports.update = function (value, callback) {
	var query = "update hoadon Set tinhTrang=? Where idHD = ? ";
	db.executeParamsQuery(query, [value.tinhTrang, value.idHD], function(err, data){
		callback(err, data);
	});
}