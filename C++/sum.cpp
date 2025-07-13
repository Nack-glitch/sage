#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    do {
        cout << "Enter a number (0 to stop): ";
        cin >> num;
        sum += num;
    } while (num != 0);

    cout << "Sum = " << sum;
    return 0;
}
