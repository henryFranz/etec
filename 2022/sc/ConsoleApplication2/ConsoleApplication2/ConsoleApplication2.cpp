//2. Escreva um programa utilizando o comando switch que imprima um mês de acordo com o número digitado pelo usuário.
#include <iostream>
using namespace std;
int main()
{
	int op;
	cout << "qual o mes que vocer esta numericamente?: \n";
	cin >> op;
	switch (op) {
	case 1:
		cout << "seu mes eh janeiro";
		break;
	case 2:
		cout << "seu mes eh fevereiro";
		break;
	case 3:
		cout << "seu mes eh marco";
		break;
	case 4:
		cout << "seu mes eh abril";
		break;
	case 5:
		cout << "seu mes eh maio";
		break;
	case 6:
		cout << "seu mes eh junho";
		break;
	case 7:
		cout << "seu mes eh julho";
		break;
	case 8:
		cout << "seu mes eh agosto";
		break;
	case 9:
		cout << "seu mes eh setembro";
		break;
	case 10:
		cout << "seu mes eh outubro";
		break;
	case 11:
		cout << "seu mes eh novembro";
		break;
	case 12:
		cout << "seu mes eh dezembro";
		break;
	default:
		cout << "voce nao escolheu uma opcao valida";


	}
	return(0);
}

