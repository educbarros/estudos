var cadastroProdutos = [];

function novoProduto (pCodigo, pDescricao, pQuantidade, pPreco, pValorTotal){
	this.codigo = pCodigo;
	this.descricao = pDescricao;
	this.quantidade = parseInt(pQuantidade);
	this.preco = parseFloat(pPreco);
	this.valorTotal = parseFloat(pValorTotal);
};

function add() {
	let produto = '';
	let quantidade = '';
	let preco = '';

	produto = document.getElementById('inputDescProduto').value;
	quantidade = document.getElementById('inputQuantProduto').value;
	preco = document.getElementById('inputPrecoProduto').value;

	if (produto == ''){
		document.getElementById('lista').innerHTML = 'Por gentileza informar a DESCRICÃO do Produto';
		document.getElementById('inputDescProduto').focus();
	} else if (quantidade == ''){
		document.getElementById('lista').innerHTML = 'Por gentileza informar QUANTIDADE do produto';
		document.getElementById('inputQuantProduto').focus();
	} else if (preco == ''){
		document.getElementById('lista').innerHTML = 'Por gentileza informar o VALOR do Produto';
		document.getElementById('inputValorUnitProduto').focus();
	} else {
		let	valorTotal = quantidade * preco;
		let id = cadastroProdutos.length + 1;
		cadastroProdutos.push(new novoProduto(id,produto,quantidade,preco,valorTotal));
		list ();
	}
}

function remove() {
	console.log('Removendo item!');
	cadastroProdutos.pop();
	list();
}

function limpar() {
	console.log('Limpar array.');
	cadastroProdutos = [];
	list();
}

function list() {
	console.log('Listando o Array');
	var listaHtml = '<table class="table table-striped"><thead><tr><th scope="col">#ID</th><th scope="col">Descrição</th><th scope="col">Preço</th><th scope="col">Qtde</th><th scope="col">Valor Total</th></tr></thead><tbody>';
	var total = 0;

	cadastroProdutos.forEach((pProduto) => {
		var celula = '';
		
		Object.keys(pProduto).forEach ((pCelula) => {
			celula += '<td>' + pProduto[pCelula] + '</td>';
		});

		total = 

		total = total + pProduto.valorTotal;
		
		listaHtml += '<tr>' + celula + '</tr>';
	});

	listaHtml += '</tbody> </table>';

	document.getElementById('lista').innerHTML = listaHtml;
	document.getElementById('total').innerHTML = 'Custo Total = R$ ' + total.toFixed(2);
	document.getElementById('inputDescProduto').value = ''
	document.getElementById('inputQuantProduto').value = ''
	document.getElementById('inputPrecoProduto').value = ''
}