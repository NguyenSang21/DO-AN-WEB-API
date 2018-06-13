var db= require('./manageDB');

exports.findAll=function(value, callback){
	var query = "select * from chitiethd where idHD = ?";

	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
    });
    
}

exports.create = function (value ,callback) {
	let values = [];
	for(let i=0; i<value.length; i++)
	{
		values.push([value[i].idCTHD, value[i].idHD, value[i].idM, value[i].tenSanPham, value[i].SoLuong, value[i].DonGia, value[i].TongTien1SP, value[i].TrangThai]);
	}
	console.log(values);
	var query = "INSERT INTO chitiethd values ?";
	db.executeParamsQuery(query, [values], function (err, data){
        callback(err, data);
    });
}

exports.update = function (value, callback) {
	var query = "update chitiethd Set TrangThai=? Where idCTHD = ? ";
	db.executeParamsQuery(query, [value.TrangThai, Number(value.idCTHD)], function(err, data){
		callback(err, data);
	});
}