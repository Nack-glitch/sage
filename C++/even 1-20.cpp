#include <iostream>
using namespace std;

int main() {
    int i = 1;
    while (i <= 20) {
        if (i % 2 == 0)
            cout << i << " ";
        i++;
    }
    return 0;
}
