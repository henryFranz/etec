
#include <iostream>
#include<stdio.h>
using namespace std;
int main()
{
	
	int op,decimal,residuo,resultado,n=0,digito[20];
	cout << "Opsao\n";
	cout << "[1]: decimal para hexadecimal\n";
	cout << "[2]: hexadecimal para decimal\n";
	cout << "[3]: decimal para octal\n";
	cout << "[4]: octal para decimal \n";
	cout << "[5]: Encerra\n";
	cout << "Escolha uma das opsoes: ";
	cin >> op;

	switch(op) {
	case 1:
		cout << "decimal para hexadecimal: ";
		cout << "Diigte o numero em decimal ";
		cin >> decimal;
		do
		{
			residuo = decimal % 16;
			resultado = decimal / 16;
			digito[n] = residuo;
			n++;
		} while (resultado > 15);
		digito[n] = resultado;
		cout << "o equivalente en base 16 numero eh:";
		for (int m = n; m >= 0; m--) {
			if (digito[m] == 10)
			{
				cout << "A";
			}
			if (digito[m] == 11)
			{
				cout << "B";
			}
			if (digito[m] == 12)
			{
				cout << "C";
			}
			if (digito[m] == 13)
			{
				cout << "D";
			}
			if (digito[m] == 14)
			{
				cout << "E";
			}
			if (digito[m] == 15)
			{
				cout << "F";
			}
			else {
				cout << digito[m];
			}
		}
		cout << endl;
				break;
	case 2:
		cout << "haxadecimal para decimal: ";
		break;
	case 3:
		cout << "numero em octal:  ";
		break;               
	case 4:
		cout << "ocatal para decimal: ";
		break;
	case 5:
		return(0);
		
	default:
		cout << "nenhumas das oposao selicionadas";
	}
}
