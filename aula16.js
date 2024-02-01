let num = [10, 20, 30]

// --- Percorrendo os índices ---

console.log("FOR tradicional:")
for(let i=0; i<num.length; i++){
    console.log(i)
}

console.log("FOR IN:")
for(n in num){
    console.log(n)
}

// --- Percorrendo os elementos ---

// console.log("Percorrendo os elementos do array com FOR tradicional:")
// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// console.log("Percorrendo os elementos do array com FOR IN:")
// for(n in num){
//     console.log(num[n])
// }

// console.log("Percorrendo os elementos do array com FOR OF:")
// for (n of num){
//     console.log(n)
// }

// --- Percorrendo os elementos do HTML ---
// const objs = document.getElementsByTagName("div")

// console.log("Utilizando FOR OF")
// for (o of objs){
//     console.log(o)
// }

// console.log("Utilizando FOR IN")
// for (o in objs){
//     console.log(o)
// }
