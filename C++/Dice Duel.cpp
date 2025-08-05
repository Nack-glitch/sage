#include <iostream>
#include <string>
#include <chrono>
using namespace std;
using namespace std::chrono;

int main() {
    char playAgain;

    do {
        const int totalRounds = 3;
        int score = 0;

        string sentences[totalRounds] = {
            "The quick brown fox jumps over the lazy dog",
            "Practice makes perfect",
            "C++ programming is fun"
        };

        cout << " Typing Speed and Accuracy Game \n\n";

        for (int round = 0; round < totalRounds; round++) {
            cout << "Round " << (round + 1) << ":\n";
            cout << "Type this sentence exactly:\n\"" << sentences[round] << "\"\n";

            string userInput;
            auto start = high_resolution_clock::now();

            getline(cin, userInput);

            auto end = high_resolution_clock::now();
            duration<double> timeTaken = end - start;

            if (userInput == sentences[round]) {
                cout << "Correct! Time taken: " << timeTaken.count() << " seconds.\n";
                score++;
            } else {
                cout << "Incorrect typing. Try to be more accurate next time.\n";
            }

            cout << "-----------------------\n";
        }

        cout << "\nGame Over! You scored " << score << " out of " << totalRounds << " points.\n";

        if (score == totalRounds) {
            cout << "Excellent! You're a typing master! \n";
        } else if (score > 0) {
            cout << "Good job! Keep practicing to improve.\n";
        } else {
            cout << "Don't give up! Practice makes perfect.\n";
        }

        cout << "\nPlay again? (y/n): ";
        cin >> playAgain;
        cin.ignore(); 

        cout << "\n";

    } while (playAgain == 'y' || playAgain == 'Y');

    cout << "Thanks for playing! \n";

    return 0;
}
