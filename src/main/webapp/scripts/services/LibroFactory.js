angular.module('libreria').factory('LibroResource', function($resource){
    var resource = $resource('rest/libros/:LibroId',{LibroId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});