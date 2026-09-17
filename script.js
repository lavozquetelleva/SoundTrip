// ==============================
// CAMBIAR ENTRE PANTALLAS
// ==============================

function mostrarPantalla(id) {

    // Ocultamos todas las pantallas
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    // Mostramos la pantalla que queremos
    document.getElementById(id).classList.add("activa");
}


// ==============================
// BOTÓN COMENZAR
// ==============================

const botonComenzar = document.getElementById("botonComenzar");

botonComenzar.addEventListener("click", function() {

    mostrarPantalla("anuncio");

    iniciarAnuncio();

});


// ==============================
// ANUNCIO
// ==============================

function iniciarAnuncio() {

    let segundos = 5;

    const contador = document.getElementById("contador");
    const botonSaltar = document.getElementById("botonSaltar");

    contador.textContent = "Podrás continuar en:";
    botonSaltar.textContent = "5 segundos";

    const temporizador = setInterval(function() {

        segundos--;

       if (segundos > 0) {

    contador.textContent =
        "Podrás continuar en:";

    botonSaltar.textContent = 
        segundos + (segundos === 1 ? " segundo" : " segundos");

}
         else {

            clearInterval(temporizador);

            contador.textContent = "Ya puedes continuar";

            botonSaltar.disabled = false;

            botonSaltar.textContent = "Continuar";

        }

    }, 1000);


    // Cuando el usuario presione continuar
    botonSaltar.onclick = function() {

        mostrarPantalla("idiomas");

    };

}

// ==============================
// SELECCIÓN DE IDIOMA
// ==============================

const botonesIdioma = document.querySelectorAll(".boton-idioma");

const idiomaSeleccionado = document.getElementById("idiomaSeleccionado");

const audioGuia = document.getElementById("audioGuia");

const fuenteAudio = document.getElementById("fuenteAudio");

// =========================================
// TEXTOS DE LA GUÍA POR IDIOMA
// =========================================

const textosGuia = {

    es: {
        tituloGuia: "AUTOGUÍA TURÍSTICA",
        nombreDestino: "La Puerta del Diablo",
        idioma: "🇪🇸 Español",

        tituloSobre: "Sobre este lugar",
        textoSobre:
            "La Puerta del Diablo es uno de los destinos turísticos más reconocidos de El Salvador. Sus formaciones rocosas y sus vistas panorámicas hacen de este lugar una parada especial para quienes desean conocer los paisajes del país.",

        tituloHistoria: "Historia",
        textoHistoria:
            "En esta sección conocerás la historia de La Puerta del Diablo y algunos de los acontecimientos que forman parte de la identidad de este lugar.",

        tituloLeyendas: "Leyendas",
        textoLeyendas:
            "La Puerta del Diablo también está relacionada con diferentes relatos y leyendas populares que han sido transmitidos a través del tiempo.",

        tituloDatos: "Datos interesantes",
        dato1: "Vistas panorámicas del paisaje",
        dato2: "Destino turístico de El Salvador",
        dato3: "Ideal para disfrutar del entorno natural",

    etiquetaAudio: "AUDIO DE LA EXPERIENCIA",
    tituloAudio: "Escucha la guía"
    },


    en: {
        tituloGuia: "TOURIST AUDIO GUIDE",
        nombreDestino: "La Puerta del Diablo",
        idioma: "🇬🇧 English",

        tituloSobre: "About this place",
        textoSobre:
            "Devil's Door is one of El Salvador's most recognized tourist destinations. Its rock formations and panoramic views make this a special place for visitors who want to discover the country's landscapes.",

        tituloHistoria: "History",
        textoHistoria:
            "In this section, you will learn about the history of Devil's Door and some of the events that have become part of the identity of this remarkable place.",

        tituloLeyendas: "Legends",
        textoLeyendas:
            "Devil's Door is also associated with different stories and popular legends that have been passed down through generations.",

        tituloDatos: "Interesting facts",
        dato1: "Panoramic views of the landscape",
        dato2: "Tourist destination in El Salvador",
        dato3: "Ideal for enjoying the natural surroundings",
 
    etiquetaAudio: "EXPERIENCE AUDIO",
    tituloAudio: "Listen to the guide"
    },


    fr: {
        tituloGuia: "AUDIO-GUIDE TOURISTIQUE",
        nombreDestino: "La Puerta del Diablo",
        idioma: "🇫🇷 Français",

        tituloSobre: "À propos de ce lieu",
        textoSobre:
            "La Porte du Diable est l'une des destinations touristiques les plus reconnues du Salvador. Ses formations rocheuses et ses vues panoramiques en font un lieu exceptionnel pour découvrir les paysages du pays.",

        tituloHistoria: "Histoire",
        textoHistoria:
            "Dans cette section, vous découvrirez l'histoire de la Porte du Diable ainsi que certains événements qui font partie de l'identité de ce lieu.",

        tituloLeyendas: "Légendes",
        textoLeyendas:
            "La Porte du Diable est également associée à différents récits et légendes populaires transmis au fil du temps.",

        tituloDatos: "Informations intéressantes",
        dato1: "Vues panoramiques sur le paysage",
        dato2: "Destination touristique du Salvador",
        dato3: "Idéal pour profiter de l'environnement naturel",

    etiquetaAudio: "AUDIO DE L'EXPÉRIENCE",
    tituloAudio: "Écoutez le guide"
    }

};

// =========================================
// CAMBIAR LOS TEXTOS DE LA GUÍA
// =========================================

function cambiarTextoGuia(idioma) {

    const texto = textosGuia[idioma];

    document.getElementById("tituloGuia").textContent =
        texto.tituloGuia;

    document.getElementById("nombreDestino").textContent =
        texto.nombreDestino;

    document.getElementById("idiomaSeleccionado").textContent =
        texto.idioma;

        document.getElementById("etiquetaAudio").textContent = texto.etiquetaAudio;
document.getElementById("tituloAudio").textContent = texto.tituloAudio;

    document.getElementById("tituloSobre").textContent =
        texto.tituloSobre;

    document.getElementById("textoSobre").textContent =
        texto.textoSobre;

    document.getElementById("tituloHistoria").textContent =
        texto.tituloHistoria;

    document.getElementById("textoHistoria").textContent =
        texto.textoHistoria;

    document.getElementById("tituloLeyendas").textContent =
        texto.tituloLeyendas;

    document.getElementById("textoLeyendas").textContent =
        texto.textoLeyendas;

    document.getElementById("tituloDatos").textContent =
        texto.tituloDatos;

    document.getElementById("dato1").textContent =
        texto.dato1;

    document.getElementById("dato2").textContent =
        texto.dato2;

    document.getElementById("dato3").textContent =
        texto.dato3;
}

botonesIdioma.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const idioma = boton.dataset.idioma;

        let rutaAudio = "";

        if (idioma === "es") {

            idiomaSeleccionado.textContent = "Español";

            rutaAudio = "audios/español/te-amo.mp3";

        }

        if (idioma === "en") {

            idiomaSeleccionado.textContent = "English";

            rutaAudio = "audios/english/alabare-gospel.mp3";

        }

        if (idioma === "fr") {

            idiomaSeleccionado.textContent = "Français";

            rutaAudio = "audios/français/frances.mp3";

        }

        // Detener el audio anterior
audioGuia.pause();

audioGuia.currentTime = 0;

// Cambiar el archivo
fuenteAudio.src = rutaAudio;

// Recargar el nuevo audio
audioGuia.load();

cambiarTextoGuia(idioma);

        // Mostrar la pantalla de la guía
        mostrarPantalla("guia");

    });

});