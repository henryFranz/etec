#include <iostream>
using namespace std;
int main()
//exercicioo03
{
	int nacidas, habitantes,op,obitos;
	cout << "[1]Taxa de natalidade\n";
	cout << "[2]Taxa de mortalidade\n";
	cout << "Digite a opsao: ";
	cin >> op;
	switch (op) {
	case 1:
		cout << "Quamtas criansas nasceram: ";
		cin >> nacidas;
		cout << "Quantos habitantes :";
		cin >> habitantes;
		cout << "A taxa de natalidade eh: " << (nacidas*1000) / habitantes;
		break;
	case 2:
		cout << "numero de obitos: ";
		cin >> obitos;
		cout << "Quantos habitantes :";
		cin >> habitantes;
		cout << "A taxa de mortalidade eh: " << (obitos*1000) / habitantes;
		break;
		default:
			cout << "Voce nao escolheu nenhuma opcao valida";
	}
}
