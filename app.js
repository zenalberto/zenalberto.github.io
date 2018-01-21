(function(){

  var app = angular.module('zenCV', []);


  app.controller('aboutController', function(){
    this.skills = skills;
    this.progressBarClass = function(perc){
      return "progress percent" + perc;
    };
  });

  app.directive('sectionAbout', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/section-about.html'
    }
  });

  var skills = [
    {
      name: 'Organizzazione Eventi',
      percent: 95
    },
    {
      name: 'Project Management',
      percent: 85
    },
    {
      name: 'Pubbliche Relazioni',
      percent: 85
    },
    {
      name: 'Networking',
      percent: 95
    },
    {
      name: 'Team',
      percent: 75
    },
    {
      name: 'Lavoro sotto stress',
      percent: 90
    }
  ];

})();
