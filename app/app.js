var myCompany = angular.module("myCompany", []);

myCompany.controller("myCompanyController", [
  "$scope",
  function ($scope) {
    $scope.people = [
      {
        name: "",
        email: ""
      }
    ];

    var onContactsChange = function (newValue, oldValue) {
        var last = $scope.people[$scope.people.length - 1];
        if (! last.name && ! last.email) return;

        console.log("Adding new line (" + $scope.people.length + ")");
        $scope.people.push({
          name: "",
          email: ""
        });
    };

    $scope.$watch("people", onContactsChange, true);
  }
]);
