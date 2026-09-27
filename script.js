document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passcode-form');
    const input = document.getElementById('passcode-input');
    const errorMessage = document.getElementById('error-message');
    const cipherContainer = document.getElementById('cipher-container');
    const messageContainer = document.getElementById('message-container');

    // Create background stars for the night sky effect
    createStars();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const guess = input.value.trim().toLowerCase();

        // Target passcode
        if (guess === 'my blue eyes') {
            unlockMessage();
        } else {
            showError();
        }
    });

    function showError() {
        errorMessage.classList.remove('hidden');
        input.style.borderColor = 'var(--error)';

        // Shake animation
        form.style.animation = 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both';

        setTimeout(() => {
            form.style.animation = 'none';
        }, 500);

        setTimeout(() => {
            errorMessage.classList.add('hidden');
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }, 3000);
    }

    function unlockMessage() {
        // Fade out cipher
        cipherContainer.style.opacity = '0';
        cipherContainer.style.transform = 'scale(0.95)';

        setTimeout(() => {
            cipherContainer.classList.add('hidden');
            cipherContainer.style.display = 'none';

            // Fade in message
            messageContainer.classList.remove('hidden');

            // Transition background to a slightly lighter romantic night sky
            document.body.style.background = 'radial-gradient(circle at center, #1f2a4a 0%, #050510 100%)';
        }, 1000); // Wait for fade out
    }

    function createStars() {
        const numStars = 60;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;

            // Random animation duration between 3s and 8s
            const duration = Math.random() * 5 + 3;
            const delay = Math.random() * 5;

            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;

            document.body.appendChild(star);
        }
    }
});

// Add shake animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
`;
document.head.appendChild(style);
