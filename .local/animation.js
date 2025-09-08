document.addEventListener('DOMContentLoaded', function() {
    const rainText = document.getElementById('rain-text');
    if (!rainText) return;

    // Séparer le texte en mots et envelopper chaque mot dans un span
    const words = rainText.textContent.trim().split(/\s+/);
    rainText.innerHTML = words.map(word => `<span class="rain-word">${word}</span>`).join(' ');

    const wordElements = rainText.querySelectorAll('.rain-word');
    let currentIndex = 0;
    const totalWords = wordElements.length;

    function showWord(index) {
        wordElements.forEach((el, i) => {
            if (i === index) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    function startAnimation() {
        showWord(currentIndex);
        currentIndex = (currentIndex + 1) % totalWords;
    }

    startAnimation(); // afficher rapidement le premier mot
    setInterval(startAnimation, 2000); // changer mot toutes les 2 secondes
});
