let n1=10
console.log("Deslocamento à esquerda de 10: " + (n1 << 1))
console.log("Deslocamento à direita de 10: " + (n1 >> 1))








// let n1=10 //00001010
let n2=12 //00001100

console.log("Operando com AND: " + (n1 & n2)) //8 = 00001000
// AND (&) Retorna 1 para cada bit que é 1 em ambos os operandos.

console.log("Operando com OR: " + (n1 | n2)) //14 = 00001110
// OR (|) Retorna 1 para cada bit que é 1 em pelo menos um dos operandos.

console.log("Operando com XOR: " + (n1 ^ n2)) //6 = 00000110
// XOR (^) Retorna 1 para cada bit que é 1 em um dos operandos, mas não em ambos.

console.log("Deslocamento à esquerda de 10: " + (n1 << 1)) //20 = 00010100
// Deslocamento à Esquerda (<<) Desloca os bits para a esquerda, preenchendo com zeros à direita.

console.log("Deslocamento à direita de 10: " + (n1 >> 1)) //5 = 00000101
// Deslocamento à direita (>>) Desloca os bits para a direita, preenchendo com zeros à esquerda.

/*Com isso é possivel dobrar um valor ou pega-lo pela metade*/
