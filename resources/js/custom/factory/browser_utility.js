(function(){
    angular.module('template.browser_utility',[])
    .service('NotificationUtil',['$log',function($log){
        var util={};
        util={
            log:function(){
                $log.info("Hello World");
            }
        }
        return util;
    }]);
})();