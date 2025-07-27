#include <iostream>
#include <iomanip>  
using namespace std;

int main() {
    const int size = 10;
    cout << setw(4) << " "; 
    for (int col = 1; col <= size; col++) {
        cout << setw(4) << col;
    }
    cout << endl;
    cout << "    ";
    for (int col = 1; col <= size; col++) {
        cout << "----";
    }
    cout << endl;
    for (int row = 1; row <= size; row++) {
        cout << setw(2) << row << " |";  
        for (int col = 1; col <= size; col++) {
            cout << setw(4) << row * col;
        }
        cout << endl;
    }

    return 0;
}
