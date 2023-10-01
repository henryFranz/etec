
#include <iostream>
using namespace std;
int main()
{
	int mes;
	cout << "Digite o mes: ";
	cin >> mes;

	switch (mes) {
	case 1:
	cout << "O mes eh janeiro";
	break;
	case 2:
		cout << "O mes eh fevereiro";
		break;
	case 3:
		cout << "O mes eh maio";
		break;
	case 4:
		cout << "O mes eh marco";
		break;
	case 5:
		cout << "O mes eh abril";
		break;
	case 6:
		cout << "O mes eh junho";
		break;
	case 7:
		cout << "O mes eh julho";
		break;
	case 8:
		cout << "O mes eh agosto";
		break;
	case 9:
		cout << "O mes eh setembro";
		break;
	case 10:
		cout << "O mes eh outubro";
		break;
	case 11:
		cout << "O mes eh novembro";
		break;
	case 12:
		cout << "O mes eh janeiro";
		break;
	default:
		cout << "VOce não selecionou nenhuma das opcao";
	}
	return(0);
}

