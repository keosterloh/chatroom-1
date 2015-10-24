var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        //You'll need to change this url to your local server GET endpoint
        return $http.get('http://localhost:3000/get')
    };

    this.postData = function(message){
        //You'll need to change this url to your local server POST endpoint
        return $http.post('http://localhost:3000/post', {text: message})
    };

});
