'use strict';
module.exports = function(app,connection) {
var Partners = require('../Controller/BaseController');
var Home = require('../Controller/HomeController');
	app.route('/')
	 .get(Home.index);
          app.route('/list-users')
	 .get(Home.listUsers);
}