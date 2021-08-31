function calcular(){
    var vPeso = document.getElementById('peso').value;
    var vAltura = document.getElementById('altura').value;
    var vResult;
  

    if (vPeso == '' || vAltura == ''){
        document.getElementById('msg-erro').innerHTML = 'Por gentileza informa os dados para calculo';
        return false;
    
    } else {
        vPeso = parseInt(vPeso);
        vAltura = parseFloat(vAltura).toFixed(2);
        vResult = vPeso / (vAltura * vAltura);
        document.getElementById('msg-erro').innerHTML = vResult.toFixed(2);
    }
    
    if(vResult < 17 ){
        document.getElementById('img').innerHTML =
        `<img src="img/mMagro.png" class="text-center" alt="Muito Magro">`;        
    } else if (vResult >= 17 && vResult < 18.5){
        document.getElementById('img').innerHTML =
        `<img src="img/magro.png" class="text-center" alt="Magro">`;        
    } else if (vResult >= 18.5 && vResult < 25){
        document.getElementById('img').innerHTML =
        `<img src="img/normal.png" class="text-center" alt="Peso Normal">`;        
    } else if (vResult >= 25 && vResult < 30){
        document.getElementById('img').innerHTML =
        `<img src="img/acima.png" class="text-center" alt="Magro">`;        
    }  else if (vResult >= 30 && vResult < 35){
        document.getElementById('img').innerHTML =
        `<img src="img/obes1.png" class="text-center" alt="Magro">`;        
    } else if (vResult >= 35 && vResult < 40){
        document.getElementById('img').innerHTML =
        `<img src="img/obes2.png" class="text-center" alt="Magro">`;        
    } else if (vResult >= 40){
        document.getElementById('img').innerHTML =
        `<img src="img/obes3.png" class="text-center" alt="Magro">`;        
    }

}

function limpar(){
    location.reload();
}