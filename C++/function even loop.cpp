#include <iostream>
using namespace std;

int power(int base, int exponent) {
    int result = 1;
    for (int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int b, e;
    cout << "Enter base and exponent: ";
    cin >> b >> e;
    cout << "Result = " << power(b, e);
    return 0;
}
