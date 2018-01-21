(function(){

  var app = angular.module('zenCV', []);

  app.directive('sectionAbout', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/section-about.html'
    }
  });

})();
