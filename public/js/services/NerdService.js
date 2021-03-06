// public/js/services/NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            var a= $http.get('/api/nerds');
            return a;
            console.log(a);
        },



        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);

        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        },

        upd : function(id) {
            return $http.get('/api/nerds/'+ id);

        },

        update : function(use,id) {
            return $http.put('/api/nerds/'+ id,use);
        }




    }

}]);