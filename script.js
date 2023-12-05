function desafio1(){
    let input = document.getElementById("input1").value;
    let bnt = document.getElementById("collapse01");
    let div = document.getElementById("resposta01");
    let divErro = document.getElementById("erro01");
    if(input === "guimaraes14vinicius@gmail.com"){
        div.style.display ="block";
        divErro.style.display = "none";
        bnt.click();
    }else{
        div.style.display = "none";
        divErro.style.display = "block"
    }
    
}

function desafio3(){
    let divPremio = document.getElementById("premo03");
    let divErro = document.getElementById("erro03");

    let dataInicio = new Date("2023-06-06");
    let dataFim = new Date("2023-06-14");
    let input = document.getElementById('desafio03').value;
    let dataInput = new Date(input);
    if(dataInput>= dataInicio && dataInput<= dataFim){
        divPremio.style.display = "block";
        divErro.style.display = "none";
    }else{
        divErro.style.display = "block";
        divPremio.style.display = "none";
    }
}

function desafio5(){
    let input = document.getElementById("desafio05").value;
    let div = document.getElementById("video");
    let divErro = document.getElementById("erro05");
    if(input.toUpperCase() === "NOSSAS DIFERENÇAS"){
        div.style.display ="block";
        divErro.style.display = "none";
    }else{
        div.style.display = "none";
        divErro.style.display = "block"
    }
    
}

function desafio6(){
    let input = document.getElementById("desafio06").value;
    let div = document.getElementById("premio6");
    let divErro = document.getElementById("erro6");
    if(input>7 && input<11){
        div.style.display ="block";
        divErro.style.display = "none";
    }else{
        div.style.display = "none";
        divErro.style.display = "block"
    }
    
}