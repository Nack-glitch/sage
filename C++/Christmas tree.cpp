#include <iostream>
using namespace std;

int main() {
    int rows = 6;

    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= rows - i; j++) cout << " ";
        for (int k = 1; k <= 2 * i - 1; k++) cout << "*";
        cout << endl;
    }

    for (int i = 0; i < 2; i++) {
        for (int j = 1; j < rows; j++) cout << " ";
        cout << "*" << endl;
    }

    return 0;
}
