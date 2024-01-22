/*&& -> and e
|| -> or ou
! -> not não*/

"use strict"
let n1=10, n2=5, n3=15, n4=2

if(!(n1>n2)||(n3>n4)){
    console.log("AND (||) - falso ou verdadeiro é: verdadeiro")
} else {
    console.log("AND (||) - falso ou verdadeiro é: falso")
}

if((n1>n2)||(n3>n4)){
    console.log("AND (||) - verdadeiro ou verdadeiro é: verdadeiro")
} else {
    console.log("AND (||) - verdadeiro ou verdadeiro é: falso")
}

if(!(n1>n2)&&(n3>n4)){
    console.log("OR (&&) - falso e verdadeiro é: falso")
} else {
    console.log("OR (&&) - falso e verdadeiro é: verdadeiro")
}

if((n1>n2)&&(n3>n4)){
    console.log("OR (&&) - verdadeiro e verdadeiro é: verdadeiro")
} else {
    console.log("OR (&&) - verdadeiro e verdadeiro é: falso")
}
