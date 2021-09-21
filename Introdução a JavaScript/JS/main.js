
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!!</b>";
    //alert("Obrigado por clicar!!");
}

function redirecionar(){
    window.open("https://globallabs.academy/") // nova aba
    //window.location.href = "https://globallabs.academy/"; //mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>"
}

function trocar2(){
    document.getElementById("mousemove2").innerHTML = "<b>Obrigado por passar o mouse!</b>";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página Carregada");
}

function Change(elemento){
    console.log(elemento.value)
}

/* EXEMPLO 9
*

*
*/


/* EXEMPLO 8
*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;

    if(idade >= 18){
        var validar = true;
    }else{
        validar = false;
    };
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade))

alert(soma(5, 10));
*
*/

/* EXEMPLO 7
*
var dataHoje = new Date();
alert(dataHoje.getDate());
alert(dataHoje.getMonth() + 1); //sempre começa a contar do 0, então se deve somar 1
alert(dataHoje.getHours());
*
*/

/* EXEMPLO 6
*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*
*/

/* EXEMPLO 5
*
var count = 5;
while ( count <= 5){
    console.log(count);
    count++;
};
*
*/

/* EXEMPLO 5
*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*
*/

/* EXEMPLO 4
*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]; //lista de dicionários
console.log(frutas);
alert(frutas[1].nome);
* 
*/

/* EXEMPLO 3
*
var fruta = {nome: "maça", cor: "vermelha"}; //dicionário
console.log(fruta.nome);
alert(fruta.cor);
* 
*/

/* EXEMPLO  2
* 
var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); //adiciona item na última posição
lista.pop();  //remove item na última posição
console.log(lista);
console.log(lista.length()); //tamnho da lista
console.log(lista.reverse()); //mostra os elemntos na ordem inversa a da lista
console.log(lista.toString());
console.log(lista.join(" - "));
* 
*/

/*  EXEMPLO 1
*
var nome = "Rodrigo Moura";
var idade = 23;
var frase = "Japão é o melhor time do mundo";

//alert("Bem vindo" + nome);
//alert(nome + " tem " + idade + " anos")

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*
*/