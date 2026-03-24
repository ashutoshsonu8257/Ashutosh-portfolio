// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Trigger on load

// Typing Effect for Hero Section
const phrases = ["Machine Learning Developer", "Python Programmer", "Event Head @ PentaOmnia", "Problem Solver"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenPhrases = 2000;

function typeWriter() {
    const typingSpan = document.querySelector('.typing-text');
    if (!typingSpan) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typingSpan.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingSpan.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let timeoutSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        timeoutSpeed = delayBetweenPhrases;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        timeoutSpeed = 500;
    }

    setTimeout(typeWriter, timeoutSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});
