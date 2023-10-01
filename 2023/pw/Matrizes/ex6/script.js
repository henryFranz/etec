// 6) Some os elementos pares da matriz e escreva o resultado na tela.




var mat = []
for (var l = 0; l <= 2; l++) {
    mat[l] = []
    for (var c = 0; c <= 2; c++) {
        mat[l][c] = prompt("Digite o valor deste elemento:")
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
const sum = document.getElementById("sumPar")

let acum =0
mat.map(ele => ele.reduce((acumulador, valorAtual) => {
    return valorAtual % 2 == 0 ? acum += parseFloat(valorAtual):undefined
}, 0))
sum.innerText="a soma dos numeros pares é "+acum