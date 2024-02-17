let num = [10, 20, 30]

// --- Percorrendo os índices ---

console.log("Percorrendo os índices do array com FOR tradicional:")
for(let i=0; i<num.length; i++){
    console.log(i)
}

console.log("Percorrendo os índices do array com FOR IN:")
for(let n in num){
    console.log(n)
}

// --- Percorrendo os elementos ---

console.log("Percorrendo os elementos do array com FOR tradicional:")
for(let i=0; i<num.length; i++){
    console.log(num[i])
}

console.log("Percorrendo os elementos do array com FOR IN:")
for(let n in num){
    console.log(num[n])
}

console.log("Percorrendo os elementos do array com FOR OF:")
for (let n of num){
    console.log(n)
}

// --- Percorrendo os elementos do HTML ---
const objs = document.getElementsByTagName("div")

for (let o of objs){
    console.log(o)
}

for (let o in objs){
    console.log(o)
}