// Get references to elements
const btnSend = document.getElementById('btn-send');
const textMessage = document.getElementById('text-message');
const containerMessage = document.getElementById('message-container');

// App Utils
const generateNewMessage = function() {
    textMessage.value = generateSentence(20);
}

const addNewMessage = function(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    containerMessage.appendChild(messageDiv);
    containerMessage.scrollTop = containerMessage.scrollHeight;
};

// Hanlders
const btnSendClicked = function() {
    const message = textMessage.value.trim();
    if (message === "") {
        return;
    }
    addNewMessage(message);
    generateNewMessage();
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

const idGenerator = function*() {
    let id = 0;
    while(true) {
        yield ++id;
    }
}
const idGeneratorHolder = idGenerator();

const generateSentence = function(wordCount) {
    const sentence = [];
    for (let i = 0; i < wordCount; i++) {
        sentence.push(generateRandomWord());
    }    
    return `${idGeneratorHolder.next().value}. ${sentence.join(' ')}`;
}    

// On first load
generateNewMessage();
