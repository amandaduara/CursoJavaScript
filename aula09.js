let a=10
let b=5
let n=-10 // operador de inversão ou negação qnd usado o sinal de -
let x=-n
let n1=10
let n2=20

console.log("Exemplo 1")
a++ // qnd colocado na direita do valor, estamos incrementando
console.log(a)

console.log("")

console.log("Exemplo 2")
console.log("Valor inicial: " + b)
console.log("Valor: " + b + " - Com o pré-incremento: " + (++b))  // primeiro incrementa e dps usa o valor
console.log("Valor: " + b + " - Com o pós-incremento: " + (b++)) // primeiro usa o valor e dps incrementa
console.log("Valor: " + b + " - Com o pré-decremento: " + (--b))
console.log("Valor: " + b + " - Com o pós-decremento: " + (b--))
console.log("Valor final: " + b)

console.log("")

console.log("Exemplo 3")
console.log(x)

console.log("")

console.log("Exemplo 4")
console.log(n1 + "" + "" + n2) // qnd usado o sinal de + com sring ele vira sinal de concatenação e considera tds os valores como sring