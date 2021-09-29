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