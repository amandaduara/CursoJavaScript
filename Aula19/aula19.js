let num1 = 0
let num2 = 15
let pares = 0

console.log("Exemplo 1 - Break")
while(num1<num2){
    console.log("CFB Cursos - " + num1)
    if(num1>3){
        break
    }
    num1++
}

console.log("Exemplo 2 - Continue")
for(let i=num1; i<num2; i++){
    if(i%2!=0){
        continue
    }
    pares++
}
console.log("Quantidade de pares: " + pares)