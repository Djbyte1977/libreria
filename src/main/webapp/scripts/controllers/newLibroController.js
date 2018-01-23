
angular.module('libreria').controller('NewLibroController', function ($scope, $location, locationParser, flash, LibroResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.libro = $scope.libro || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The libro was created successfully.'});
            $location.path('/Libros');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        LibroResource.save($scope.libro, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Libros");
    };
});