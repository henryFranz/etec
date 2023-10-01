
// 2) Crie um programa que receba valores do usuário para preencher uma matriz, e em seguida, exiba a soma dos valores dela e a soma dos valores da primeira diagonal, ou seja, diagonal principal.




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
        if (c == 2 || c == 5 || c==7) {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span><br>"
           
        } else {
            matriz.innerHTML += "<span> | " + mat[l][c] + " | </span>"
        }
    }
}
 const p =document.getElementById("sum")
 let acum=0
 for (let lin = 0; lin < 3; lin++) {
     for (let col = 0; col < 3; col++) {
         lin === col ? acum += parseFloat(mat[lin][col]):undefined    
   }
    
 }
 p.innerText="a soma na diagonal é "+acum


