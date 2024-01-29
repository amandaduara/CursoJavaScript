// cada repetição do loop é chamado de iteração

// Loops Definidos - FOR (Quando sei a quantidade de iterações que é preciso fzr)| Loops Indefinidos - While, Do While (Quando não sei a quantidade de iterações que é preciso fzr)

// For (inicialização ; condição ; contador)

console.log("Início do Programa")


for(let i=0; i<10; i++){
    console.log("CFB Cursos - valor do i: " + i)
}

console.log("Fim do Programa")

// ------------

console.log("Início do Programa")


for(let i=0; i<12; i++){
    if(i%2 == 0){
        console.log(i + " é Par")
    } else {
        console.log(i + " é Impar")
    }
}

console.log("Fim do Programa")