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

    let segundos = 7;

    const contador = document.getElementById("contador");
    const botonSaltar = document.getElementById("botonSaltar");

    contador.textContent = "Podrás continuar en:";
    botonSaltar.textContent = "7 segundos";

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

const tituloMenuIdioma = document.querySelector("#guia .encabezado-menu span");

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
    "La Puerta del Diablo es uno de los destinos turísticos naturales más icónicos y visitados de El Salvador. Ubicado en el distrito de Panchimalco, en el departamento de San Salvador, este parque natural se encuentra situado a más de 1,000 metros sobre el nivel del mar en la cima del cerro El Chulo.<br><br>" +
    "El atractivo principal de este sitio radica en sus impresionantes monolitos de roca y sus modernos miradores de cristal, desde donde se contempla una panorámica de 360 grados que abarca la capital, el volcán de San Vicente (Chinchontepec), el lago de Ilopango, la cordillera del Bálsamo y el Océano Pacífico. El lugar cuenta con senderos señalizados, plazas turísticas, áreas de descanso, facilidades de accesibilidad y una variada oferta gastronómica local.",

        tituloHistoria: "Historia",
        textoHistoria:
            "El origen geológico de La Puerta del Diablo se remonta a procesos de erosión, intensas lluvias y movimientos tectónicos ocurridos a lo largo de miles de años. Originalmente, la formación rocosa era una sola estructura sólida conocida como el Cerro El Chulo, pero con el tiempo y tras severos fenómenos meteorológicos (como el histórico temporal de 1762), la montaña se fracturó, dejando dos enormes peñascos divididos por un abismo vertical.<br><br>" +
            "A lo largo del siglo XX, el lugar se consolidó como un punto de referencia para el excursionismo, el ecoturismo y las visitas familiares en El Salvador. Entre 2022 y 2023, el Gobierno de El Salvador llevó a cabo un proyecto integral de remodelación y modernización del parque natural, dotándolo de infraestructura turística de primer nivel, senderos inclusivos, iluminación y miradores panorámicos volados para garantizar una experiencia segura y accesible para visitantes nacionales e internacionales.",

        tituloLeyendas: "Leyendas",
       textoLeyendas:
    "El peculiar nombre de \"La Puerta del Diablo\" nace de diversas historias de la tradición oral salvadoreña transmitidas de generación en generación.<br><br>" +
    
    "<strong>El amor prohibido de la hija del terrateniente:</strong> La leyenda más popular cuenta que en la época colonial, el demonio quedó enamorado de Rosenda, la joven y hermosa hija de un rico propietario de la zona de Panchimalco. Al ser descubierto por el padre de la joven mientras la cortejaba, el demonio huyó desbandado a través del cerro. Al verse acorralado por los pobladores, rompió la montaña en dos para escapar hacia el abismo, dejando abierta la \"puerta\".<br><br>" +
    
    "<strong>El refugio de los espíritus:</strong> Otra versión popular entre las comunidades indígenas de Panchimalco sostenía que la rendija entre las dos rocas era un portal a través del cual salían espíritus y fuerzas oscuras durante las noches de tormenta, lo que llevó a los lugareños a bautizar el paso rocoso con este nombre.",

     dato1: "<strong>Formaciones rocosas emblemáticas:</strong> Las dos imponentes rocas que forman el canal principal se conocen popularmente como <strong>El Chulo</strong> (la peña más alta y prominente) y <strong>El Chele</strong> (la peña contigua).",

dato2: "<strong>Clima idóneo:</strong> Debido a su elevación y a la constante circulación de corrientes de aire procedentes del Pacífico, el sitio goza de un clima fresco que oscila habitualmente entre los 18 °C y los 23 °C.",

dato3: "<strong>Cerca de la cultura viva de Panchimalco:</strong> Está ubicado a pocos minutos del casco urbano de Panchimalco, un municipio célebre por su rica herencia hispano-indígena, sus tradiciones artesanales y su arquitectura colonial.",

dato4: "<strong>Gastronomía tradicional:</strong> En los alrededores e instalaciones del parque es tradición disfrutar de la gastronomía salvadoreña, destacando las pupusas, el atol de elote, riguas, elotes locos y café de altura.",

dato5: "<strong>Miradores con piso de vidrio:</strong> La reciente remodelación incorporó miradores con secciones de suelo transparente proyectados sobre el abismo, ofreciendo una experiencia emocionante para los amantes de la fotografía.",

tituloDatos: "Datos interesantes",

    etiquetaAudio: "AUDIO DE LA EXPERIENCIA",
    tituloAudio: "Escucha la guía"
    },


    en: {
        tituloGuia: "TOURIST AUDIO GUIDE",
        nombreDestino: "La Puerta del Diablo",
        idioma: "🇬🇧 English",

        tituloSobre: "About this place",
        textoSobre:
            "La Puerta del Diablo (the Devil's door) is one of El Salvador's most iconic and visited natural tourist destinations. Located in the district of Panchimalco, in the department of San Salvador, this natural park sits over 1,000 meters above sea level at the peak of El Chulo hill.<br><br>" +
            "The site's main attraction lies in its impressive rock monoliths and modern glass viewing platforms, offering a 360-degree panoramic view of the capital city, the San Vicente Volcano (Chinchontepec), Lake Ilopango, the Balsam Mountain Range, and the Pacific Ocean. The park features signposted trails, tourist plazas, rest areas, accessibility facilities, and a diverse local food offer.",

        tituloHistoria: "History",
        textoHistoria:
            "The geological origin of La Puerta del Diablo dates back thousands of years to natural erosion, heavy rainfall, and tectonic movements. Originally, the rock formation was a single solid structure known as El Chulo Hill, but over time and following severe weather events (such as the historic storm of 1762), the mountain fractured, leaving two massive crags divided by a vertical abyss.<br><br>" +
            "Throughout the 20th century, the location established itself as a primary landmark for hiking, ecotourism, and family visits in El Salvador. Between 2022 and 2023, the Government of El Salvador carried out a comprehensive renovation and modernization project, equipping the natural park with top-tier tourist infrastructure, inclusive walkways, lighting, and cantilevered glass miradors to ensure a safe and accessible experience for both domestic and international visitors.",

        tituloLeyendas: "Legends",
            textoLeyendas:
                 "The peculiar name \"La Puerta del Diablo\" stems from various stories in Salvadoran oral tradition passed down through generations:<br><br>" +
    "<strong>The Landowner's Daughter and Forbidden Love:</strong> The most famous legend recounts that during colonial times, the devil fell in love with Rosenda, the young and beautiful daughter of a wealthy local landlord in Panchimalco. Upon being discovered by her father while courting her, the devil fled wildly across the hill. Cornered by the villagers, he broke the mountain in two to escape into the abyss, leaving the \"door\" open.<br><br>" +
    "<strong>The Refuge of Spirits:</strong> Another popular version among the indigenous communities of Panchimalco held that the gap between the two rocks was a portal through which spirits and dark forces emerged during stormy nights, leading locals to name the rocky pass accordingly.",

        tituloDatos: "Interesting facts",

dato1: "<strong>Emblematic rock formations:</strong> The two imposing rocks that form the main passage are popularly known as <strong>El Chulo</strong> (the highest and most prominent rock) and <strong>El Chele</strong> (the adjacent rock).",

dato2: "<strong>Ideal climate:</strong> Due to its elevation and the constant circulation of air currents coming from the Pacific, the site enjoys a cool climate that usually ranges between 18 °C and 23 °C.",

dato3: "<strong>Close to the living culture of Panchimalco:</strong> It is located just a few minutes from the town center of Panchimalco, a municipality known for its rich Hispanic-Indigenous heritage, traditional crafts and colonial architecture.",

dato4: "<strong>Traditional cuisine:</strong> Around the park and within its facilities, visitors can enjoy traditional Salvadoran cuisine, including pupusas, atol de elote, riguas, elotes locos and high-altitude coffee.",

dato5: "<strong>Glass-floor viewpoints:</strong> The recent renovation incorporated viewpoints with transparent floor sections extending over the cliff, offering an exciting experience for photography enthusiasts.",
 
    etiquetaAudio: "EXPERIENCE AUDIO",
    tituloAudio: "Listen to the guide"
    },


    fr: {
        tituloGuia: "AUDIO-GUIDE TOURISTIQUE",
        nombreDestino: "La Puerta del Diablo",
        idioma: "🇫🇷 Français",

        tituloSobre: "À propos de ce lieu",
        textoSobre:
            "La Puerta del Diablo (La Porte du Diable) est l'une des destinations touristiques naturelles les plus emblématiques et visitées du Salvador. Situé dans le district de Panchimalco, dans le département de San Salvador, ce parc naturel culmine à plus de 1 000 mètres d'altitude au sommet de la colline d'El Chulo.<br><br>" +
            "L'attrait principal du site réside dans ses impressionnants monolithes rocheux et ses belvédères modernes en verre, offrant une vue panoramique à 360 degrés sur la capitale, le volcan San Vicente (Chinchontepec), le lac Ilopango, la cordillère du Baume et l'océan Pacifique. Le parc dispose de sentiers balisés, de places touristiques, d'espaces de repos, d'infrastructures accessibles et d'une offre gastronomique locale variée.",

        tituloHistoria: "Histoire",
        textoHistoria:
            "L'origine géologique de La Puerta del Diablo remonte à des milliers d'années sous l'effet de l'érosion naturelle, d'intenses pluies et de mouvements tectoniques. À l'origine, la formation rocheuse était une structure solide unique connue sous le nom de Cerro El Chulo. Cependant, au fil du temps et à la suite de violents phénomènes météorologiques (comme la tempête historique de 1762), la montagne s'est fracturée, laissant deux imposants rochers séparés par un abîme vertical.<br><br>" +
            "Au cours du XXe siècle, le lieu s'est imposé comme un point de référence pour la randonnée, l'éco-tourisme et les sorties familiales au Salvador. Entre 2022 et 2023, le gouvernement du Salvador a mené un projet global de rénovation et de modernisation du parc naturel, le dotant d'infrastructures touristiques de premier ordre, de sentiers inclusifs, d'éclairage et de belvédères suspendus en verre afin de garantir une expérience sûre et accessible aux visiteurs nationaux et internationaux.",

       tituloLeyendas: "Légendes",
textoLeyendas:
    "Le nom singulier de « La Puerta del Diablo » provient de plusieurs récits de la tradition orale salvadorienne transmis de génération en génération :<br><br>" +
    "<strong>L'amour interdit de la fille du propriétaire :</strong> La légende la plus populaire raconte qu'à l'époque coloniale, le diable tombât amoureux de Rosenda, la jeune et belle fille d'un riche propriétaire de Panchimalco. Surpris par le père de la jeune fille alors qu'il lui faisait la cour, le diable s'enfuit à toute vitesse à travers la colline. Cerné par les habitants du village, il brisa la montagne en deux pour s'échapper dans l'abîme, laissant ainsi la « porte » ouverte.<br><br>" +
    "<strong>Le refuge des esprits :</strong> Une autre version populaire parmi les communautés indigènes de Panchimalco soutenait que la fissure entre les deux rochers était un portail par lequel sortaient des esprits et des forces obscures lors des nuits de tempête, ce qui amena les habitants à baptiser le passage rocheux ainsi.",

        tituloDatos: "Informations intéressantes",

dato1: "<strong>Formations rocheuses emblématiques :</strong> Les deux imposantes roches qui forment le passage principal sont connues sous les noms populaires d'<strong>El Chulo</strong> (le rocher le plus haut et le plus imposant) et d'<strong>El Chele</strong> (le rocher adjacent).",

dato2: "<strong>Climat idéal :</strong> Grâce à son altitude et à la circulation constante des courants d'air provenant du Pacifique, le site bénéficie d'un climat frais qui oscille généralement entre 18 °C et 23 °C.",

dato3: "<strong>À proximité de la culture vivante de Panchimalco :</strong> Le site se trouve à quelques minutes du centre-ville de Panchimalco, une commune connue pour son riche héritage hispano-autochtone, son artisanat traditionnel et son architecture coloniale.",

dato4: "<strong>Gastronomie traditionnelle :</strong> Dans les environs et les installations du parc, il est possible de découvrir la gastronomie salvadorienne traditionnelle, notamment les pupusas, l'atol de elote, les riguas, les elotes locos et le café d'altitude.",

dato5: "<strong>Belvédères avec sol en verre :</strong> La récente rénovation a intégré des belvédères avec des sections de sol transparentes projetées au-dessus du précipice, offrant une expérience impressionnante aux amateurs de photographie.",

    etiquetaAudio: "AUDIO DE L'EXPÉRIENCE",
    tituloAudio: "Écoutez le guide"
    }

};

// =========================================
// CAMBIAR LOS TEXTOS DE LA GUÍA
// =========================================

function cambiarTextoGuia(idioma) {

    const texto = textosGuia[idioma];

      if (idioma === "es") {
        tituloMenuIdioma.textContent = "Idioma";
    } else if (idioma === "en") {
        tituloMenuIdioma.textContent = "Language";
    } else if (idioma === "fr") {
        tituloMenuIdioma.textContent = "Langue";
    }


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

    document.getElementById("textoSobre").innerHTML =
    texto.textoSobre;

    document.getElementById("tituloHistoria").textContent =
        texto.tituloHistoria;

    document.getElementById("textoHistoria").innerHTML =
        texto.textoHistoria;

    document.getElementById("tituloLeyendas").textContent =
        texto.tituloLeyendas;

    document.getElementById("textoLeyendas").innerHTML =
        texto.textoLeyendas;

    document.getElementById("tituloDatos").textContent =
        texto.tituloDatos;

   document.getElementById("dato1").innerHTML =
    texto.dato1;

document.getElementById("dato2").innerHTML =
    texto.dato2;

document.getElementById("dato3").innerHTML =
    texto.dato3;

document.getElementById("dato4").innerHTML =
    texto.dato4;

document.getElementById("dato5").innerHTML =
    texto.dato5;
}

botonesIdioma.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const idioma = boton.dataset.idioma;

        let rutaAudio = "";

        if (idioma === "es") {

            idiomaSeleccionado.textContent = "Español";

            rutaAudio = "audios/español/audio-español.mp3";

        }

        if (idioma === "en") {

            idiomaSeleccionado.textContent = "English";

            rutaAudio = "audios/english/audio-english.mp3";

        }

        if (idioma === "fr") {

            idiomaSeleccionado.textContent = "Français";

            rutaAudio = "audios/français/audio-frances.mp3";

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

// =========================================
// MENÚ DE IDIOMAS EN LA AUTOGUÍA
// =========================================

const botonMenuIdioma = document.getElementById("botonMenuIdioma");
const menuIdiomas = document.getElementById("menuIdiomas");
const cerrarMenuIdioma = document.getElementById("cerrarMenuIdioma");

botonMenuIdioma.addEventListener("click", () => {
    menuIdiomas.classList.toggle("abierto");
});

cerrarMenuIdioma.addEventListener("click", () => {
    menuIdiomas.classList.remove("abierto");
});

// =========================================
// CAMBIAR IDIOMA DESDE EL MENÚ
// =========================================

const opcionesIdiomaMenu = document.querySelectorAll(".opcion-idioma-menu");

opcionesIdiomaMenu.forEach(function(opcion) {

    opcion.addEventListener("click", function() {

        const idioma = opcion.dataset.idioma;

        let rutaAudio = "";

        if (idioma === "es") {
            rutaAudio = "audios/español/audio-español.mp4";
        }

        if (idioma === "en") {
            rutaAudio = "audios/english/audio-english.mp4";
        }

        if (idioma === "fr") {
            rutaAudio = "audios/français/frances.mp3";
        }

        // Detener el audio actual
        audioGuia.pause();
        audioGuia.currentTime = 0;

        // Cambiar el archivo de audio
        fuenteAudio.src = rutaAudio;

        // Recargar el nuevo audio
        audioGuia.load();

        // Cambiar todos los textos de la guía
        cambiarTextoGuia(idioma);

        // Cerrar el menú
        menuIdiomas.classList.remove("abierto");

    });

});