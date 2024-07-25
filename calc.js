let somaevent = document.getElementById("btnsoma");
somaevent.addEventListener("click", soma);

function soma(){

    let valor1 = document.getElementById("soma1").value;
    let valor2 = document.getElementById("soma2").value;

    let result = parseFloat(valor1) + parseFloat(valor2);
    document.getElementById("soma").innerHTML = result;

}

let subevent = document.getElementById("btnsub");
subevent.addEventListener("click", subtracao);

function subtracao(){

    let valor1 = document.getElementById("sub1").value;
    let valor2 = document.getElementById("sub2").value;

    let result = parseFloat(valor1) - parseFloat(valor2);
    document.getElementById("sub").innerHTML = result;

}

let divevent = document.getElementById("btndiv");
divevent.addEventListener("click", divisao);

function divisao(){

    let valor1 = document.getElementById("div1").value;
    let valor2 = document.getElementById("div2").value;

    let result = parseFloat(valor1) / parseFloat(valor2);
    document.getElementById("div").innerHTML = result;

}

let multevent = document.getElementById("btnmult");
multevent.addEventListener("click", multiplicacao);

function multiplicacao(){

    let valor1 = document.getElementById("mult1").value;
    let valor2 = document.getElementById("mult2").value;

    let result = parseFloat(valor1) * parseFloat(valor2);
    document.getElementById("mult").innerHTML = result;

}

let fatevent = document.getElementById("btnfat");
fatevent.addEventListener("click", fatorial);

function fatorial(){

    let numero = document.getElementById("fat1").value;
    let nume = 1;

    for (let i = numero; i > 1; i--) {

        nume = nume * i;

    }

    document.getElementById("fat").innerHTML = nume;

}

let imcevent = document.getElementById("btnimc");
imcevent.addEventListener("click", imc);

function imc(){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let result =  parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    document.getElementById("imcP").innerHTML = result;

}

let concatenarevent= document.getElementById("juntar");
concatenarevent.addEventListener("click", concatenar);

function concatenar(){

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    let juntar2;

    juntar2 = nome + " " + sobrenome;
    
    document.getElementById("mostnome").innerHTML = juntar2;

}

let logevent1= document.getElementById("btnlog");
logevent1.addEventListener("click", login);

function login(){

    if(document.getElementById("email").value == "adm" && document.getElementById("senha").value == "adm"){
       
        document.getElementById("mostlog").innerHTML="acesso permitido";

    }else{

        document.getElementById("mostlog").innerHTML="acesso negado";

    }
}

let imgevent = document.getElementById("img");
imgevent.addEventListener("click", imagem);

function imagem() {
    let imgmeme = document.getElementById("imgmeme");

    let estiloDisplay = window.getComputedStyle(imgmeme).display;

    if (estiloDisplay === "block" || estiloDisplay === "") {

        imgmeme.style.display = "none";

    }else{

        imgmeme.style.display = "block";
    
    }
}