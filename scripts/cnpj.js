//Função responsável por fazer válidação básica do CNPJ
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == ''){
        document.getElementById('retorno').innerText = "CNPJ Inválido!";
    }
     
    else if (cnpj.length != 14){
        document.getElementById('retorno').innerText = "CNPJ Inválido!";
    }
    
    else if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
            document.getElementById('retorno').innerText = "CNPJ Inválido!";
        }     

    else{
        document.getElementById('retorno').innerText = "CNPJ válido!";
    }

}