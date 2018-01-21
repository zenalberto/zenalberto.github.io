(function(){

  var app = angular.module('about-directives', []);

  app.directive('sectionAbout', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/section-about.html',
      controller: function(){
        this.narrow = narrow;
        this.skills = skills;
        this.progressBarClass = function(perc){
          return "progress percent" + perc;
        };
      },
      controllerAs: 'about'
    }
  });

  var narrow = {
    h3: 'About',
    h1: 'More About Me',
    lead: 'Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea ' +
          'dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip ' +
          'quis qui voluptate dolore veniam Ut laborum non est in officia.'
  }


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
