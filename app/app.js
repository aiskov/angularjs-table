var myCompany = angular.module("myCompany", []);

myCompany.controller("myCompanyController", [
  "$scope",
  function($scope) {
    $scope.people = [
      {
        name: "",
        email: ""
      }
    ];
   
  

   $scope.$watch("people", function(newValue, oldValue) {
        if(newValue) {
          console.log("new value");
          var last = $scope.people[$scope.people.length-1];
            if(last.name || last.email){
              console.log("if");
              $scope.people.push({
                name: "",
                email:""
              });
            }
        }     
      else {
        console.log("no changes");
      }
    });

    
  }
]);
