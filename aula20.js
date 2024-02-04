console.log("Exemplo 1")
function soma2_10(){    // () declaração da função; conjunto de parâmetros
    let n1 = 2
    let n2 = 10
    let soma = n1+n2
    console.log(soma)
}

for(let i=0;i<3;i++){
    soma2_10()
}

console.log("Exemplo 2 - DOM")
function mudarTexto(){   
    let d1 = document.getElementById("exFuncaoDom")
    d1.innerHTML = "CFB Cursos"
}
