//Criar uma Função em JS
//Usar a palavra Rervada FUNCITION
//possuir paramentros (ou não)

function validar(){
    //name= nome - caixa de texto(input)
    //name= "formmSignUp" - nome do Form
    //usando a notação de Pontos
    var vNome = formSignUp.nome.value;
    var vEmail = formSignUp.email.value;
    var vSenha = formSignUp.senha.value;
    var vConfirm_senha = formSignUp.confirm_senha.value;
    var vErro = document.getElementById('msg_erro');
    
    //Validar Nome
    if (vNome === ''){
        vErro.innerHTML = 'Preencha o campo NOME';
        formSignUp.nome.focus();
        return false;
    } else {
        vErro.innerHTML = '';
    }

    if (vNome.length < 3){
        vErro.innerHTML = "Nome deve ter mais que 3 Letras";
        formSignUp.nome.focus();
        return false;
    }
    
    //Validar Email
    if(vEmail === ''){
        vErro.innerHTML = 'Prencha o campo E-mail';
        formSignUp.email.focus();
        return false;
    } else {
        vErro.innerHTML = '';
    }
    
    //validar Senha
    if (vSenha === ''){
        vErro.innerHTML = 'Preencha o campo senha';
        formSignUp.senha.focus();
        return false;
    } else {
        vErro.innerHTML = '';
    }

    //Validar Conf_Senha
    if(vConfirm_senha === ''){
        vErro.innerHTML = 'Preencha o campo Confirmar Senha';
        formSignUp.confirm_senha.focus();
        return false;
    } else {
        vErro.innerHTML = '';
    }

    if (vSenha !== vConfirm_senha){
        vErro.innerHTML = "Senhas e Confirmação da senha divergentes";
        formSignUp.senha.focus();
        return false;   
    }

}