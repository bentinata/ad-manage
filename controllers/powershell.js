var exec = require("child_process").execFile;

module.exports = function(app){

	var execPS = function(param, callback){
		// if parameter is null, well... it's null
		param = [param];
		param.unshift("-noprofile","-c");

		exec("powershell.exe",param, function(err, stdout){
			if(err){
				callback(err, stdout);
			}else{
				callback(null, stdout);
			}
		});
	};

	return{
		execPS: execPS
	};
}