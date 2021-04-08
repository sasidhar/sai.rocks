// Get references to elements
const btnSend = document.getElementById('btn-send');
const textMessage = document.getElementById('text-message');
const containerMessage = document.getElementById('message-container');

// Hanlders
const btnSendClicked = function() {
    const message = textMessage.value.trim();
    if (message === "") {
        return;
    }
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    containerMessage.appendChild(messageDiv);
    textMessage.value = generateSentence(20);
};

// Add Event Hanlders
btnSend.addEventListener('click', btnSendClicked)

// Utils
const getRandomNumber = function(start, end) {
    return start + Math.floor(Math.random()* (end - start));
}

const generateRandomWord = function() {
    const charsInWord = getRandomNumber(5, 10);
    const word = [];
    for (let i = 0; i < charsInWord; i++) {
        word.push(String.fromCharCode(getRandomNumber(97, 122)));
    }
    return word.join("");
}

const generateSentence = function(wordCount) {
    const sentence = [];
    for (let i = 0; i < wordCount; i++) {
        sentence.push(generateRandomWord());
    }
    return sentence.join(' ');
}

// On first load
textMessage.value = generateSentence(20);