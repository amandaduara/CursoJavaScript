const soma = (v1,v2)=>{ // escopo mais complexo (com return) = uso de chaves
    let res = v1 + v2
    return res
}
console.log(soma(10,5)) // escopo mais simples não é necessário o uso de chaves

const nome = n=>{return n}
console.log(nome("Amanda"))

const add = n=>n+20
console.log(add(10))