function* cores(){
    yield 'Azul'
    yield 'Rosa'
    yield 'Roxo'
    yield 'Branco'
}

let itc = cores()
console.log(itc.next().value) // chamando a próxima execução da função 
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)