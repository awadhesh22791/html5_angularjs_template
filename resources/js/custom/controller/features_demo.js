(function(){
    angular.module('template.features_demo',['template.browser_utility'])
    .controller('FeaturesDemoCtrl',['$scope','NotificationUtil',
    function($scope,NotificationUtil){
        $scope.message="Hello world";
        NotificationUtil.log();
    }]);
})();