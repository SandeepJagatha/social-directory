
// declare modules
angular.module('Authentication', []);
angular.module('Home', []);


var app = angular.module('KleosApp', ['ngResource', 'ngRoute','Authentication','ngCookies'])


//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/index',
            {
                controller: 'HomeController',
                templateUrl: '/app/views/home.html'
            })

        .when('/login', {
            controller: 'LoginController',
            templateUrl: '/app/views/login.html',
            hideMenus: true
        })

        //Define a route that has a route parameter in it (:customerID)
        .when('/makecomment',
            {
                controller: 'MakeCommentController',
                templateUrl: '/app/views/makecomment.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/search',
            {
                controller: 'SearchController',
                templateUrl: '/app/views/search.html'
            })
        .when('/aboutus',
            {
                controller: 'AboutusController',
                templateUrl: '/app/views/aboutus.html'
            })
        .when('/contactus',
            {
                controller: 'ContactusController',
                templateUrl: '/app/views/contactus.html'
            }) 
        .when('/userprofile/:userID',
            {
                controller: 'UserProfileController',
                templateUrl: '/app/views/userprofile.html'
            })
        .when('/usercomments/:userID',
            {
                controller: 'UserCommentsController',
                templateUrl: '/app/views/usercomments.html'
            })
        .otherwise({ redirectTo: '/login' });
});

app.run(function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    });