// 1) Crie um programa que preencha todos os valores de uma matriz 2x2, e em seguida exiba todos os valores e a soma de todos os valores.

var mat = []
for (var l = 0; l <= 1; l++) {
    mat[l] = []
    for (var c = 0; c <= 1; c++) {
        mat[l][c] = prompt("Digite o valor deste elemento:") || 0
    }
}
 const matriz=document.getElementById("matriz")
 
    
for (var l = 0; l <= 1; l++) {
    for (var c = 0; c <= 1; c++) {
        if (c%2==0) {
            matriz.innerHTML += "<span> | " + mat[l][c] +" | </span>"
        } else {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span><br>"
        }
    }
}
