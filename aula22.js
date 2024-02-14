//EXEMPLO 1
// function soma(p1){
//     console.log(p1)
// }

// soma("Amanda")
// soma(2022)
// soma(5.2)

//EXEMPLO 2
// function soma(n1,n2){
//     console.log(n1+n2)
// }

// soma(10,5)

//EXEMPLO 3
// function soma(n1=0,n2=0){ // valores padrões
//     console.log(n1+n2)
// }

// soma(10)

//EXEMPLO 4
// function soma(n1=0,n2=0){ 
//     return n1 + n2
// }

// console.log(soma(5,5))

//EXEMPLO 4.1
// function soma(n1=0,n2=0){ 
//     let res
//     res = n1 + n2
//     return res
// }

// let resultadoSoma = soma(5,5)
// console.log(resultadoSoma)

//EXEMPLO 5
// const valorPadrao = 0

// function soma(n1=valorPadrao, n2=valorPadrao){
//     let res
//     res = n1 + n2
//     return res
// }

// let resultadoSoma = soma(5)
// console.log(resultadoSoma)

//EXEMPLO 6
// const valorPadrao = 0

// function add(v){
//     return valor + v
// }

// let valor = 0
// console.log(valor)

// valor = add(10)
// console.log(valor)

// valor = add(5)
// console.log(valor)

//EXEMPLO 6.1
const valorPadrao = 0

function add(v){
    valor += v
}

let valor = 0
console.log(valor)

add(10)
console.log(valor)

add(5)
console.log(valor)

