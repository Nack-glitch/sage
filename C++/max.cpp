#include <iostream>
using namespace std;

int main() {
    int arr[5], maxNum;
    cout << "Enter 5 numbers: ";
    for (int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    maxNum = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > maxNum)
            maxNum = arr[i];
    }
    cout << "Maximum = " << maxNum;
    return 0;
}
