const soma = function(n1, n2){
    return n1 + n2
}
console.log("O resultado da soma é: " + soma(10,5))

const mult = function(...valores){
    let res = 1
    for(v of valores){
        res *= v
    }
    return res
}
console.log("O resultado da multiplicação é: " + mult(10,5))
