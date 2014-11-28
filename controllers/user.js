

module.exports = function(app) {
	// body...
	var ps	= require('./powershell')(app);

	var add = function(req,res,next){
		console.log('yay!');
		command = "&import-module ac*; new-aduser '"+req.body.username+"' -accountpassword (convertto-securestring -asplaintext '"+req.body.password+"' -force) -passwordneverexpires 1 -changepasswordatlogon 0 -enabled 1 -path 'OU=simaya,DC=simaya,DC=azure,DC=com'";
		ps.execPS(command, function(err, data){
			if(err){
				res.send(err);
			}else{
				res.send(data);
			}
		});
	}

	var changePass = function(req, res, next){
		command = "&import-module ac*; set-adaccountpassword  -identity '"+req.body.username+"' -reset -newpassword (convertto-securestring -asplaintext '"+req.body.password+"' -force)";
		ps.execPS(command, function(err, data){
			if(err){
				res.send(err);
			}else{
				res.send(data);
			}
		});
	}

	// var delete = function(req)

	return{
		add: add,
		changePass: changePass
	}
}

