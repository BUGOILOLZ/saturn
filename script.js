const riddles = [
    { question: "Who is our adviser?", answer: ["ma'am aisah", "aisah"] },
    { question: "What is the name of our president?", answer: ["desiree"] },
    { question: "Who created this? ( clue:a guy)", answer: ["james"] },
    { question: "Name a boy in our class (first name only).", answer: ["james", "keefe", "drake", "ethan", "wilverson", "evo", "khomeini", "demrey", "vincent", "marcus", "christopher"] },
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
    const correctAnswers = riddles[currentRiddleIndex].answer.map(ans => ans.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        currentRiddleIndex++;
        if (currentRiddleIndex < riddles.length) {
            loadRiddle();
        } else {
            document.getElementById('riddleSection').classList.add('hidden');
            document.getElementById('finalSection').classList.remove('hidden');
            document.getElementById('secretMessage').textContent = "lol ga kapoy kapoy raka HAHAHAH sayon ra bitaw ni sunod kay lisud na";
        }
    } else {
        document.getElementById('feedback').textContent = "Incorrect, try again!";
    }
}

function resetGame() {
    currentRiddleIndex = 0;
    document.getElementById('riddleSection').classList.remove('hidden');
    document.getElementById('finalSection').classList.add('hidden');
    loadRiddle();
}

// Load the first riddle when the page loads
window.onload = loadRiddle;
