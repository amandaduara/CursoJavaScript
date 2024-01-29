// --- IF-ELSE (Simples) ---

let energia = 100
let clima = "chovendo"

console.log("Exemplo 1 - Simples")

if (energia > 70 && clima == "sol"){
    console.log("Vou a praia")
} else {
    console.log("Vou ao cinema")
}

// --- IF-ELSE IF-ELSE (Múltiplas Condições) / IF-IF-ELSE (Alinhamento) ---

let num_ex2 = 40

console.log("Exemplo 2 - Múltiplas Condições / Alinhamento")

if (num_ex2 > 10){
    console.log("Numeral maior que 10")
    
    if (num_ex2 > 50){
        console.log("Numeral maior que 50")
    }
} else if (num_ex2 > 5){
    console.log("Numeral esta entre 6 e 10")
} else {
    console.log("Numeral menor ou igual a 5")
}



