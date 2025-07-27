#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    int userChoice, computerChoice;

    srand(time(0));

    cout << "Welcome to Rock, Paper, Scissors!" << endl;
    cout << "1 = Rock" << endl;
    cout << "2 = Paper" << endl;
    cout << "3 = Scissors" << endl;
    cout << "Pick one (1-3): ";
    cin >> userChoice;

    computerChoice = rand() % 3 + 1;

    cout << "You chose: " << userChoice << endl;
    cout << "Computer chose: " << computerChoice << endl;

    if (userChoice == computerChoice) {
        cout << "Draw!" << endl;
    } else if (
        (userChoice == 1 && computerChoice == 3) ||
        (userChoice == 2 && computerChoice == 1) ||
        (userChoice == 3 && computerChoice == 2)
    ) {
        cout << "You win!" << endl;
    } else {
        cout << "You lose!" << endl;
    }

    return 0;
}
