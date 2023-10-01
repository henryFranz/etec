
// 5) Crie um programa que recebe uma matriz de inteiros positivos e substitui seus elementos de valor ímpar por - 1 e os pares por + 1. 



var mat = []
for (var l = 0; l <= 2; l++) {
    mat[l] = []
    for (var c = 0; c <= 2; c++) {
        mat[l][c] = prompt("Digite o valor deste elemento:") || 0
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

const mat5 = document.getElementById("mat")
for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            mat[l][c] % 2 == 0 ? mat5.innerHTML += "<span> | 1 | </span><br>" : mat5.innerHTML += "<span> | -1 | </span><br>"
        } else {
            mat[l][c] % 2 == 0 ? mat5.innerHTML += "<span> | 1 | </span>" : mat5.innerHTML += "<span> | -1 | </span>" 
        }
    }
}
