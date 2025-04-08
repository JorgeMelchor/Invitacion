// Música de fondo global para poder controlarla desde fuera
const bodySong = new Audio('assets/BodySong.m4a');
bodySong.volume = 0.3;
bodySong.loop = true;

function openInvitation() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const mainContent = document.querySelector('.main-content');

    // Sonido de papel
    const papelSound = new Audio('assets/papelSound.wav');
    papelSound.volume = 0.8;

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

// ⏸ Pausar y ▶️ reanudar música cuando cambie el estado de visibilidad de la página
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        bodySong.pause();
    } else {
        bodySong.play().catch(e => console.error("Error al reanudar BodySong:", e));
    }
});


//-------------------EL PEDO DE LA MUSICA  ES L ODE ARRIBA  ------



document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Obtener los valores ingresados
    let nombre = document.getElementById("name").value;
    let personas = document.getElementById("guests").value;
    let campahotel = document.getElementById("campahotel").value; // Obtener la opción seleccionada

    // Número de WhatsApp (pon el tuyo o el de los novios)
    let numeroWhatsApp = "+5214421708465";  // Asegúrate de que tenga el código de país

    // Mensaje prellenado con la opción de campamento o hotel
    let mensaje = `Hola, soy ${nombre} y confirmo mi asistencia con ${personas} personas. ` +
                  `He elegido la opción: ${campahotel}. ¡Nos vemos en la boda!`;

    // Crear el enlace de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.open(url, "_blank");
});


// Bloquea el scroll al cargar la página
document.body.style.overflow = "hidden";

document.querySelector(".open-invitation-btn").addEventListener("click", function () {
    document.querySelector(".titulobody").style.display = "block";

    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.body.style.overflow = "auto"; // Desbloquea el scroll
    }, 100);
});

setTimeout(() => {
    document.querySelector(".Iconscroll").style.animation = "fadeOut 1s forwards";
}, 8000); // Se oculta después de 5 segundos (5000ms)






document.addEventListener("DOMContentLoaded", function() {
    startCountdown();
});


//++++++++++++++CODIGO PARA EL CRONOMETRO DE LA BODA +++++++++++++
function startCountdown() {
    const weddingDate = new Date("2025-05-03T13:00:00").getTime(); // Cambia la fecha a la de tu boda

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "¡El gran día ha llegado! 🎉";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Actualiza cada segundo
}



//-------------ubicacion misa y salon ------------------------
document.addEventListener("DOMContentLoaded", function () {
    const locations = {
        templo: "https://g.co/kgs/NnzTBR9", // Templo del Señor de la Misericordia
        fiesta: "https://maps.app.goo.gl/vC7tWgm8cwHsJP6VA" // Hacienda privada
    };

    Object.keys(locations).forEach(locationId => {
        const button = document.querySelector(`.submit-btn[data-location="${locationId}"]`);
        if (button) {
            button.addEventListener("click", function () {
                window.open(locations[locationId], "_blank");
            });
        }
    });
});
//-------------ubicacion misa y salon ------------------------


//----------------LINK PARA MESA DE REGALOS ----------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mesaregalo").addEventListener("click", function () {
        // Cambia la URL al enlace de la mesa de regalos
        const mesaDeRegalosUrl = "https://www.amazon.com.mx/wedding/registry/YZP553JUG01N";
        window.open(mesaDeRegalosUrl, "_blank"); // Abre en una nueva pestaña
    });
});

//----------------LINK PARA MESA DE REGALOS ----------------------


//ESTE PEDO DE AQUI ES PARA LOS LINKS DE LOS HOTELES. 
// Mapeo de botones con sus URLs de ubicación
const hotelLinks = {
    hotel1: "https://maps.app.goo.gl/Wkexivg5vQH7wZpSA", // Casa Luis Long
    hotel2: "https://maps.app.goo.gl/AxVQYjf3QbYR5mEK6", // Puerta del Jardín
    hotel3: "https://maps.app.goo.gl/FmmE351jsipWhukHA", // Villa del Carmen
    hotel4: "https://maps.app.goo.gl/4Yc18iPA1H4pjLPe7"  // Quinta Jalpa
};

// Asigna un event listener a cada botón de hotel
Object.keys(hotelLinks).forEach(hotelId => {
    const button = document.getElementById(hotelId);
    if (button) {
        button.addEventListener("click", () => {
            window.open(hotelLinks[hotelId], "_blank");
        });
    }
});

//ESTE PEDO DE AQUI ES PARA LOS LINKS DE LOS HOTELES.  


//SE VIENE LO PERROTE LAS ANIMACIONES DE QUE TODO VAYA APARECIENDO CON FORME VAS SCROLLEANDO. 
