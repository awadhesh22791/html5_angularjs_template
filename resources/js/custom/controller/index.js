(function(){
    angular.module('template',[])
    .controller('IndexCtrl',['$scope',function($scope){
        $scope.message="Hello world";
    }]);
})();