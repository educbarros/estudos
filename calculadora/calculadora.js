function soma(){
    var vNumero1 = document.getElementById('numero1').value;
    var vNumero2 = document.getElementById('numero2').value;
    var vErro = document.getElementById('msg_erro');

    if (vNumero1 === '' || vNumero2 === ''){
        vErro.innerHTML = 'Erro: Os números deve ser informados';
        calc.numero1.focus();
        return false;
    } else {
        vErro.innerHTML = '';
        vNumero1 = parseInt(vNumero1);
        vNumero2 = parseInt(vNumero2);
        vErro = vNumero1 + vNumero2;
        console.log(vErro);
        document.getElementById('msg_erro').innerHTML = vErro;
    }
}

//Subtração
function subtracao(){
    var vNumero1 = document.getElementById('numero1').value;
    var vNumero2 = document.getElementById('numero2').value;
    var vErro = document.getElementById('msg_erro');

    if (vNumero1 === '' || vNumero2 === ''){
        vErro.innerHTML = 'Erro: Os números deve ser informados';
        calc.numero1.focus();
        return false;
    } else {
        vErro.innerHTML = '';
        vNumero1 = parseInt(vNumero1);
        vNumero2 = parseInt(vNumero2);
        vErro = vNumero1 - vNumero2;
        console.log(vErro);
        document.getElementById('msg_erro').innerHTML = vErro;
    }
}

//Multiplicação
function multiplicacao(){
    var vNumero1 = document.getElementById('numero1').value;
    var vNumero2 = document.getElementById('numero2').value;
    var vErro = document.getElementById('msg_erro');

    if (vNumero1 === '' || vNumero2 === ''){
        vErro.innerHTML = 'Erro: Os números deve ser informados';
        calc.numero1.focus();
        return false;
    } else {
        vErro.innerHTML = '';
        vNumero1 = parseInt(vNumero1);
        vNumero2 = parseInt(vNumero2);
        vErro = vNumero1 * vNumero2;
        console.log(vErro);
        document.getElementById('msg_erro').innerHTML = vErro;
    }
}

//Divisão
function divisao(){
    var vNumero1 = document.getElementById('numero1').value;
    var vNumero2 = document.getElementById('numero2').value;
    var vErro = document.getElementById('msg_erro');

    if (vNumero1 === '' || vNumero2 === ''){
        vErro.innerHTML = 'Erro: Os números deve ser informados';
        calc.numero1.focus();
        return false;
    } if (vNumero1 == 0 || vNumero2 == 0){
        vErro.innerHTML = 'Não é possivél efetuar divisão por ZERO';
        calc.numero1.focus();
        return false;
    }   else {
        vErro.innerHTML = '';
        vNumero1 = parseInt(vNumero1);
        vNumero2 = parseInt(vNumero2);
        vErro = vNumero1 / vNumero2;
        console.log(vErro);
        document.getElementById('msg_erro').innerHTML = vErro;
    }
}