//Quando se usa promtpt ele aparece na página html, quando se usa console.log ele aparece somente no console js
//Estudo de If/Else
var i = prompt("Escreva um número")
if (i > 10){
    prompt("Este número é maior que 10!")
}
else {
    prompt("Este número é menor que 10!")
}

//Estudo de While
var j = prompt("Escreva um número")
while (j<10) {
    j++
    document.write(j, "\n")
}

//Estudo de For
var k = prompt("Multiplicando seu número por 1, 2 e 3")
for (num = 1; num <= 3; num++) {
    prompt(num*k)
}

//Estudo de Switch/Case
var digit = prompt ("Escreva um número entre 1 e 4")

switch(digit) {
    case '1':
        prompt("Este é um número primo")
        break
    case '2':
        prompt("Este é um número primo e par")
        break
    case '3':
        prompt("Este é um número primo")
        break
    case '4':
        prompt("Este é um número par e não é primo")
        break
    default:
        prompt("Este não é um número entre 1 e 4")
}

//Estudo de Funções
function escreva(){
    console.log("Hello!")
}
escreva()

