
module.exports = function(app) {
	var user	= require('../controllers/user')(app);

	app.get('/api', function(){console.log('yay!');});

	app.get('/api/user', user.add);
	app.post('/api/user', user.add);
	app.put('/api/user/:id/password', user.changePass);

}