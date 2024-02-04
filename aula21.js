function parImpar(){
    const n1 = 210
    const n2 = 2
    let res = n1*n2

    if(!(res%2) == 0){
        return "Par"
    } else {
        return "Ímpar"
    }  
}

let res = parImpar()
console.log(res)

// return - a função realiza td o preocessamento e retorna um valor para qm chamou qnd acabar