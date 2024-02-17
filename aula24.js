const funcaoAnonima = new Function("v1","v2","return v1/v2") 
console.log("O resultado da divisão é: " + funcaoAnonima(10,5))
