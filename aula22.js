// --- Exemplo 1 ---
console.log("Exemplo 1")

function exibir(p1){
    console.log(p1)
}

exibir("Amanda")
exibir(2022)
exibir(5.2)

// --- Exemplo 2 ---
console.log("Exemplo 2")

function somaEx1(n1,n2){
    console.log(n1+n2)
}

somaEx1(10,5)

// --- Exemplo 3 ---
console.log("Exemplo 3")

function somaEx2(n1=0,n2=0){ // valores padrões
    console.log(n1+n2)
}

somaEx2(10)

// --- Exemplo 4 ---
console.log("Exemplo 4")

function somaEx3(n1=0,n2=0){ 
    return n1 + n2
}

console.log(somaEx3(5,5))

// --- Exemplo 4.1 (maneira mais didática) ---
console.log("Exemplo 4.1")

function somaEx4(n1=0,n2=0){ 
    let res
    res = n1 + n2
    return res
}

let totalEx4 = somaEx4(5,5)
console.log(totalEx4)

// --- Exemplo 5 ---
console.log("Exemplo 5")
const valorPadrao = 0

function somaEx5(n1=valorPadrao, n2=valorPadrao){
    let res
    res = n1 + n2
    return res
}

let totalEx5 = somaEx5(5)
console.log(totalEx5)

// --- Exemplo 6 ---
console.log("Exemplo 6")
const valorPadrao1 = 0

function add(v){
    return valor + v
}

let valor = 0
console.log(valor)

valor = add(10)
console.log(valor)

valor = add(5)
console.log(valor)

// --- Exemplo 6.1 (sem o uso do return) ---
console.log("Exemplo 6.1")
const valorPadrao2 = 0

function adicionar(n){
    numero += n
}

let numero = 0
console.log(numero)

adicionar(10)
console.log(numero)

adicionar(5)
console.log(numero)

