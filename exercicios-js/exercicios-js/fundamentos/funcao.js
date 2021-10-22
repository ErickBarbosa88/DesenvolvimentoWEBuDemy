//console.log(typeof Object)

////class produto {}
//console.log(typeof produto)

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// soma os dois primeiros

//funcao ocm retorno
function soma(a, b = 1) {
    return a + b    
}

console.log(soma(2,3))
console.log(soma(2))  
console.log(soma())  