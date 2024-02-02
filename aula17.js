// --- Exemplo 1 ---

let n = 0
console.log("Exemplo 1")

while(n<3){
    console.log(n)
    n++
}

// --- Exemplo 2 ---

// 5! = 5*4*3*2*1 = 120
let num = 5
let fatorial = 1
console.log("Exemplo 2")

while(num>=1){
    fatorial *= num
    num--
}
console.log("O fatorial de 5 é: " + fatorial)