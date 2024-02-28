// Exemplo 1
// function* cores(){
//     yield 'Azul'
//     yield 'Rosa'
//     yield 'Roxo'
//     yield 'Branco'
// }

// let itc = cores()
// console.log(itc.next().value) // chamando a próxima execução da função 
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// Exemplo 2
// function* perguntas(){
//     const nome = yield 'Qual é o seu nome?'
//     const esporte = yield 'Qual seu esporte favorito?'
//     return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Amanda').value)
// console.log(itp.next('Tênis').value)

// Exemplo 3
// function* contador(){
//     let i=0
//     while(true){
//         yield i++
//     }
// }
// const itc = contador()
// for(let i=0; i<10; i++){
//     console.log(itc.next().value)
// }

// Exemplo 4
function* contador(){
    let i=0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}
const itc = contador()
for(c of itc){
    console.log(c)
}
