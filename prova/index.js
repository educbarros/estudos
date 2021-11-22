
var registroAluno = [];

// Função Adicionar
function add() {

	var idAluno = document.getElementById('inputId').value;
	var nome = document.getElementById('inputNome').value;
	var n1 = document.getElementById('inputN1').value;
	var n2 = document.getElementById('inputN2').value;
	var n3 = document.getElementById('inputN3').value;
	var media;
	var situacao;
	var verficaInput = [idAluno,nome,n1,n2,n3];
	var input;
	var dadosAluno;

	n1 = parseFloat(n1);
	n2 = parseFloat(n2);
	n3 = parseFloat(n3);
	
	//valida Notas
	if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10){
		media = 11;
	} else{
		media = (n1 + n2 + n3)/3;

		//valida Situação
		if(media >=5){
			situacao = 'APROVADO';
		}else{
			situacao = 'EXAME';
		}
	}

	//Verificar inputs
	for (var i = 0; i < verficaInput.length; i++){
		if (verficaInput[i] == ''){
			input = 0;
		} else {
			input = 1;
		}
	}

	if (input == 0 || media > 10) { 
		document.getElementById('lista').innerHTML = '<h3>Nenhum campo não pode estar vazio e as médias são de 0 a 10<h3>';
	} else {
		dadosAluno = [idAluno,nome,n1,n2,n3,media.toFixed(2),situacao];
		registroAluno.push(dadosAluno);
		list();
	}
}

// Função remover
function remove() {
	registroAluno.pop();
	list()
}

//Função limpar
function limpar() {
	console.log('Limpar array.');
	registroAluno = [];
	list();
}

//Função listar
function list() {
	var listaHtml = '<table class="table table-striped"><thead><tr><th scope="col">#ID</th><th scope="col">Aluno</th><th scope="col">Nota 1</th><th scope="col">Nota 2</th><th scope="col">Nota 3</th><th scope="col">Média</th><th scope="col">Situação</th></tr></thead><tbody>';

	for (var linha = 0; linha < registroAluno.length; linha++) {
		var celula = '';
		for(var coluna = 0; coluna < registroAluno[linha].length; coluna++) {
			celula += '<td>' + registroAluno[linha][coluna] + '</td>';
		}
		listaHtml += '<tr>' +  celula + '</tr>';
	}
	listaHtml += '</table>';

	document.getElementById('lista').innerHTML = listaHtml;
	document.getElementById('inputId').value = ''
	document.getElementById('inputNome').value = ''
	document.getElementById('inputN1').value = ''
	document.getElementById('inputN2').value = ''
	document.getElementById('inputN3').value = ''
}