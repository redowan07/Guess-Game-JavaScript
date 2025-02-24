let lives = 10;
let round = 1;
let maxRange = 10;
let range=1;
let pd=1;
let targetNumber = Math.floor(Math.random() * (maxRange + 1));

document.getElementById("btn").addEventListener("click", () => {
    let userGuess = parseInt(document.getElementById("demo").value);

    if (isNaN(userGuess)) {
        document.getElementById("output").innerText = "Please enter a valid number!";
        return;
    }

    lives--;
 
    if (userGuess === targetNumber) {
        document.getElementById("output").innerText = `🎉 Congratulations! You guessed ${userGuess} correctly! Moving to Round ${round + 1}`;

        if (round < 5) {
            round++;
            for(let i=1;i<=round;i++)
                {
                    pd=pd*10;
                } 
                document.getElementById("roundRange").innerText=pd   
            maxRange *= 10; 
            targetNumber = Math.floor(Math.random() * (maxRange + 1)); 
            lives = 10; 
            document.getElementById("round").innerText = round;
            document.getElementById("lives").innerText = lives;
        } else {
            document.getElementById("output").innerText = `🏆 You won the entire game! 🎉`;
            return;
        }
    } else if (lives === 0) {
        window.alert("💀 Game Over! Restarting from Round 1...");
        round = 1;
        maxRange = 10;
        lives = 10;
        targetNumber = Math.floor(Math.random() * (maxRange + 1));
        document.getElementById("round").innerText = round;
        document.getElementById("lives").innerText = lives;
        document.getElementById("output").innerText = "New game started!";
    } else {
        let hint = userGuess > targetNumber ? `Number is lower than ${userGuess}` : `Number is higher than ${userGuess}`;
        document.getElementById("output").innerText = hint;
    }

    document.getElementById("lives").innerText = lives;
});
