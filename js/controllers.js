app.controller("pedidosCtrl", function($scope) {
	$scope.ordemCarpapio = "nome";
	$scope.ordemReversa = false;

	$scope.cardapio = [];
	$scope.cardapio.push({nome: "X-Salada", preco: "7.5"});
	$scope.cardapio.push({nome: "X-Frango", preco: "7"});
	$scope.cardapio.push({nome: "X-Egg", preco: "8"});
	$scope.cardapio.push({nome: "X-Coração", preco: "9"});

	$scope.pedidos = [];
	$scope.salvarPedido = function(pedido) {
		pedido.subtotal = calcularSubtotal(pedido);
		$scope.pedidos.push(pedido);
		delete $scope.pedido;
		$scope.pedidoForm.$setPristine();
		calcularTotal();
	};

	$scope.excluirPedido = function(pedido) {
		$scope.pedidos.splice($scope.pedidos.indexOf(pedido), 1);
		calcularTotal();
	};

	$scope.recalcularTotais = function(pedido) {
		pedido.subtotal = calcularSubtotal(pedido);
		calcularTotal();
	};

	$scope.editarItem = function(pedido, value) {
		pedido.editarItem = value;
	};

	$scope.alterarOrdem = function() {
		$scope.ordemReversa = !$scope.ordemReversa;
	};

	var calcularSubtotal = function(pedido) {
		return pedido.item.preco * pedido.quantidade;
	};

	var calcularTotal = function() {
		$scope.total = 0;
		angular.forEach($scope.pedidos, function(pedido) {
			$scope.total += pedido.subtotal;
		});
	};
});