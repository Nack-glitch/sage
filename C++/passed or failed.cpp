#include <iostream>
using namespace std;

int main() {
    int mark;
    cout << "Enter mark (0–100): ";
    cin >> mark;

    if (mark >= 50)
        cout << "Pass";
    else
        cout << "Fail";

    return 0;
}
