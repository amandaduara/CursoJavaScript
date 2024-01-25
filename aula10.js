// forma de reduzir/simplificar uma operação com uma condicionional podendo utilizar os operadores relacionais/logicos para obter um resultado e mostrar o resultado alem de true e false

const num=10
let res=num%2

console.log("Exemplo 1")

if (res == 0){
    console.log("Par")
} else {
    console.log("Ímpar")
}

res=(!(num%2) ? "Verdadeiro" : "Falso")
// Teste lógico ? se verdadeiro : se falso
// 0 = false 1 = true
console.log(res)

let num1 = 10
let num2 = 5

console.log("Exemplo 2")

const maior = (num1 > num2 ? "Verdadeiro" : "Falso")
console.log(maior)


let st="A"

console.log("Exemplo 3")

const status = (st == "A" ? "Ativo" : "Inativo")
console.log(status)

