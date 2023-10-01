//  8) Crie um programa que faça a soma de duas matrizes 3x3.
var mat = []
for (var l = 0; l <= 2; l++) {
    mat[l] = []
    for (var c = 0; c <= 2; c++) {
        mat[l][c] = parseFloat(prompt("Digite o valor deste elemento:")) || 0
    }
}
const matriz1 = document.getElementById("matriz1")

for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            matriz1.innerHTML += "<span> | " + mat[l][c] + " | </span><br>"

        } else {
            matriz1.innerHTML += "<span> | " + mat[l][c] + " | </span>"
        }
    }
}
var mat2 = []
for (var l = 0; l <= 2; l++) {
    mat2[l] = []
    for (var c = 0; c <= 2; c++) {
        mat2[l][c] = parseFloat(prompt("Digite o valor deste elemento:")) || 0
    }
}
const matriz2 = document.getElementById("matriz2")

for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            matriz2.innerHTML += "<span> | " + mat2[l][c] + " | </span><br>"

        } else {
            matriz2.innerHTML += "<span> | " + mat2[l][c] + " | </span>"
        }
    }
}
const matriz3 = document.getElementById("matriz3")

for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            let m1 = mat[l][c]
            let m2 = mat2[l][c] 
            matriz3.innerHTML += "<span> | " + (parseFloat(m1) + parseFloat(m2))+ " | </span><br>"

        } else {
            matriz3.innerHTML += "<span> | " + (parseFloat(mat[l][c]) + parseFloat(mat2[l][c])) + " | </span>"
        }
    }
}