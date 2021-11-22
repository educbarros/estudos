
var registroNome = [];

function add() {

	var nome = document.getElementById('inputNome').value;
	var fone = document.getElementById('inputFone').value;
	var email = document.getElementById('inputEmail').value;
	var endereco = document.getElementById('inputEndereco').value;

	var cliente = [nome, fone, email, endereco];
	registroNome.push(cliente);
	console.log(registroNome);
	list();
}

function remove() {
	console.log('Removendo item!');
	registroNome.pop();
	list();
}

function limpar() {
	console.log('Limpar array.');
	registroNome = [];
	list();
}

function list() {
    console.log('Listando os itens do array!');
	var listaHtml = '<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Nome</th><th scope="col">Fone</th><th scope="col">Email</th><th scope="col">Endereço</th></tr></thead><tbody>';

	for (var lin = 0; lin < registroNome.length; lin++) {
		var ilin = lin + 1;
		listaHtml += '<tr>' + '<td>' + il + '</td>' + '<td>' + registroNome[i][0] + '</td>' + '<td>' + registroNome[i][1] + '</td>' +  '<td>' + registroNome[i][2] + '</td>' + '<td>' + registroNome[i][3] + '</td>' + '</tr>';	
	}

	listaHtml += '</table>';
	console.log(listaHtml);
	document.getElementById('lista').innerHTML = listaHtml;
	document.getElementById('inputNome').value = ''
	document.getElementById('inputFone').value = ''
	document.getElementById('inputEmail').value = ''
	document.getElementById('inputEndereco').value = ''
}