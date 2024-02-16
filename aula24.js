// Funções Anônimas: não possui um nome associadas ao seu escopo; não é instanciada; é criada somente no momento da execução;

// --- Exemplo 1 ---
const soma = function(n1, n2){
    return n1 + n2
}
console.log("O resultado da soma é: " + soma(10,5))

// --- Exemplo 2 -
const mult = function(...valores){
    let res = 1
    for(v of valores){
        res *= v
    }
    return res
}
console.log("O resultado da multiplicação é: " + mult(10,5))

// --- Exemplo 3 - função construtor anônima ---
const divisao = new Function("v1","v2","return v1/v2") 
console.log("O resultado da divisão é: " + divisao(10,5))