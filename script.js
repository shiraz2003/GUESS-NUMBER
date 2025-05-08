let secretNumber = 99;
let attempts = 0;
let submitButton = document.getElementById("submit");

const restartAnimation = (element, className) => {
    element.classList.remove(className); // Remove the class
    void element.offsetWidth; // Trigger reflow to reset the animation
    element.classList.add(className); // Re-add the class
};

const a = () => {
    console.log("Button clicked!");
    const userGuess = document.getElementById("guess").value;
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    console.log(userGuess);

    if (userGuess === "") {
        feedback.textContent = "Please enter a number!";
        feedback.style.color = "red";
        return;
    }

    const guess = parseInt(userGuess);

    if (guess === secretNumber) {
        attempts++;
        attemptsDisplay.textContent = `You have made ${attempts} attempts`;
        feedback.textContent = "Congratulations! You guessed the number!";
        feedback.style.color = "green";
        restartAnimation(feedback, "correct");
    } else {
        attempts++;
        attemptsDisplay.textContent = `You have made ${attempts} attempts`;
        feedback.textContent = `Wrong guess! Try again!`;
        feedback.style.color = "red";
        restartAnimation(feedback, "wrong");
    }
};

submitButton.addEventListener("click", a);