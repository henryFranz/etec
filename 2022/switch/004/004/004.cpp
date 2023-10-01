
#include <iostream>
//exercicio 4
using namespace std;
int main()
{
	double valor;
	int op;
	cout << "Digite o valor ";
	cin >> valor;
	cout << "[1]A vista\n";
	cout << "[2]A prazo\n";
	cout << "Escolhe uma opsao: ";
	cin >> op;
	switch(op) {
	case 1 :
		cout << "O preso eh: " << valor * 0.9;
		break;
	case 2 :
		cout << "O preso eh: " << valor ;
		break;
		default:
			cout << "Voce nao escolheu nenhuma opcao valida";
	}
}
