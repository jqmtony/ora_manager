(function() {

	var mainApp = angular.module('mainApp', [ 'home', 'ash', 'ash-archive',
			'sql', 'session', 'tables', 'tablespaces', 'ngRoute' ]);

	mainApp.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'app/brand/brand.html',
		}).when('/home', {
			templateUrl : 'app/home/home.html',
			controller : 'HomeCtrl'
		}).when('/ash', {
			templateUrl : 'app/ash/ash.html',
			controller : 'AshCtrl'
		}).when('/ash-archive', {
			templateUrl : 'app/ash/ash-archive.html',
			controller : 'AshArchiveCtrl'
		}).when('/sql/:sqlId', {
			templateUrl : 'app/sql/sql.html',
			controller : 'SqlCtrl'
		}).when('/session', {
			templateUrl : 'app/session/session.html',
			controller : 'SessionCtrl'
		}).when('/tables', {
			templateUrl : 'app/tables/tables.html',
			controller : 'TablesCtrl'
		}).when('/tablespaces', {
			templateUrl : 'app/tablespaces/tablespaces.html',
			controller : 'TablespaceCtrl'
		}).otherwise({
			redirectTo : '/'
		});
	} ]);

})();
