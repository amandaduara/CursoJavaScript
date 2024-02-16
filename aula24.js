// não possui um nome assiociadas ao seu escopo; não é instanciada; é riada somente no momento da execução

// Exemplo 1
// const f = function(n1, n2){
//     return n1 + n2
// }

// console.log(f(10,5))

// Exemplo 2
// const f = function(...valores){
//     let res = 0
//     for(v of valores){
//         res += v
//     }
//     return res
// }

// console.log(f(10,5))

// Exemplo 3 - função construtor anônima
const f = new Function("v1","v2","return v1+v2") 
console.log(f(10,5))