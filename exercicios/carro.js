var carro = {
    //ATRIBUTOS
    nome: 'Roadster',
    marca: 'Tesla',
    anoFabricacao: 2021,
    cores: 'metalica: Azul',
    transmissao: {
        tipo: 'Automática',
        velocidade: 0,       
    },
    preco: 1000000.00,
    prontoEntrega: false,

    //METODOS
    compra () {
        console.log('Veículo: ' + this.nome + 'Marca: ' + this.marca + 'Ano: ' + this.anoFabricacao + 'Transmissão: ' + this.transmissao + 'Preço: ' + this.preco + 'Pronto entrega:' + this.prontoEntrega);
    },
};