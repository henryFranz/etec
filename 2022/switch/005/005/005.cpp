#include <iostream>
using namespace std;
//exercicio 5
int main()
{
	char genero;
	cout << "[F]feminino\n";
	cout << "[M]masculino\n";
	cout << "Qual seu genero: ";
	cin >> genero;
	switch (genero) {
		case'F':
		cout << "seu genero eh Feminino";
		break;
	case 'M':
		cout << "Seu genero eh Masculino";
		break;

	default:
		cout << "Nenhumas das opsao selecionado";
	}
	return (0);
}
