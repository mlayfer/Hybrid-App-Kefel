'use strict';
/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appFilters',
    'appServices'
]);

var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'partials/splash.html',
                controller: 'mainCtrl'
            }).
            when('/main', {
                templateUrl: 'partials/main.html',
                controller: 'mainCtrl'
            }).
            otherwise({
                redirectTo: '/splash'
            });
    }]);

app.run(function ($rootScope) {
    $rootScope.isIOS7 = function () {
        if (utilities.isIphone() && window.device && parseFloat(window.device.version) >= 7) {
            return "ios7";
        } else {
            return "";
        }
    };
    document.addEventListener('deviceready', function() {

	      //adbuddiz.setAndroidPublisherKey("70418a12-9254-4f80-a0e0-82439893ce47");
    	
        setTimeout(function(){
            $rootScope.$broadcast('deviceready',null);
        });

    });
});