// 7) Capture do teclado valores para preenchimento de uma matriz M 3x3.Após a captura imprima a matriz criada e encontre a quantidade de números pares, a quantidade de números ímpares.
var mat = []
for (var l = 0; l <= 2; l++) {
    mat[l] = []
    for (var c = 0; c <= 2; c++) {
        mat[l][c] = prompt("Digite o valor deste elemento:") ||0
    }
}
const matriz = document.getElementById("matriz")

for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span><br>"

        } else {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span>"
        }
    }
}


let acumPar=0
let acumImpar=0
mat.forEach(ele => ele.map(el => el % 2 == 0 ?acumPar++:undefined))
mat.forEach(ele => ele.map(el => el % 2 == 1 ? acumImpar++ : undefined))
const par = document.getElementById("pares")
par.innerHTML="<p>a quantidade de numeros pares é "+acumPar+"</p>"
const impar =document.getElementById("impares")
impar.innerHTML="<p>a quantidade de numeros impares é "+acumImpar+"</p>"
