var a = new Array();
var b = new Array();
var c = new Array();

//Insere os inputs do retângulo A no array a
function insereA(x1A,y1A,x2A,y2A){
    a.push(x1A);
    a.push(y1A);
    a.push(x2A);
    a.push(y2A);

    a = a.map(Number);
    console.log(a);
}
//Insere os inputs do retângulo B no array b
function insereB(x1B,y1B,x2B,y2B){
    b.push(x1B);
    b.push(y1B);
    b.push(x2B);
    b.push(y2B);

    b = b.map(Number);
    console.log(b);
}
//Insere os inputs do retângulo C no array c
function insereC(x1C,y1C,x2C,y2C){
    c.push(x1C);
    c.push(y1C);
    c.push(x2C);
    c.push(y2C);

    c = c.map(Number);
    console.log(c);
}

//Função responsável por centralizar as lógicas de intersecção de cada retângulo
function interseccao(){
    interseccaoAB();
    interseccaoAC();
    interseccaoBC();
}

// Lógica de intersecção entre retângulo A e B
function interseccaoAB(){

    if((b[0] >= a[0] && b[0] <= a[2]) && (b[1] >= a[1] && b[1] <= a[3])){
        document.getElementById('retorno1').innerText = "Intersecção (A,B) => Verdadeiro";
    }
    else if((b[2] >= a[0] && b[2] <= a[2]) && (b[1] >= a[1] && b[1] <= a[3])){
        document.getElementById('retorno1').innerText = "Intersecção (A,B) => Verdadeiro";
    }
    else if((b[0] >= a[0] && b[0] <= a[2]) && (b[3] >= a[1] && b[3] <= a[3])){
        document.getElementById('retorno1').innerText = "Intersecção (A,B) => Verdadeiro";
    }
    else if((b[2] >= a[0] && b[2] <= a[2]) && (b[3] >= a[1] && b[3] <= a[3])){
        document.getElementById('retorno1').innerText = "Intersecção (A,B) => Verdadeiro";
    }
    else{
        document.getElementById('retorno1').innerText = "Intersecção (A,B) => Falso";
    }
}
// Lógica de intersecção entre retângulo A e C
function interseccaoAC(){

    if((c[0] >= a[0] && c[0] <= a[2]) && (c[1] >= a[1] && c[1] <= a[3])){
        document.getElementById('retorno2').innerText = "Intersecção (A,C) => Verdadeiro";
    }
    else if((c[2] >= a[0] && c[2] <= a[2]) && (c[1] >= a[1] && c[1] <= a[3])){
        document.getElementById('retorno2').innerText = "Intersecção (A,C) => Verdadeiro";
    }
    else if((c[0] >= a[0] && c[0] <= a[2]) && (c[3] >= a[1] && c[3] <= a[3])){
        document.getElementById('retorno2').innerText = "Intersecção (A,C) => Verdadeiro";
    }
    else if((c[2] >= a[0] && c[2] <= a[2]) && (c[3] >= a[1] && c[3] <= a[3])){
        document.getElementById('retorno2').innerText = "Intersecção (A,C) => Verdadeiro";
    }
    else{
        document.getElementById('retorno2').innerText = "Intersecção (A,C) => Falso";
    }
}
// Lógica de intersecção entre retângulo B e C
function interseccaoBC(){

    if((c[0] >= b[0] && c[0] <= b[2]) && (c[1] >= b[1] && c[1] <= b[3])){
        document.getElementById('retorno3').innerText = "Intersecção (B,C) => Verdadeiro";
    }
    else if((c[2] >= b[0] && c[2] <= b[2]) && (c[1] >= b[1] && c[1] <= b[3])){
        document.getElementById('retorno3').innerText = "Intersecção (B,C) => Verdadeiro";
    }
    else if((c[0] >= b[0] && c[0] <= b[2]) && (c[3] >= b[1] && c[3] <= b[3])){
        document.getElementById('retorno3').innerText = "Intersecção (B,C) => Verdadeiro";
    }
    else if((c[2] >= b[0] && c[2] <= b[2]) && (c[3] >= b[1] && c[3] <= b[3])){
        document.getElementById('retorno3').innerText = "Intersecção (B,C) => Verdadeiro";
    }
    else{
        document.getElementById('retorno3').innerText = "Intersecção (B,C) => Falso";
    }
}