var db= require('./manageDB');
exports.findAll = function(callback){
	db.executeQuery("select * from may",function(err,data){
		callback(err,data);
	});
}

exports.findOneProduct = function(value, callback){
	console.log(value);
	var query = "select * from may where idM = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}

exports.SearchProduct = function(value, callback){
	console.log(value);
	var query = "select CEIL(COUNT(*)/9) as kq from may where tenMay LIKE '%"+value+"%'";
	db.executeQuery(query, function(err,data){
		callback(err,data);
	});
}

exports.findOneKeyProduct = function(value, callback){
	console.log(value);
	var query = "select * from may where `Key` = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}

exports.findProductRelated = function(value, callback){
	console.log(value);
	var query = "select * from may where Loai = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}

exports.findProductHSX = function(callback){
	var query = "SELECT NSX FROM may GROUP BY(NSX)";
	db.executeQuery(query, function(err,data){
		callback(err,data);
	});
}

exports.findOneProductHSX = function(name, callback){
	console.log(name);
	var query = "SELECT CEIL(COUNT(*)/9) as kq FROM may WHERE NSX = ?";
	db.executeParamsQuery(query, name, function(err,data){
		callback(err,data);
	});
}

exports.findOneProductGia = function(giabd, giakt, callback){
	var query = "SELECT CEIL(COUNT(*)/9) as kq FROM may WHERE Gia >= ? AND Gia <= ?";
	db.executeParamsQuery(query, [giabd, giakt], function(err,data){
		callback(err,data);
	});
}

exports.findOneProductType = function(value, callback){
	console.log(value);
	var query = "SELECT CEIL(COUNT(*)/9) as kq FROM may WHERE Loai = ?";
	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
	});
}

exports.findPageProductHSX = function(name, idPage, callback){
	var offset = idPage == 1 ? 0 : idPage * 9;
	var limit = 9;
	var query = "select * from may WHERE NSX = ? limit ?, ?";

	db.executeParamsQuery(query, [name, offset, limit], function(err,data){
		callback(err,data);
	});
}

exports.PageSearchProduct = function(name, idPage, callback){
	var offset = idPage == 1 ? 0 : idPage * 9;
	var limit = 9;
	var query = "select * from may WHERE tenMay LIKE '%"+name+"%' limit ?, ?";

	db.executeParamsQuery(query, [offset, limit], function(err,data){
		callback(err,data);
	});
}

exports.findPageProductGia = function(giabd, giakt, idPage, callback){
	var offset = idPage == 1 ? 0 : idPage * 9;
	var limit = 9;
	var query = "select * from may WHERE Gia >= ? AND Gia <= ? limit ?, ?";
	db.executeParamsQuery(query, [giabd, giakt, offset, limit], function(err,data){
		callback(err,data);
	});
}

exports.findPageProductType = function(value, idPage, callback){
	var offset = idPage == 1 ? 0 : idPage * 9;
	var limit = 9;
	var query = "select * from may WHERE Loai = ? limit ?, ?";
	console.log(value);
	db.executeParamsQuery(query, [value, offset, limit], function(err,data){
		callback(err,data);
	});
}


exports.create = function (value ,callback) {
	var query = "INSERT INTO may SET ?";
	db.executeParamsQuery(query, value, function (err, data){
        callback(err, data);
    });
}

exports.update = function (value, callback) {
	var query = "update may Set tenMay=?, NSX=?, ManHinh=?, HDH=?, CPU=?, RAM=?, CAMERA=?, PIN=?, Gia=?, ghiChu=?, slMatDinh=?, slHienTai=?, slXem=?, ngSX=?, Loai=?, Comment=?, MoTa=?, linkAnh=? Where idM = ? ";
	db.executeParamsQuery(query, [value.tenMay, value.NSX, value.ManHinh,value.HDH, value.CPU, value.RAM,value.CAMERA, value.PIN, value.Gia,value.ghiChu, value.slMatDinh, value.slHienTai,value.slXem, value.ngSX, value.Loai,value.Comment,value.MoTa, value.linkAnh, value.idM], function(err, data){
		callback(err, data);
	});
}

exports.delete = function(value,callback){
	var query = "delete from may where idM = ?";
	console.log(value);
	db.executeParamsQuery(query,value,function(err,data){
		callback(err,data);
	});
}

exports.findPageProduct = function(value,callback){
	var idPage = Number(value);
	var offset = idPage == 1 ? 0 : idPage * 9;
	var limit = 9;
	var query = "select * from may limit ?, ?";
	console.log(value);
	db.executeParamsQuery(query, [offset, limit],function(err,data){
		callback(err,data);
	});
}

exports.findNumberPageProduct = function(callback){
	var query = "SELECT CEIL(COUNT(*)/9) as kq FROM may";
	db.executeQuery(query, function(err,data){
		callback(err,data);
	});
}

exports.findTopProduct = function(value,callback){

	var query = "select slMatDinh-slHienTai as kq,idM,tenMay,NSX,ManHinh,HDH,CPU,RAM,CAMERA,PIN,Gia,ghiChu,ngSX,linkAnh,`Key` from may where NSX = ? ORDER BY kq DESC limit 0,4";
	console.log(query);
	db.executeParamsQuery(query, value ,function(err,data){
		callback(err,data);
	});
}
exports.updateViews = function(value,callback){
	var id = Number(value);
	var query = "update may Set slXem= (slxem + 1) Where idM = ?"; 
	console.log(query);
	db.executeParamsQuery(query, id ,function(err,data){
		callback(err,data);
	});
}