// --- Funções Não Aninhadas --
const soma=(...valores)=>{
    return somar(valores)
}

const somar=val=>{
    let res=0
    for(v of val)
        res +=v
    return res
    
}
console.log("O resultado da soma é: " + soma(10,5,15))

// --- Funções Aninhadas ---
const mult=(...valores)=>{
    const multiplicar=val=>{
        let res=1
        for(v of val)
            res *=v
        return res
        
    }
    return multiplicar(valores)
}
console.log("O resultado da multiplicação é: " + mult(10,5,15))