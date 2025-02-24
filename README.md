This is a simple guessing game with specified number range, if you can match the guessed number of the computer ,you are able to go to next level, you have 10 scope to do wrong guess, here's the logic:
Initial Setup:
The game starts with Round 1, 10 lives, and a number range of 0-10.
A random target number is generated within the range.
Guess Submission:
When the player enters a number and clicks submit:
If correct:
They go to the next round (up to 5 rounds).
The number range expands by 10x each round.
Lives reset to 10.
If incorrect:
Lives decrease by 1.
A hint is given (higher/lower).
If lives reach 0, the game restarts from Round 1.
Win Condition:
If the player clears all 5 rounds, they win the game!
