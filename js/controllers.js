app.controller("pedidosCtrl", function($scope) {
	$scope.cardapio = [];
	$scope.cardapio.push({nome: "X-Salada", preco: "7.5"});
	$scope.cardapio.push({nome: "X-Frango", preco: "7"});
	$scope.cardapio.push({nome: "X-Egg", preco: "8"});
	$scope.cardapio.push({nome: "X-Coração", preco: "9"});

	$scope.pedidos = [];
	$scope.salvarPedido = function(pedido) {
		$scope.pedidos.push(pedido);
		delete $scope.pedido;
	};

	$scope.getTotal = function() {
		var total = 0;
		for (var i = 0; i < $scope.pedidos.length; i++) {
			total += $scope.pedidos[i].item.preco * $scope.pedidos[i].quantidade;
		}
		return total;
	}
});