/*&& -> and e
|| -> or ou
! -> not não*/

"use strict"
let n1=10, n2=5, n3=15, n4=2

// Exemplos com AND (||)

if(!(n2>n1)&&(n3>n4)){
    console.log("AND (&&) - false e true = false")
} else {
    console.log("AND (&&) - true")
}

if((n1>n2)&&(n3>n4)){
    console.log("AND (&&) - true e true = true")
} else {
    console.log("AND (&&) - false")
}

if((n4>n3)&&(n1<n2)){
    console.log("AND (&&) - true")
} else {
    console.log("AND (&&) - false e false = false")
}

// Exemplos com OR (&&)

if(!(n1>n2)||(n3>n4)){
    console.log("OR (||) - false ou true = true")
} else {
    console.log("OR (||) - false")
}

if((n1>n2)||(n3>n4)){
    console.log("OR (||) - true ou true = true")
} else {
    console.log("OR (||) - false")
}

if((n4>n3)||(n1<n2)){
    console.log("OR (||) - true")
} else {
    console.log("OR (||) - false ou false = false")
}
