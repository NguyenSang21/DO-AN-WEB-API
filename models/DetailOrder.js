var db= require('./manageDB');

exports.findAll=function(value, callback){
	var query = "select * from chitiethd where idHD = ?";

	db.executeParamsQuery(query, value, function(err,data){
		callback(err,data);
    });
    
}