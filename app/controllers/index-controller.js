app.controller('categoryController', ['$scope','$resource', '$window', '$http',  function($scope,$resource,$window, $http){
	
	//var Meetup = $resource('/api/category');
	
	// 
	//Meetup.query(function(results){
	// 	$scope.meetups = results;
	// });


	// $scope.category.selection = 'search';
	// $scope.category.type = 'Teachers';


	$scope.go = function(category) {
        console.log(category);
        if (category.selection == 'search') {
        	$scope.cattype = category.type;
			console.log($scope.cattype);
			// $http({
			//     method: 'POST',
			//     url: 'http://localhost:3000/search/',
			//     data: $.param({cattype: category.type}),
			//     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			// })
        	// $window.location.href = '/search';
    
        }
        else{
        	$scope.cattype = category.type;
        	$http({
			    method: 'POST',
			    url: 'http://localhost:3000/makecomment/',
			    data: $.param({cattype: category.type}),
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
        }
    };

	$scope.selectiontypecat = function(){
		console.log($scope.selection);
		console.log($scope.type);
	}
	
}])