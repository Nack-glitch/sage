#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;

    if (age < 0) {
        cout << "Invalid age entered!" << endl;
    } else if (age >= 0 && age <= 12) {
        cout << "You are a child" << endl;
    } else if (age >= 13 && age <= 19) {
        cout << "You are a teen" << endl;
    } else {
        cout << "You are an adult" << endl;
    }

    return 0;
}
