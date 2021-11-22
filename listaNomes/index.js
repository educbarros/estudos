
var listaNomes = [];

function add() {

	var novoNome = document.getElementById('inputNome').value;
	listaNomes.push(novoNome);
	list();
}

function remove() {
	console.log('Removendo item!');
	listaNomes.pop();
	list();
}

function limpar() {
	console.log('Limpar array.');
	listaNomes = [];
	list();
}

function list() {
    console.log('Listando os itens do array!');
	var listaHtml = '<h3>Lista de Nomes</h3> <ul>';
	for (var i = 0; i < listaNomes.length; i++) {
		listaHtml += '<li>' + listaNomes[i] + '</li>';
	}
	listaHtml += '</ul>';
	console.log(listaHtml);
	document.getElementById('lista').innerHTML = listaHtml;
}