const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const dataHandler = require('./controllers/datahandler')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});

module.exports = function(app) {
	app.get('/', requireAuth, function(req, res) {
		res.send({message: 'this is an authenticated request'});
	})
	app.get('/data/:loc', /*requireAuth,*/ dataHandler.fetchData)
	app.post('/signup', Authentication.signup)
	app.post('/signin', requireSignin, Authentication.signin)
}