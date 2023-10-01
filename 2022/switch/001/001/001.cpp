#include <iostream>
using namespace std;
int main()
//exercicio 1
{
	int op;
	double n1;
	cout << "Digite o primeiro valor:";
	cin >> n1;
	cout << "Opsao\n";
	cout << "[1]Comun\n";
	cout << "[2]Funcionario\n";
	cout << "[3]Vip\n";
	cout << "Escolha a opcao:";
	cin >> op;
	switch (op) {
	case 1:
		cout << "preso eh:" <<n1;
		break;
	case 2:
		cout << "preso eh:" << n1*0.9;
		break;
	case 3:
		cout << "preso eh:" << n1*0.95;
		break;

	default:
		cout << "Voce nao escolheu nenhuma opcao valida";
	}	return(0);

}