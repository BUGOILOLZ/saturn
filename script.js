const riddles = [
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
    { question: "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?", answer: "all were married" },
    { question: "What has keys but can't open locks?", answer: "piano" },
];

let currentRiddleIndex = 0;

function loadRiddle() {
    const riddleElement = document.getElementById('riddle');
    riddleElement.textContent = riddles[currentRiddleIndex].question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentRiddleIndex++;
        if (currentRiddleIndex < riddles.length) {
            loadRiddle();
        } else {
            document.getElementById('riddleSection').classList.add('hidden');
            document.getElementById('finalSection').classList.remove('hidden');
        }
    } else {
        document.getElementById('feedback').textContent = "Incorrect, try again!";
    }
}

function submitMessage() {
    const secretMessage = document.getElementById('secretMessage').value;
    alert(`Your secret message: "${secretMessage}" has been submitted!`);
    // Reset the game or implement further logic here
}

// Load the first riddle when the page loads
window.onload = loadRiddle;
