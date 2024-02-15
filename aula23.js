// --- Exemplo 1 (utilizando for tradicional) ---
function somaTradicional(...valores){
    let tam = valores.length
    let res = 0

    for(let i=0;i < tam; i++){
        res += valores[i]
    }
    return res
}
console.log("Exemplo 1")
console.log(somaTradicional(10,5,2,8))


// --- Exemplo 1.1 (utilizando for of) ---
function somaOf(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}
console.log("Exemplo 1.1")
console.log(somaOf(10,5,2,8,15))