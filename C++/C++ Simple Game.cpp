#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int length;
    int knowledge;

    cout << "Enter your name: " << endl;
    getline(cin, name);

    length = name.length();

    if (length >= 6) knowledge = 45;
    else if (length == 5) knowledge = 0;
    else if (length == 4) knowledge = 100;
    else if (length == 3) knowledge = 65;
    else knowledge = 10;

    cout << "Counting letters in your name..." << endl;
    cout << "Your name has " << length << " letters." << endl;
    cout << "Your C++ knowledge is " << knowledge << "%" << endl;
    cout << "Keep learning, " << name << "!" << endl;

    return 0;
}
