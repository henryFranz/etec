
// 4) Faça um programa em Linguagem C que lê uma matriz de 3 x 3 elementos usando um comando for, multiplica cada elemento por 5 e imprime o resultado.



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
const matriz5 = document.getElementById("matriz*5")
for (var l = 0; l <= 2; l++) {
    for (var c = 0; c <= 2; c++) {
        if (c == 2 || c == 5 || c == 7) {
            matriz5.innerHTML += "<span> | " + parseFloat(mat[l][c])*5 + " | </span><br>"

        } else {
            matriz5.innerHTML += "<span> | " + parseFloat(mat[l][c]) * 5 + " | </span>"
        }
    }
}