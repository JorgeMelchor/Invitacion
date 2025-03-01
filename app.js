function openInvitation() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const mainContent = document.querySelector('.main-content');

    // Sonido de papel
    const papelSound = new Audio('assets/papelSound.wav');
    papelSound.volume = 0.8;

    // Música de fondo
    const bodySong = new Audio('assets/BodySong.m4a');
    bodySong.volume = 0.3;
    bodySong.loop = true; // Hace que la música se repita

    // Reproducir el sonido de papel
    papelSound.play().catch(error => console.error('Error al reproducir papelSound:', error));

    // Cuando termine el sonido de papel, iniciar la música suavemente
    papelSound.onended = () => {
        bodySong.play().catch(error => console.error('Error al reproducir BodySong:', error));
    };

    // Animación de salida
    welcomeScreen.style.animation = 'fadeOut 1s ease forwards';

    // Mostrar contenido principal después de la animación
    setTimeout(() => {
        welcomeScreen.remove();
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }, 800);
}
