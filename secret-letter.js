const letters = [
    "You light up my life in every way. Thank you for being my rock and my joy. I love you more with each passing day.",
    "Being with you is a dream come true. You make every day special and fill my heart with love.",
    "You are the most amazing person I have ever met. You make the world a better place. I love you more than words can say.",
    "You are my heart and soul, my forever and always. Thank you for being the love of my life.",
    "Your love is a treasure I hold dear. Thank you for filling my life with happiness and warmth.",
    "Every moment with you is a gift. You are my everything, and I am grateful for your love.",
    "Your love is my guiding light. Thank you for being my everything.",
    "Your love completes me. I am the luckiest person in the world to have you.",
    "You make my heart sing with joy. I cherish every moment with you.",
    "You make my life beautiful. Thank you for your endless love."
]
const secretLetterButton = document.querySelector('.secret-letter-button');
const secretLetter = document.querySelector('.secret-letter');

const letter = letters[Math.floor(Math.random() * letters.length)];
secretLetter.textContent = letter

secretLetterButton.addEventListener('click', function() {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    secretLetter.textContent = letter;
});