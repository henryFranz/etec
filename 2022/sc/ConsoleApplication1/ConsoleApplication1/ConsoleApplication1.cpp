/*1. Uma loja fornece 10 % de desconto para funcionários e 5 % de desconto para clientes vips.
Faça um programa que calcule o valor total a ser pago por uma pessoa.O programa deverá ler o
valor total da compra efetuada e um código que identifique se o comprador é um cliente comum(1)
, funcionário(2) ou vip(3).*/
#include <iostream>
using namespace std;
int main()
{
	int op;
	double n1;
	cout << "Digite valor da compra: ";
	cin >> n1;
	cout << "O que voce eh?:\n";
	cout << "[1]Cliente comum\n";
	cout << "[2]Cliente vip\n";
	cout << "[3]Funcionario\n";
	cout << "Escolha a opcao:";
	cin >> op;
	switch (op) {
	case 1:
		cout << "Valor eh: " << n1 ;
		break;
	case 2:
		cout << "Valor eh: " << n1*0.95 ;
		break;
	case 3:
		cout << "Valor eh: " << n1 *0.9;
		break;
	
	default:
		cout << "Voce nao escolheu nenhuma opcao valida";
	}	return(0);

}