// scripts.js
const loadingContainer = document.querySelector('.loading-container');
const loader = loadingContainer.querySelector('.ldio-388788jhv8');

function startLoading() {
    loadingContainer.style.display = 'flex';
    loader.style.animationPlayState = 'running';
}

function stopLoading() {
    loader.style.animationPlayState = 'paused';
    setTimeout(() => {
        loadingContainer.style.display = 'none';
    }, 300);
}

// Appelez startLoading() pour démarrer l'animation et stopLoading() pour l'arrêter
