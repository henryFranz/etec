// let arr=[]
// for (let i = 0; i < 5; i++) {
//   arr.push(parseFloat(prompt('Digite um numero')))
// }
// console.log(arr)


// for (let i = 0; i < arr.length; i++) {
//   document.write('na posição '+i+ ' fica o numero '+arr[i]+'<br>')
// }
/* 1. Entre com 10 números e armazene em um vetor.

Ao final o programa deverá mostrar:

- quantos negativos foram digitados;

- quantos positivos foram digitados;

- quantos pares e ímpares. */
let arr=[]
for (let i = 0; i < 10; i++) {
    arr.push(parseFloat(prompt('digite um numero')))
}
for (let i = 0; i < 10; i++) {
    if (arr[i]<0) {
        document.write('os números negativos são '+arr[i] +'<br>')
        
    } else {
        document.write('os números positivos são '+arr[i] +'<br>')
        
    }    
}
for (let i = 0; i < 10; i++) {
    if (arr[i]%2==0) {
        document.write('os numeros pares são: '+arr[i]+'<br>')
    } else {
        document.write('os numeros impares são: '+arr[i]+'<br>')
        
    }
}