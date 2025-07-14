1. Function to Add Two Numbers
int add(int a, int b) {
    return a + b;
}
?? 2. Function to Find Maximum
int getMax(int x, int y) {
    return (x > y) ? x : y;
}
?? 3. Function to Check Even or Odd
bool isEven(int num) {
    return num % 2 == 0;
}
?? 4. Function to Find Factorial
int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++)
        result *= i;
    return result;
}
?? 5. Function to Print a Message
void sayHello() {
    cout << "Hello, Naol!" << endl;
}
?? 6. Function to Swap Two Numbers
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
