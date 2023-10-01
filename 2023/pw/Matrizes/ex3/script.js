
// 3) Faça um programa em Linguagem C que leia uma matriz 6 x 6, conte e escreva quantos valores maiores que 10 ela possui.


var mat = []
for (var l = 0; l <= 5; l++) {
    mat[l] = []
    for (var c = 0; c <= 5; c++) {
        mat[l][c] = prompt("Digite o valor deste elemento:") || 0
    }

}
const matriz = document.getElementById("matriz")
for (var l = 0; l <= 5; l++) {
    for (var c = 0; c <= 5; c++) {
        if (c % 5 == 0) {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span><br>"
        } else {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span>"
        }
    }
}
const m10=document.getElementById("m10")
m10.innerText = `numeros maiores que 10: ${mat.map(Element => Element.filter(ele => ele > 10)) }`