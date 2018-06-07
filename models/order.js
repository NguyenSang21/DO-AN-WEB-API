var db= require('./manageDB');

exports.findAll=function(value, callback){
	var query = "select * from hoadon where idNGDUNG = ?";

	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
    });
    
}