/*
entrada:cliente(funcionario,vip,cliente) ,valor(0.9, 0.95 ,1)
procedimento: calcular preço(valor=valor*0.9 || 0.95 || valor)
saida: exibir preço
 */
/*
legibilidade
comentario 
identação 
*/
  
const comprador = prompt
(`escolha uma opção
[1]funcionario
[2]vip
[3]cliente`)
let/*var*/ valor = 0

switch (comprador) {
    case '1':
        valor = parseFloat(prompt('Qual valor?'))
        alert('voce é funcionario paga : ' + (valor * 0.9))

        break;

    case '2':
        valor = parseFloat(prompt('Qual valor?'))
        alert('voce é vip paga : ' + (valor * 0.95))

        break;
    case '3':
        valor = parseFloat(prompt('Qual valor?'))
        alert('voce é cliente paga : ' + valor)

        break;

    default:
        alert('voce é bucefalo')
}