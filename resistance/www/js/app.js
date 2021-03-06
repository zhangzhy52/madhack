// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider // $stateProvider is used
      .state('index', {
        url: "/",
        //abstract: true,
        templateUrl: 'index.html'
      })
      .state('goodIdentity', {
        url: "/assignGood",
        //abstract: true,
        templateUrl: 'assignGood.html'
      })
      .state('badIdentity', {
        url: "/assignBad",
        //abstract: true,
        templateUrl: 'assignBad.html'
      })
      .state('afterVote', {
        url: "/afterVote",

        templateUrl: 'afterVote.html'


      });

    $urlRouterProvider.otherwise('index.html');
  });


starter.controller("startGameCtrl", function($scope, $ionicModal, $ionicLoading, $state){

  $scope.onSubmit = function () {
    console.log("aa");

    $state.go('badIdentity');

  }
});


starter.controller("voteCtrl", function ($scope, $ionicModal, $ionicLoading, $state) {
  $scope.onSubmitMissionY = function () {
    console.log("bb");
    $state.go('afterVote');
  }
});
