function Pessoa (pNome, pIdade, pFone, pSexo, pAtivo, pInteresse, pDisciplina, pRua, pNumero, pBairro){
    this.nome = pNome;
    this.idade = pIdade;
    this.fone = pFone;
    this.sexo = pSexo;
    this.ativo = pAtivo;
    this.interesse = pInteresse;
    this.disciplina = pDisciplina;
    this.endereco = {
        rua: pRua,
        numero: pNumero,
        bairro: pBairro,
    };
};

var ana = new Pessoa('Ana', 24, '(14)-00000-0000', 'Feminino', false, ['Musica','Ler', 'Esportes'],['Algoritmo','Logica Programação','Estrutura de Dados'],'Av. A', 30 ,'Centro');
console.log(ana);