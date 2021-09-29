app.controller('MainController', ['$scope', function($scope){
	$scope.list = ["Eat", "Sleep", "Code", "Repeat"];
}])

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.controller('Pl', ['$scope', function($scope) {
  $scope.list	 = ['Hola!','Hello'];
}]);

app.controller('multiply', ['$scope', function($scope){
	$scope.product	= function(value) { return value * 2}
}]);

app.controller('getadd', ['$scope', function($scope){
	$scope.add = function(num1, num2){
			$scope.txtsum = 'Deposited : ';
			$scope.sum = parseInt(num1) + parseInt(num2);
	}
}]);

app.controller('getdif', ['$scope', function($scope){
	$scope.minus = function(num1, num2){
			$scope.difference = 'Money Withraw : ';
			$scope.dif = parseInt(num1) - parseInt(num2);
	}
}]);