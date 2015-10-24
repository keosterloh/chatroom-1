var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

    $scope.getParseData = function(){
        parseService.getData().then(function(data){
            console.log(data.data);
            $scope.messages = data.data;
              $scope.messages.reverse();
        })
    };

    $scope.message = '';
    $scope.postData = function(){
        if(!$scope.message) return;
        parseService.postData($scope.message);
        $scope.message = '';


    };


   $scope.getParseData();
   setInterval(function(){
     $scope.getParseData();
   }, 1500)
})
