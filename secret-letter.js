const letters = [
  "My patience was worth it because i found someone perfect and it will forever be one of my greatest achievements.",
  "You saved me from myself, gave me help when i was helpless, and loved me when i felt unlovable.",
  "You taught me to love myself, showing me how to be selfless.",
  "Your love became my cure, it became my therapy, because of you I'm happier this way.",
  "I would love to meet you all over again for the first time.",
  "Sometimes when my luck is running out, i look at you and remember the blesings that fell into my life.",
  "When i stare into your eyes, i see every memory and the future where our love blooms endlessly.",
  "Don't ever change, you're perfect in every way, your laugh, your voice, your smile, your beauty, your soul, your hear, there is nothing i could change about you.",
  "We didn't meet by chance, it was fate, it was always meant to be. Our souls met in a different life, and reunited in this one.",
  "I could never love anyone the way i love you and that's the story of my life for now and forever.",
  "Thank you for healing everything that has been hurting for so long. You are my miracle.",
  "Thank you for being patient with me and loving me in the way that i understand, and for compromising where it's needed, and for being compatible in the finest of details.",
  "Thank you, my love.",
];
const secretLetterButton = document.querySelector(".secret-letter-button");
const secretLetter = document.querySelector(".secret-letter");

let letterIndex = 0;
secretLetter.textContent = letters[letterIndex];

secretLetterButton.addEventListener("click", function () {
  letterIndex = (letterIndex + 1) % letters.length;
  const letter = letters[letterIndex];
  secretLetter.textContent = letter;
});
