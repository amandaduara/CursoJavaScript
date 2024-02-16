const soma = (v1,v2)=>{ // escopo mais complexo (com return) = uso de chaves
    let res = v1 + v2
    return res
}
console.log(soma(10,5)) // escopo mais simples = sem chaves

const nome = n=>{return n}
console.log(nome("Amanda"))

const add = n=>n+10
console.log(add(10))