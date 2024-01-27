//ele quebra um array e espalha; quebrar um conjunto de elemento e devoler elemento por elemento.

 // --- Exemplo 1 ---

let n1= [10,20,30]
let n2= [11,22,33, 44, 55]
// let n3 =[n1, n2] // qnd eu quiser copiar um array dentro do outro sem spread
let n3 =[...n1, ...n2] // com spread

console.log("Exemplo 1")
console.log("Tipo de n3: " + typeof(n3) + " - Valor de n3: " + n3)

// --- Exemplo 2 ---

const jogador1 = {nome:"Bruno", energia: 100, vidas: 3}
const jogador2 = {nome:"Amanda", energia: 100, vidas: 5}
const jogador3 = {...jogador1, ...jogador2}

console.log("Exemplo 2")
console.log(jogador3) // ele imprimiu os valores do ultimo jogador utilizado, pois os dados são os mesmos

// --- Exemplo 3 ---

const jogador11 = {nome:"Bruno", energia: 100, vidas: 3, magia: 150}
const jogador22 = {nome:"Amanda", energia: 100, vidas: 5, velocidade: 80}
const jogador33 = {...jogador11, ...jogador22}

console.log("Exemplo 3")
console.log(jogador33)

// --- Exemplo 4 ---

//sem spread
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

console.log("Exemplo 4 - sem spread")
console.log(soma (1, 5, 4))

// com spread
let valores = [1, 5, 4] 

console.log("Exemplo 4 - com spread")
console.log(soma (...valores)) // cado valor foi espalhado para cada parametro da funcão

// --- Exemplo 5 - UTILIZANDO O OPERADOR SPREAD NO HTML ---

const objs1 = document.getElementsByTagName("div") //retorna uma coleção de elementos html, é diferente de um array, em vista dos elementos desta coleção
const objs2 = [...document.getElementsByClassName("spread")]

// objs1.forEach(element => { // retorna erro pq forEach não é reconhecido como uma função do objs1 pois é um HTMLCollection e não um array
//     console.log(element)
// });

objs2.forEach(element => {
    element.innerHTML = "Exemplo 5" // consigo alterar pq eu espalhei os elemntos do HTMLCollection e tranformei em um array, em uma coleção de elementos diversos, podendo ate adicionar valores q não são exatamente elementos html.
});

console.log(objs1)
console.log(objs2)
