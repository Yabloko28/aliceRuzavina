var app = angular.module('alice', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
    .when('/welcome', {
		templateUrl: 'templates/welcome.html',
		controller: 'WelcomeCtrl as ctrl',
	})
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl as ctrl'
	})
    .when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutCtrl as ctrl'
	})
	.when('/fashion-projects', {
		templateUrl: 'templates/fashion-projects.html',
		controller: 'FashionCtrl as ctrl'
	})
	.when('/textile', {
		templateUrl: 'templates/textiles.html',
		controller: 'TextileCtrl as ctrl'
	})
    .when('/illustration', {
		templateUrl: 'templates/illustration.html',
		controller: 'IllustrationCtrl as ctrl'
	})
	.when('/photography', {
		templateUrl: 'templates/photography.html',
		controller: 'PhotographyCtrl as ctrl'
	})
    .when('/artworks', {
		templateUrl: 'templates/artworks.html',
		controller: 'ArtworksCtrl as ctrl'
	})
	.when('/fashion-projects/:projectId', {
		templateUrl: 'templates/project.html',
		controller: 'ProjectCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
});

$(document).ready(function() {
})