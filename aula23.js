// parâmetros rest - posso criar uma função sem número determinado de valores.

// --- Exemplo 1 (utilizando for tradicional) ---
console.log("Exemplo 1")
function somaTradicional(...valores){
    let tam = valores.length
    let res = 0

    for(let i=0;i < tam; i++){
        res += valores[i]
    }
    return res
}
console.log(somaTradicional(10,5,2,8))


// --- Exemplo 1.1 (utilizando for of) ---
console.log("Exemplo 1.1")
function somaOf(...valores){
    let res = 0

    for(let v of valores){
        res += v
    }
    return res
}
console.log(somaOf(10,5,2,8,15))