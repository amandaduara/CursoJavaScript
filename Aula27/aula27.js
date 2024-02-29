// --- Exemplo 1 ---
function* cores(){
    yield 'Azul'
    yield 'Rosa'
    yield 'Roxo'
    yield 'Branco'
}

let cor = cores()
console.log("Exemplo 1")
console.log(cor.next().value) // chamando a próxima execução da função 
console.log(cor.next().value)
console.log(cor.next().value)
console.log(cor.next().value)
console.log(cor.next().value) // chama um yield que não existe

// --- Exemplo 2 ---
function* perguntas(){
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const pergunta = perguntas()
console.log("Exemplo 2")
console.log(pergunta.next().value)
console.log(pergunta.next('Amanda').value)
console.log(pergunta.next('Tênis').value)

// --- Exemplo 3 ---
function* contador10(){
    let i=0
    while(true){
        yield i++
    }
}
const contar10 = contador10()
console.log("Exemplo 3")
for(let i=0; i<10; i++){
    console.log(contar10.next().value)
}

// --- Exemplo 4 ---
function* contador5(){
    let i=0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}
const contar5 = contador5()
console.log("Exemplo 4")
for(c of contar5){
    console.log(c)
}
