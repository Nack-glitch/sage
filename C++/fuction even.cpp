#include <iostream>
using namespace std;

bool isEven(int num) {
    return num % 2 == 0;
}

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    if (isEven(n))
        cout << "Even";
    else
        cout << "Odd";
    return 0;
}
