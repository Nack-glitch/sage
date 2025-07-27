1. Add Two Numbers
#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "Sum = " << add(x, y) << endl;
    return 0;
}
2. Find Maximum of Two Numbers
#include <iostream>
using namespace std;

int getMax(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "Maximum = " << getMax(x, y) << endl;
    return 0;
}
3. Check if a Number is Even or Odd
#include <iostream>
using namespace std;

bool isEven(int num) {
    return num % 2 == 0;
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    if (isEven(number))
        cout << "Even" << endl;
    else
        cout << "Odd" << endl;
    return 0;
}
4. Factorial of a Number
#include <iostream>
using namespace std;

int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++)
        result *= i;
    return result;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "Factorial = " << factorial(num) << endl;
    return 0;
}
5. Simple Greeting Function
#include <iostream>
using namespace std;

void sayHello() {
    cout << "Hello, Naol! Welcome to C++ programming." << endl;
}

int main() {
    sayHello();
    return 0;
}
6. Swap Two Numbers (Using Reference)
#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    swap(x, y);
    cout << "After swapping: x = " << x << ", y = " << y << endl;
    return 0;
}