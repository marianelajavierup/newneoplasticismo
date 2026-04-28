/* ============================================================
   NEOPLASTICISMO — SCRIPT.JS
   Laboratorio de Diseño II — Universidad de Palermo 2026
============================================================ */

/* A-HOME */
/* ============================================================
   FLECHA SCROLL TO TOP
============================================================ */

window.addEventListener('scroll', function() {
    const botonTop = document.querySelector('.scroll-to-top');
    if (!botonTop) return;

    if (window.scrollY > window.innerHeight / 2) {
        botonTop.classList.add('show');
    } else {
        botonTop.classList.remove('show');
    }
});


/* --- ACTIVAR SESIÓN EN NAVBAR --- */

function activarSesion(usuario) {
    const btnIngresar = document.getElementById('btn-abrir-auth');
    const navUsuario  = document.getElementById('navbar-usuario');
    const navNombre   = document.getElementById('navbar-usuario-nombre');

    if (btnIngresar) btnIngresar.style.display = 'none';
    if (navUsuario)  navUsuario.style.display  = 'flex';
    if (navNombre)   navNombre.textContent = usuario.alias || usuario.nombre;
}

/* --- CERRAR SESIÓN --- */

function cerrarSesion() {
    localStorage.removeItem('neo_sesion');

    const btnIngresar = document.getElementById('btn-abrir-auth');
    const navUsuario  = document.getElementById('navbar-usuario');

    if (btnIngresar) btnIngresar.style.display = 'flex';
    if (navUsuario)  navUsuario.style.display  = 'none';
}

/* --- VERIFICAR SESIÓN AL CARGAR LA PÁGINA --- */

(function verificarSesionAlCargar() {
    const sesion = localStorage.getItem('neo_sesion');
    if (sesion) {
        try {
            activarSesion(JSON.parse(sesion));
        } catch(e) {
            localStorage.removeItem('neo_sesion');
        }
    }
})();



/* B-CONTEXTO HISTORICO */
/* ============================================================
   LÍNEA DE TIEMPO — SCROLL HORIZONTAL
============================================================ */

const wrapper = document.querySelector('.timeline-wrapper');
if (wrapper) {
    wrapper.addEventListener('wheel', function(e) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY * 2;
    }, { passive: false });
}

function abrirModal(titulo, texto, img) {
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-texto').textContent = texto;
    document.getElementById('modal-img').src = img;
    const modal = document.getElementById('modal-timeline');
    modal.classList.add('activo');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('modal-timeline');
    modal.classList.remove('activo');
    document.body.style.overflow = 'auto';
}


/* ============================================================
   LÍNEA DE TIEMPO — MODAL
============================================================ */

function abrirModal(titulo, texto, img) {
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-texto').textContent = texto;
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-timeline').classList.add('activo');
}

function cerrarModal() {
    document.getElementById('modal-timeline').classList.remove('activo');
}

const modalTimeline = document.getElementById('modal-timeline');
if (modalTimeline) {
    modalTimeline.addEventListener('click', function(e) {
        if (e.target === this) cerrarModal();
    });
}

/* B-DE STIJL */
/* ============================================================
   MODAL MANIFIESTOS — DE STIJL
============================================================ */

const manifiestos = [
    {
        titulo: 'Primer Manifiesto De Stijl',
        anio: '1917',
        autores: 'Theo van Doesburg, Piet Mondrian, Bart van der Leck, J.J.P. Oud',
        texto: 'Este periódico se plantea como objetivo contribuir al desarrollo de un nuevo sentido estético. Proclama la búsqueda de un arte nuevo basado en relaciones puras entre forma y color, superando el arte individual hacia un lenguaje universal. La batalla del individualismo, en el arte y en la vida, es causa de toda ruina y desviación del gusto.',
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    },
    {
        titulo: 'Segundo Manifiesto De Stijl',
        anio: '1920',
        autores: 'Theo van Doesburg, Piet Mondrian',
        texto: 'Profundiza en los principios del movimiento y amplía su alcance a la arquitectura y el diseño. Van Doesburg expande la visión del neoplasticismo más allá de la pintura, hacia una estética total del entorno construido. El arte nuevo ha puesto en evidencia el contenido de la nueva conciencia del tiempo.',
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    },
    {
        titulo: 'Tercer Manifiesto De Stijl',
        anio: '1926',
        autores: 'Theo van Doesburg',
        texto: 'El tercer y último manifiesto amplía la visión del movimiento hacia un arte total que integre todas las disciplinas: pintura, escultura, arquitectura, diseño gráfico y tipografía. Representa la madurez conceptual del neoplasticismo y su proyección hacia el diseño moderno universal.',
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    }
];

let manifiestoActual = 0;

function abrirManifiesto(numero) {
    manifiestoActual = numero - 1;
    cargarManifiesto(manifiestoActual);
    const modal = document.getElementById('modal-manifiesto');
    if (modal) {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarManifiesto() {
    const modal = document.getElementById('modal-manifiesto');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

function cargarManifiesto(index) {
    const m = manifiestos[index];
    document.getElementById('manifiesto-titulo').textContent = m.titulo;
    document.getElementById('manifiesto-anio').textContent = m.anio;
    document.getElementById('manifiesto-autores').textContent = m.autores;
    document.getElementById('manifiesto-texto').textContent = m.texto;
    document.getElementById('manifiesto-img').src = m.img;
    document.getElementById('manifiesto-img').alt = m.titulo;
    document.getElementById('manifiesto-pdf').href = m.pdf;

    // Habilitar/deshabilitar flechas
    document.getElementById('btn-anterior').disabled = index === 0;
    document.getElementById('btn-siguiente').disabled = index === manifiestos.length - 1;
}

function navegarManifiesto(direccion) {
    const nuevo = manifiestoActual + direccion;
    if (nuevo >= 0 && nuevo < manifiestos.length) {
        manifiestoActual = nuevo;
        cargarManifiesto(manifiestoActual);
    }
}

// Cerrar con click fuera del contenido
const modalManifiesto = document.getElementById('modal-manifiesto');
if (modalManifiesto) {
    modalManifiesto.addEventListener('click', function(e) {
        if (e.target === this) cerrarManifiesto();
    });
}

/* C-AUTORES */
/* ============================================================
   GRILLA MONDRIAN + MODAL AUTORES
============================================================ */

const autoresData = {
    mondrian: {
        nombre: 'Piet Mondrian',
        fechas: '1872 — 1944',
        pais: 'Países Bajos',
        formacion: 'Academia de Bellas Artes de Ámsterdam',
        resena: 'Considerado el principal representante del Neoplasticismo, Mondrian desarrolló un lenguaje visual abstracto basado en líneas horizontales y verticales negras y planos de colores primarios. Sus obras más significativas dentro del movimiento son las series Composición con Rojo, Azul y Amarillo. Fuera del neoplasticismo exploró el cubismo en sus inicios y hacia el final de su vida desarrolló el estilo Broadway Boogie-Woogie, incorporando ritmos dinámicos influenciados por el jazz neoyorquino.',
        fotos: [
            '../img/c-autores-piet-mondrian-01.webp',
            '../img/c-autores-piet-mondrian-02.webp',
            '../img/c-autores-piet-mondrian-03.jpg'
        ]
    },
    doesburg: {
        nombre: 'Theo van Doesburg',
        fechas: '1883 — 1931',
        pais: 'Países Bajos',
        formacion: 'Autodidacta, estudió pintura y crítica de arte',
        resena: 'Fundador y motor intelectual del movimiento De Stijl, Van Doesburg redactó los tres manifiestos del grupo y editó la revista homónima. Sus obras dentro del neoplasticismo incluyen composiciones geométricas de gran rigor formal. Fuera del movimiento desarrolló el Elementarismo, incorporando diagonales que rompían con la ortogonalidad estricta de Mondrian, generando tensión y dinamismo visual.',
        fotos: [
            '../img/c-autores-theo-van-doesburg-01.webp',
            '../img/c-autores-theo-van-doesburg-02.jpg',
            '../img/c-autores-theo-van-doesburg-03.jpg'
        ]
    },
    rietveld: {
        nombre: 'Gerrit Rietveld',
        fechas: '1888 — 1964',
        pais: 'Países Bajos',
        formacion: 'Ebanista y arquitecto autodidacta',
        resena: 'Rietveld tradujo los principios neoplasticistas al diseño de mobiliario y la arquitectura. Su obra más icónica dentro del movimiento es la Silla Roja y Azul (1917) y la Casa Schröder en Utrecht (1924), declarada Patrimonio de la Humanidad. Fuera del neoplasticismo continuó ejerciendo la arquitectura desarrollando proyectos de vivienda social y museos, incluyendo el Museo Van Gogh en Ámsterdam.',
        fotos: [
            '../img/c-autores-gerrit-rietveld-01.jfif',
            '../img/c-autores-gerrit-rietveld-02.jpg',
            '../img/c-autores-gerrit-rietveld-03.jpg'
        ]
    },
    huszar: {
        nombre: 'Vilmos Huszár',
        fechas: '1884 — 1960',
        pais: 'Hungría / Países Bajos',
        formacion: 'Academia de Bellas Artes de Budapest y Munich',
        resena: 'Huszár fue uno de los miembros fundadores de De Stijl y diseñó el logotipo de la revista del movimiento. Sus obras más destacadas dentro del neoplasticismo son sus composiciones pictóricas con figuras geométricas y trabajos de diseño gráfico de gran austeridad formal. Fuera del movimiento se orientó hacia el diseño de interiores y las artes aplicadas, siendo pionero en la integración del arte y el espacio habitable.',
        fotos: [
            '../img/c-autores-vilmos-huszar-01.jpg',
            '../img/c-autores-vilmos-huszar-02.jpg',
            '../img/c-autores-vilmos-huszar-03.jpg'
        ]
    },
    vanderleck: {
        nombre: 'Bart van der Leck',
        fechas: '1876 — 1958',
        pais: 'Países Bajos',
        formacion: 'Escuela de Artes Aplicadas de Ámsterdam',
        resena: 'Van der Leck aportó al neoplasticismo su particular uso del color plano y la geometría simple. Sus composiciones dentro del movimiento se caracterizan por figuras fragmentadas en formas rectangulares de colores primarios sobre fondo blanco. Fuera del neoplasticismo abandonó el grupo relativamente pronto para desarrollar un estilo propio más figurativo, aplicado también al diseño textil y la cerámica.',
        fotos: [
            '../img/c-autores-bart-van-der-leck-01.jpg',
            '../img/c-autores-bart-van-der-leck-02.jpg',
            '../img/c-autores-bart-van-der-leck-03.jpg'
        ]
    },
    oud: {
        nombre: 'Jacobus Johannes Pieter Oud',
        fechas: '1890 — 1963',
        pais: 'Países Bajos',
        formacion: 'Escuela de Artes Aplicadas de Ámsterdam y Munich',
        resena: 'J.J.P. Oud fue el principal arquitecto del movimiento De Stijl junto a Rietveld. Sus obras neoplasticistas incluyen complejos de vivienda social en Rotterdam donde aplicó los principios de la forma pura y el color primario a la arquitectura urbana. Fuera del movimiento se alejó hacia un clasicismo moderno más ornamental, generando controversia entre sus contemporáneos del Movimiento Moderno.',
        fotos: [
            '../img/c-autores-jacobus-johannes-pieter-oud-01.jpg',
            '../img/c-autores-jacobus-johannes-pieter-oud-02.jpg',
            '../img/c-autores-jacobus-johannes-pieter-oud-03.jpg'
        ]
    }
};

function abrirAutor(id) {
    const autor = autoresData[id];
    if (!autor) return;

    document.getElementById('autor-nombre').textContent = autor.nombre;
    document.getElementById('autor-fechas').textContent = autor.fechas;
    document.getElementById('autor-pais').textContent = autor.pais;
    document.getElementById('autor-formacion').textContent = autor.formacion;
    document.getElementById('autor-resena').textContent = autor.resena;

    const inner = document.getElementById('carrusel-autor-inner');
    inner.innerHTML = '';
    autor.fotos.forEach((foto, i) => {
        inner.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${foto}" alt="${autor.nombre}">
            </div>`;
    });

    const modal = document.getElementById('modal-autor');
    if (modal) {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarAutor() {
    const modal = document.getElementById('modal-autor');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

const modalAutor = document.getElementById('modal-autor');
if (modalAutor) {
    modalAutor.addEventListener('click', function(e) {
        if (e.target === this) cerrarAutor();
    });
}

/* D-OBRAS */
/* ============================================================
   SALA DE OBRAS — HOTSPOTS + MODAL
============================================================ */

const obrasData = {

    /* --- PINTURA --- */
    'mondrian-01': {
        rama: 'pintura',
        ramaLabel: 'Pintura',
        ramaIcono: '../img/a-img-icono-pintura.png',
        titulo: 'Composición con Rojo, Azul y Amarillo',
        autor: 'Piet Mondrian',
        anio: '1930',
        tecnica: 'Óleo sobre tela — 46 × 46 cm',
        resena: 'Una de las obras más emblemáticas del Neoplasticismo. Mondrian reduce la pintura a sus elementos esenciales: líneas negras ortogonales y planos de colores primarios sobre fondo blanco, expresando una armonía universal y absoluta.',
        fotos: ['../img/5-obras.pintura-mondrian-01.jpg'],
        link: '#'
    },
    'mondrian-02': {
        rama: 'pintura',
        ramaLabel: 'Pintura',
        ramaIcono: '../img/a-img-icono-pintura.png',
        titulo: 'Tableau I',
        autor: 'Piet Mondrian',
        anio: '1921',
        tecnica: 'Óleo sobre tela — 103 × 100 cm',
        resena: 'En Tableau I Mondrian consolida su vocabulario visual neoplasticista: planos rectangulares delimitados por gruesas líneas negras que estructuran el espacio pictórico según una lógica de equilibrio dinámico.',
        fotos: ['../img/5-obras.pintura-mondrian-02.jpg'],
        link: '#'
    },
    'mondrian-03': {
        rama: 'pintura',
        ramaLabel: 'Pintura',
        ramaIcono: '../img/a-img-icono-pintura.png',
        titulo: 'Composición II en Rojo, Azul y Amarillo',
        autor: 'Piet Mondrian',
        anio: '1929',
        tecnica: 'Óleo sobre tela — 40,3 × 32,1 cm',
        resena: 'Obra de madurez del movimiento. La asimetría controlada entre los bloques de color y el espacio blanco genera una tensión visual que Mondrian denominó "equilibrio dinámico".',
        fotos: ['../img/5-obras.pintura-mondrian-04.jpg'],
        link: '#'
    },
    'mondrian-04': {
        rama: 'pintura',
        ramaLabel: 'Pintura',
        ramaIcono: '../img/a-img-icono-pintura.png',
        titulo: 'Composición en Negro, Blanco y Gris',
        autor: 'Piet Mondrian',
        anio: '1939',
        tecnica: 'Óleo sobre tela — 80,7 × 73,5 cm',
        resena: 'Periodo de transición en la obra de Mondrian, donde prescinde de los colores primarios para explorar la pura relación entre línea y plano neutro, anticipando el dinamismo de sus obras neoyorquinas.',
        fotos: ['../img/5-obras.pintura-mondrian-01.jpg'],
        link: '#'
    },

    /* --- ARQUITECTURA --- */
    'casa-schroder': {
        rama: 'arquitectura',
        ramaLabel: 'Arquitectura',
        ramaIcono: '../img/a-img-icono-arquitectura.png',
        titulo: 'Casa Schröder',
        autor: 'Gerrit Rietveld',
        anio: '1924',
        tecnica: 'Arquitectura residencial — Utrecht, Países Bajos',
        resena: 'Declarada Patrimonio de la Humanidad por la UNESCO, la Casa Schröder es la materialización tridimensional del Neoplasticismo. Sus planos de colores primarios, líneas precisas y espacios flexibles definen el programa doméstico moderno.',
        fotos: [
            '../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg',
            '../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg'
        ],
        link: '#'
    },
    'casa-schroder-02': {
        rama: 'arquitectura',
        ramaLabel: 'Arquitectura',
        ramaIcono: '../img/a-img-icono-arquitectura.png',
        titulo: 'Casa Schröder — Interior',
        autor: 'Gerrit Rietveld',
        anio: '1924',
        tecnica: 'Vista interior — Utrecht, Países Bajos',
        resena: 'El interior de la Casa Schröder introduce paneles corredizos que permiten transformar el espacio según las necesidades del habitante. La planta libre y los colores primarios aplicados a la carpintería son fieles al principio neoplasticista.',
        fotos: [
            '../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg',
            '../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg'
        ],
        link: '#'
    },
    'cafe-aubette': {
        rama: 'arquitectura',
        ramaLabel: 'Arquitectura',
        ramaIcono: '../img/a-img-icono-arquitectura.png',
        titulo: 'Café Aubette — Salón de Baile',
        autor: 'Theo van Doesburg',
        anio: '1928',
        tecnica: 'Interiorismo — Estrasburgo, Francia',
        resena: 'El Café Aubette es una de las intervenciones de diseño total del Neoplasticismo. Van Doesburg aplicó su Elementarismo —con diagonales dinámicas— a paredes, techos y pisos, creando un entorno visual integrado y envolvente.',
        fotos: ['../img/5-obras.arquitectura-cafeaubette-01.jpg'],
        link: '#'
    },
    'maison-particuliere': {
        rama: 'arquitectura',
        ramaLabel: 'Arquitectura',
        ramaIcono: '../img/a-img-icono-arquitectura.png',
        titulo: 'Proyecto Maison Particulière',
        autor: 'Theo van Doesburg',
        anio: '1923',
        tecnica: 'Proyecto arquitectónico — París, Francia',
        resena: 'Proyecto de vivienda particular desarrollado en colaboración con Cornelis van Eesteren. Representa la transición del Neoplasticismo de la pintura a la arquitectura, aplicando los principios de color y forma al espacio tridimensional habitable.',
        fotos: ['../img/5-obras.arquitectura-proyectomaison particuliére1923-theovandoesburg-01.jpg'],
        link: '#'
    },

    /* --- DISEÑO INDUSTRIAL --- */
    'silla-rietveld-01': {
        rama: 'disenoindustrial',
        ramaLabel: 'Diseño Industrial',
        ramaIcono: '../img/a-img-icono-disenoindustrial.png',
        titulo: 'Silla Roja y Azul',
        autor: 'Gerrit Rietveld',
        anio: '1917',
        tecnica: 'Madera lacada — 86,5 × 66 × 83,5 cm',
        resena: 'La Silla Roja y Azul es el primer objeto de diseño industrial del Neoplasticismo. Su estructura de listones perpendiculares y planos de color primario traduce literalmente al espacio tridimensional los principios formales de De Stijl.',
        fotos: [
            '../img/5-obras.disenoindustrial-sillarietveld.webp',
            '../img/5-obras.disenoindustrial-sillarietveld2.png',
            '../img/5-obras.disenoindustrial-sillarietveld3.jpg'
        ],
        link: '#'
    },
    'silla-rietveld-02': {
        rama: 'disenoindustrial',
        ramaLabel: 'Diseño Industrial',
        ramaIcono: '../img/a-img-icono-disenoindustrial.png',
        titulo: 'Silla Berlín',
        autor: 'Gerrit Rietveld',
        anio: '1923',
        tecnica: 'Madera — 84 × 61,5 × 78 cm',
        resena: 'La Silla Berlín (Beugels stoel) es una versión más depurada del lenguaje formal de Rietveld, eliminando el color para concentrarse en la estructura. La pureza constructiva y la economía de medios anticipan el diseño racionalista posterior.',
        fotos: [
            '../img/5-obras.disenoindustrial-sillarietveld2.png',
            '../img/5-obras.disenoindustrial-sillarietveld.webp'
        ],
        link: '#'
    },

    /* --- DISEÑO GRÁFICO --- */
    'disenografico-01': {
        rama: 'disenografico',
        ramaLabel: 'Diseño Gráfico',
        ramaIcono: '../img/a-img-icono-disenografico.png',
        titulo: 'Portada De Stijl N°1',
        autor: 'Theo van Doesburg / Vilmos Huszár',
        anio: '1917',
        tecnica: 'Diseño editorial — Revista De Stijl',
        resena: 'La portada del primer número de la revista De Stijl sienta las bases del diseño gráfico neoplasticista. Tipografía de palo seco, composición reticular estricta y colores primarios definen una identidad visual que influiría en toda la modernidad gráfica occidental.',
        fotos: ['../img/5-obras.disenoindustrial-sillarietveld.webp'],
        link: '#'
    },
    'disenografico-02': {
        rama: 'disenografico',
        ramaLabel: 'Diseño Gráfico',
        ramaIcono: '../img/a-img-icono-disenografico.png',
        titulo: 'Tipografía Universal',
        autor: 'Theo van Doesburg',
        anio: '1919',
        tecnica: 'Diseño tipográfico — Alfabeto De Stijl',
        resena: 'El alfabeto diseñado por Van Doesburg aplica la gramática geométrica del Neoplasticismo al campo tipográfico: cada letra se construye a partir de una grilla cuadrada modular, eliminando toda curva y ornamento en favor de la abstracción pura.',
        fotos: ['../img/5-obras.disenoindustrial-sillarietveld2.png'],
        link: '#'
    }
};

/* Abrir modal obra */
function abrirObra(id) {
    const obra = obrasData[id];
    if (!obra) return;

    /* Rama */
    document.getElementById('obra-rama-icono').src = obra.ramaIcono;
    document.getElementById('obra-rama-icono').alt = obra.ramaLabel;
    document.getElementById('obra-rama-nombre').textContent = obra.ramaLabel;

    /* Datos */
    document.getElementById('obra-titulo').textContent = obra.titulo;
    document.getElementById('obra-autor').textContent = obra.autor;
    document.getElementById('obra-anio').textContent = obra.anio;
    document.getElementById('obra-tecnica').textContent = obra.tecnica;
    document.getElementById('obra-resena').textContent = obra.resena;
    document.getElementById('obra-btn-mas').href = obra.link;

    /* Carrusel */
    const inner = document.getElementById('carrusel-obra-inner');
    const dots  = document.getElementById('carrusel-obra-dots');
    inner.innerHTML = '';
    dots.innerHTML  = '';

    obra.fotos.forEach(function(foto, i) {
        inner.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${foto}" alt="${obra.titulo}">
            </div>`;
        dots.innerHTML += `
            <button type="button" data-bs-target="#carruselObra" data-bs-slide-to="${i}" 
                ${i === 0 ? 'class="active"' : ''} aria-label="Imagen ${i + 1}"></button>`;
    });

    /* Reiniciar carrusel Bootstrap */
    const carruselEl = document.getElementById('carruselObra');
    const carruselInstance = bootstrap.Carousel.getOrCreateInstance(carruselEl);
    carruselInstance.to(0);

    /* Abrir */
    document.getElementById('modal-obra').classList.add('activo');
    document.body.style.overflow = 'hidden';
}

/* Cerrar modal obra */
function cerrarObra() {
    document.getElementById('modal-obra').classList.remove('activo');
    document.body.style.overflow = 'auto';
}

/* Cerrar al click fuera del contenido */
document.getElementById('modal-obra').addEventListener('click', function(e) {
    if (e.target === this) cerrarObra();
});

/* Asignar listeners a los hotspots */
document.querySelectorAll('.obras-hotspot').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const id = this.getAttribute('data-obra');
        abrirObra(id);
    });
});

/* E-AUTH */
/* ============================================================
   SISTEMA DE AUTENTICACIÓN — LOGIN / REGISTRO / SESIÓN
============================================================ */

/* --- Utilidades --- */

function mostrarError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function limpiarErrores(ids) {
    ids.forEach(function(id) { mostrarError(id, ''); });
}

function marcarInvalido(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('invalido');
}

function limpiarInvalido(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('invalido');
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarPassword(pass) {
    return {
        largo:    pass.length >= 6,
        mayus:    /[A-Z]/.test(pass),
        numero:   /[0-9]/.test(pass),
        especial: /[^A-Za-z0-9]/.test(pass)
    };
}

/* --- Abrir / cerrar panel --- */

function abrirAuth(tab) {
    document.getElementById('auth-overlay').classList.add('activo');
    document.body.style.overflow = 'hidden';
    switchTab(tab || 'login');
}

function cerrarAuth() {
    document.getElementById('auth-overlay').classList.remove('activo');
    document.body.style.overflow = 'auto';
}

function cerrarAuthOverlay(e) {
    if (e.target === document.getElementById('auth-overlay')) cerrarAuth();
}

/* --- Tabs --- */

function switchTab(tab) {
    const forms = ['form-login', 'form-registro', 'form-recuperar', 'auth-exito'];
    const tabs  = ['tab-login',  'tab-registro'];

    forms.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    tabs.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove('activo');
    });

    if (tab === 'login') {
        document.getElementById('form-login').style.display = 'flex';
        document.getElementById('tab-login').classList.add('activo');
    } else if (tab === 'registro') {
        document.getElementById('form-registro').style.display = 'flex';
        document.getElementById('tab-registro').classList.add('activo');
    } else if (tab === 'recuperar') {
        document.getElementById('form-recuperar').style.display = 'flex';
    } else if (tab === 'exito') {
        document.getElementById('auth-exito').style.display = 'flex';
    }
}

/* --- Mostrar/ocultar contraseña --- */

function togglePass(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon  = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('bi-eye-slash', 'bi-eye');
    }
}

/* --- Requisitos contraseña en tiempo real --- */

const regPassInput = document.getElementById('reg-pass');
if (regPassInput) {
    regPassInput.addEventListener('input', function() {
        const v = validarPassword(this.value);
        document.getElementById('req-largo').classList.toggle('cumplido', v.largo);
        document.getElementById('req-mayus').classList.toggle('cumplido', v.mayus);
        document.getElementById('req-numero').classList.toggle('cumplido', v.numero);
        document.getElementById('req-especial').classList.toggle('cumplido', v.especial);
    });
}

/* --- Mostrar campo "otro" en rama --- */

const regRamaSelect = document.getElementById('reg-rama');
if (regRamaSelect) {
    regRamaSelect.addEventListener('change', function() {
        const campoOtro = document.getElementById('campo-rama-otro');
        if (campoOtro) {
            campoOtro.style.display = this.value === 'otro' ? 'flex' : 'none';
        }
    });
}

/* --- Fecha máxima de nacimiento (hoy) --- */

const regNacimiento = document.getElementById('reg-nacimiento');
if (regNacimiento) {
    regNacimiento.max = new Date().toISOString().split('T')[0];
}

/* --- LOGIN --- */

function handleLogin(e) {
    e.preventDefault();

    const usuario = document.getElementById('login-usuario').value.trim();
    const pass    = document.getElementById('login-pass').value;
    let valido    = true;

    limpiarErrores(['err-login-usuario', 'err-login-pass']);
    limpiarInvalido('login-usuario');
    limpiarInvalido('login-pass');

    if (!usuario) {
        mostrarError('err-login-usuario', 'Ingresá tu usuario o email.');
        marcarInvalido('login-usuario');
        valido = false;
    }
    if (!pass) {
        mostrarError('err-login-pass', 'Ingresá tu contraseña.');
        marcarInvalido('login-pass');
        valido = false;
    }

    if (!valido) return;

    /* Buscar usuario en localStorage */
    const usuarios = JSON.parse(localStorage.getItem('neo_usuarios') || '[]');
    const encontrado = usuarios.find(function(u) {
        return (u.alias === usuario || u.email === usuario) && u.pass === pass;
    });

    if (!encontrado) {
        mostrarError('err-login-pass', 'Usuario o contraseña incorrectos.');
        marcarInvalido('login-pass');
        return;
    }

    /* Guardar sesión */
    localStorage.setItem('neo_sesion', JSON.stringify(encontrado));
    activarSesion(encontrado);
    cerrarAuth();
}

/* --- REGISTRO --- */

function handleRegistro(e) {
    e.preventDefault();

    const errIds = [
        'err-reg-nombre', 'err-reg-apellido', 'err-reg-alias',
        'err-reg-nacionalidad', 'err-reg-nacimiento', 'err-reg-email',
        'err-reg-email-confirm', 'err-reg-rama', 'err-reg-pass',
        'err-reg-pass-confirm', 'err-reg-consentimiento'
    ];
    limpiarErrores(errIds);

    const campos = [
        'reg-nombre', 'reg-apellido', 'reg-alias', 'reg-nacionalidad',
        'reg-nacimiento', 'reg-email', 'reg-email-confirm',
        'reg-pass', 'reg-pass-confirm'
    ];
    campos.forEach(function(id) { limpiarInvalido(id); });

    const nombre       = document.getElementById('reg-nombre').value.trim();
    const apellido     = document.getElementById('reg-apellido').value.trim();
    const alias        = document.getElementById('reg-alias').value.trim();
    const nacionalidad = document.getElementById('reg-nacionalidad').value.trim();
    const nacimiento   = document.getElementById('reg-nacimiento').value;
    const email        = document.getElementById('reg-email').value.trim();
    const emailConf    = document.getElementById('reg-email-confirm').value.trim();
    const telefono     = document.getElementById('reg-telefono').value.trim();
    const instagram    = document.getElementById('reg-instagram').value.trim();
    const behance      = document.getElementById('reg-behance').value.trim();
    const rama         = document.getElementById('reg-rama').value;
    const ramaOtro     = document.getElementById('reg-rama-otro').value.trim();
    const pass         = document.getElementById('reg-pass').value;
    const passConf     = document.getElementById('reg-pass-confirm').value;
    const consentimiento = document.getElementById('reg-consentimiento').checked;

    let valido = true;

    if (!nombre)       { mostrarError('err-reg-nombre',       'Campo requerido.'); marcarInvalido('reg-nombre');       valido = false; }
    if (!apellido)     { mostrarError('err-reg-apellido',     'Campo requerido.'); marcarInvalido('reg-apellido');     valido = false; }
    if (!alias)        { mostrarError('err-reg-alias',        'Elegí un alias.');  marcarInvalido('reg-alias');        valido = false; }
    if (!nacionalidad) { mostrarError('err-reg-nacionalidad', 'Campo requerido.'); marcarInvalido('reg-nacionalidad'); valido = false; }
    if (!nacimiento)   { mostrarError('err-reg-nacimiento',   'Seleccioná tu fecha de nacimiento.'); marcarInvalido('reg-nacimiento'); valido = false; }
    if (!rama)         { mostrarError('err-reg-rama',         'Seleccioná una rama.'); marcarInvalido('reg-rama');     valido = false; }

    if (!email || !validarEmail(email)) {
        mostrarError('err-reg-email', 'Ingresá un email válido.');
        marcarInvalido('reg-email');
        valido = false;
    }
    if (email !== emailConf) {
        mostrarError('err-reg-email-confirm', 'Los emails no coinciden.');
        marcarInvalido('reg-email-confirm');
        valido = false;
    }

    const v = validarPassword(pass);
    if (!v.largo || !v.mayus || !v.numero || !v.especial) {
        mostrarError('err-reg-pass', 'La contraseña no cumple los requisitos.');
        marcarInvalido('reg-pass');
        valido = false;
    }
    if (pass !== passConf) {
        mostrarError('err-reg-pass-confirm', 'Las contraseñas no coinciden.');
        marcarInvalido('reg-pass-confirm');
        valido = false;
    }
    if (!consentimiento) {
        mostrarError('err-reg-consentimiento', 'Debés aceptar para continuar.');
        valido = false;
    }

    if (!valido) return;

    /* Verificar alias y email únicos */
    const usuarios = JSON.parse(localStorage.getItem('neo_usuarios') || '[]');
    if (usuarios.find(function(u) { return u.alias === alias; })) {
        mostrarError('err-reg-alias', 'Ese alias ya está en uso.');
        marcarInvalido('reg-alias');
        return;
    }
    if (usuarios.find(function(u) { return u.email === email; })) {
        mostrarError('err-reg-email', 'Ese email ya está registrado.');
        marcarInvalido('reg-email');
        return;
    }

    /* Guardar usuario */
    const nuevoUsuario = {
        nombre, apellido, alias, nacionalidad, nacimiento,
        email, telefono, instagram, behance,
        rama: rama === 'otro' ? ramaOtro : rama,
        pass
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('neo_usuarios', JSON.stringify(usuarios));
    localStorage.setItem('neo_sesion', JSON.stringify(nuevoUsuario));

    /* Mostrar éxito */
    document.getElementById('auth-exito-texto').textContent =
        '¡Hola, ' + (alias || nombre) + '! Tu cuenta fue creada. Ya podés explorar el Neoplasticismo.';
    switchTab('exito');
    activarSesion(nuevoUsuario);
}

/* --- RECUPERAR CONTRASEÑA --- */

function handleRecuperar(e) {
    e.preventDefault();
    const email = document.getElementById('rec-email').value.trim();
    limpiarErrores(['err-rec-email']);
    limpiarInvalido('rec-email');

    if (!email || !validarEmail(email)) {
        mostrarError('err-rec-email', 'Ingresá un email válido.');
        marcarInvalido('rec-email');
        return;
    }

    /* En producción esto iría al servidor — por ahora mostramos confirmación */
    alert('Si ese email está registrado, recibirás las instrucciones pronto.');
    switchTab('login');
}

/* --- ACTIVAR SESIÓN EN NAVBAR --- */

function activarSesion(usuario) {
    const btnIngresar = document.getElementById('btn-abrir-auth');
    const navUsuario  = document.getElementById('navbar-usuario');
    const navNombre   = document.getElementById('navbar-usuario-nombre');

    if (btnIngresar) btnIngresar.style.display = 'none';
    if (navUsuario)  navUsuario.style.display  = 'flex';
    if (navNombre)   navNombre.textContent = usuario.alias || usuario.nombre;
}

/* --- CERRAR SESIÓN --- */

function cerrarSesion() {
    localStorage.removeItem('neo_sesion');

    const btnIngresar = document.getElementById('btn-abrir-auth');
    const navUsuario  = document.getElementById('navbar-usuario');

    if (btnIngresar) btnIngresar.style.display = 'flex';
    if (navUsuario)  navUsuario.style.display  = 'none';
}

/* --- VERIFICAR SESIÓN AL CARGAR LA PÁGINA --- */

function verificarSesionAlCargar() {
    const sesion = localStorage.getItem('neo_sesion');
    if (sesion) {
        try {
            activarSesion(JSON.parse(sesion));
        } catch(e) {
            localStorage.removeItem('neo_sesion');
        }
    }
};

/* F-FORO Y PUBLICACIONES */
/* ============================================================
   DATOS DE PUBLICACIONES POR RAMA
============================================================ */

const publicacionesData = {

    pintura: [
        {
            id: 'pintura-01',
            alias: '@neo.pigmento',
            nombre: 'Lucía Ferreyra',
            pais: 'Argentina',
            descripcion: 'Serie de acrílicos sobre tela explorando la grilla ortogonal y el color puro como lenguaje emocional.',
            resena: 'Lucía trabaja desde Rosario con técnicas mixtas que dialogan con la tradición de Mondrian, reinterpretando el equilibrio dinámico desde una perspectiva latinoamericana contemporánea.',
            instagram: '@neo.pigmento',
            behance: '',
            portada: '../img/6-foroypublicaciones.pintura-01.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-01.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-02',
            alias: '@planos.primarios',
            nombre: 'Martín Solá',
            pais: 'Uruguay',
            descripcion: 'Díptico que explora la tensión entre planos de color y el espacio en blanco como silencio visual.',
            resena: 'Martín estudió Bellas Artes en Montevideo y desarrolla su práctica en torno al lenguaje geométrico abstracto, con énfasis en la relación entre formato y composición.',
            instagram: '@planos.primarios',
            behance: 'behance.net/martinsolarte',
            portada: '../img/6-foroypublicaciones.pintura-02a.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-02a.jpg', '../img/6-foroypublicaciones.pintura-02b.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-03',
            alias: '@grid.studio',
            nombre: 'Valentina Cruz',
            pais: 'Chile',
            descripcion: 'Experimentación con proporciones áureas y paleta primaria sobre soporte de gran formato.',
            resena: 'Valentina combina el rigor matemático del Neoplasticismo con procesos gestálticos de composición. Sus obras investigan la percepción del equilibrio en formatos murales.',
            instagram: '@grid.studio',
            behance: '',
            portada: '../img/6-foroypublicaciones.pintura-03.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-03.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-04',
            alias: '@lienzo.recto',
            nombre: 'Andrés Blanco',
            pais: 'España',
            descripcion: 'Reducción formal al plano negro: una investigación sobre la ausencia del color en el sistema neoplasticista.',
            resena: 'Andrés explora los límites del vocabulario De Stijl mediante la eliminación progresiva del color, poniendo en tensión la línea y el fondo en su serie "Vaciado".',
            instagram: '',
            behance: 'behance.net/andresblanco',
            portada: '../img/6-foroypublicaciones.pintura-04.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-04.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-05',
            alias: '@atlas.color',
            nombre: 'Inés Rodríguez',
            pais: 'México',
            descripcion: 'Serie fotográfica-pictórica que fusiona el archivo documental con la intervención geométrica.',
            resena: 'Inés trabaja en la intersección de la fotografía y la pintura geométrica. Su práctica parte del archivo visual latinoamericano para construir narrativas abstractas con rigor formal neoplasticista.',
            instagram: '@atlas.color',
            behance: 'behance.net/inesrodriguez',
            portada: '../img/6-foroypublicaciones.pintura-05a.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-05a.jpg', '../img/6-foroypublicaciones.pintura-05b.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-06',
            alias: '@forma.pura',
            nombre: 'Diego Méndez',
            pais: 'Colombia',
            descripcion: 'Exploración de la diagonal prohibida: tensión entre el dogma ortogonal y el dinamismo visual.',
            resena: 'Diego dialoga abiertamente con el Elementarismo de Van Doesburg, incorporando la diagonal como elemento disruptivo dentro de una composición de base neoplasticista.',
            instagram: '@forma.pura',
            behance: '',
            portada: '../img/6-foroypublicaciones.pintura-06.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-06.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-07',
            alias: '@retina.roja',
            nombre: 'Florencia Aibar',
            pais: 'Argentina',
            descripcion: 'Serie de monocromos con intervención lineal negra. El color como campo de investigación.',
            resena: 'Florencia es egresada de la UNA y trabaja la pintura como sistema. Su investigación sobre el monocromo dentro de la tradición geométrica la ha llevado a explorar las posibilidades del rojo en diferentes soportes y escalas.',
            instagram: '@retina.roja',
            behance: 'behance.net/florenciaaibar',
            portada: '../img/6-foroypublicaciones.pintura-07.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-07.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-08',
            alias: '@amarillo.norte',
            nombre: 'Rodrigo Suárez',
            pais: 'Perú',
            descripcion: 'El amarillo como protagonista: variaciones de valor y relación con el blanco en serie de 12 piezas.',
            resena: 'Rodrigo investiga la psicología del color dentro del marco formal del Neoplasticismo, tomando el amarillo como eje conductor de una serie pictórica que explora sus variaciones perceptivas.',
            instagram: '@amarillo.norte',
            behance: '',
            portada: '../img/6-foroypublicaciones.pintura-08.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-08.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-09',
            alias: '@azul.fijo',
            nombre: 'Camila Torres',
            pais: 'Argentina',
            descripcion: 'Composición en torno al azul primario y su relación con el peso visual de la grilla negra.',
            resena: 'Camila es estudiante avanzada de Diseño Gráfico y desarrolla esta serie pictórica como exploración extracurricular, investigando la intersección entre diseño y pintura abstracta geométrica.',
            instagram: '@azul.fijo',
            behance: 'behance.net/camilatorres',
            portada: '../img/6-foroypublicaciones.pintura-09.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-09.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        },
        {
            id: 'pintura-10',
            alias: '@campo.blanco',
            nombre: 'Pablo Herrera',
            pais: 'Bolivia',
            descripcion: 'El blanco como espacio activo: investigación sobre la relación figura-fondo en la tradición De Stijl.',
            resena: 'Pablo trabaja en La Paz con acrílicos y pintura industrial sobre madera cruda. Su práctica dialoga con la tradición neoplasticista desde una mirada contemporánea que incorpora materiales locales.',
            instagram: '',
            behance: 'behance.net/pabloherrera',
            portada: '../img/6-foroypublicaciones.pintura-10.jpg',
            fotos: ['../img/6-foroypublicaciones.pintura-10.jpg'],
            rama: 'pintura', ramaLabel: 'Pintura', ramaIcono: '../img/a-img-icono-pintura.png'
        }
    ],

    arquitectura: [
        {
            id: 'arq-01',
            alias: '@espacio.neo',
            nombre: 'Sebastián Mira',
            pais: 'Países Bajos',
            descripcion: 'Vivienda colectiva en Utrecht con fachadas articuladas mediante planos de color primario y estructura ortogonal.',
            resena: 'Sebastián es arquitecto graduado en la TU Delft. Su proyecto de vivienda colectiva recupera los principios del Neoplasticismo aplicados a la arquitectura residencial contemporánea.',
            instagram: '@espacio.neo',
            behance: 'behance.net/sebastianmira',
            portada: '../img/6-foroypublicaciones.arquitectura-01a.avif',
            fotos: [
                '../img/6-foroypublicaciones.arquitectura-01a.avif',
                '../img/6-foroypublicaciones.arquitectura-01b.jpg',
                '../img/6-foroypublicaciones.arquitectura-01c.jpg',
                '../img/6-foroypublicaciones.arquitectura-01d.jpg'
            ],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        },
        {
            id: 'arq-02',
            alias: '@planta.libre',
            nombre: 'Ana Kovács',
            pais: 'Hungría',
            descripcion: 'Análisis y reinterpretación de la planta libre en la Casa Schröder aplicada a hábitat mínimo contemporáneo.',
            resena: 'Ana investiga la planta libre como concepto y su vigencia en el diseño de hábitat mínimo. Su proyecto reformula los paneles corredizos de Rietveld con tecnología de particiones actuales.',
            instagram: '@planta.libre',
            behance: '',
            portada: '../img/6-foroypublicaciones.arquitectura-02.jpg',
            fotos: ['../img/6-foroypublicaciones.arquitectura-02.jpg'],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        },
        {
            id: 'arq-03',
            alias: '@muro.primario',
            nombre: 'Lucas Ferreira',
            pais: 'Brasil',
            descripcion: 'Interiorismo de local comercial con aplicación de los cuatro colores neoplasticistas sobre planos ortogonales.',
            resena: 'Lucas trabaja en São Paulo como diseñador de interiores. Este proyecto de local comercial en Vila Madalena aplica rigurosamente el vocabulario formal del Neoplasticismo al espacio de retail.',
            instagram: '@muro.primario',
            behance: 'behance.net/lucasferreira',
            portada: '../img/6-foroypublicaciones.arquitectura-03.jpg',
            fotos: ['../img/6-foroypublicaciones.arquitectura-03.jpg'],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        },
        {
            id: 'arq-04',
            alias: '@linea.constructiva',
            nombre: 'María José Ríos',
            pais: 'Argentina',
            descripcion: 'Propuesta para pabellón cultural efímero: estructura de acero y vidrio con planos de color primario desmontables.',
            resena: 'María José es arquitecta e investiga la arquitectura efímera como espacio de experimentación formal. Su pabellón fue presentado como proyecto final de posgrado en la UBA.',
            instagram: '',
            behance: 'behance.net/mjrios',
            portada: '../img/6-foroypublicaciones.arquitectura-04.jpg',
            fotos: ['../img/6-foroypublicaciones.arquitectura-04.jpg'],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        },
        {
            id: 'arq-05',
            alias: '@tectonica.neo',
            nombre: 'Johan Bakker',
            pais: 'Bélgica',
            descripcion: 'Análisis tectónico de la obra de J.J.P. Oud aplicado a un conjunto de vivienda social en Amberes.',
            resena: 'Johan es investigador y arquitecto. Su trabajo retoma la metodología proyectual de Oud —vivienda social, prefabricación, color aplicado— para desarrollar un conjunto habitacional en el barrio de Borgerhout.',
            instagram: '@tectonica.neo',
            behance: 'behance.net/johanbakker',
            portada: '../img/6-foroypublicaciones.arquitectura-05.jpg',
            fotos: ['../img/6-foroypublicaciones.arquitectura-05.jpg'],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        },
        {
            id: 'arq-06',
            alias: '@cubierta.roja',
            nombre: 'Sofía Andrade',
            pais: 'Ecuador',
            descripcion: 'Casa unifamiliar en Quito: volumetría ortogonal, cubierta plana y fachada articulada con los tres colores primarios.',
            resena: 'Sofía desarrolló esta vivienda unifamiliar como proyecto de tesis, explorando la aplicabilidad del lenguaje neoplasticista en el contexto climático y cultural ecuatoriano.',
            instagram: '@cubierta.roja',
            behance: '',
            portada: '../img/6-foroypublicaciones.arquitectura-06.jpg',
            fotos: ['../img/6-foroypublicaciones.arquitectura-06.jpg'],
            rama: 'arquitectura', ramaLabel: 'Arquitectura', ramaIcono: '../img/a-img-icono-arquitectura.png'
        }
    ],

    disenoindustrial: [
        {
            id: 'di-01', alias: '@objeto.neo', nombre: 'Felipe Crespo', pais: 'España',
            descripcion: 'Lámpara de mesa con estructura modular ortogonal y difusor en los tres colores primarios.',
            resena: 'Felipe es diseñador industrial graduado en Barcelona. Su lámpara modular explora la estructura portante visible como elemento compositivo, en diálogo directo con la Silla Roja y Azul de Rietveld.',
            instagram: '@objeto.neo', behance: 'behance.net/felipecrespo',
            portada: '../img/6-foroypublicaciones.disenoindustrial-01.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-01.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-02', alias: '@grid.product', nombre: 'Tamara Bloch', pais: 'Alemania',
            descripcion: 'Mesa auxiliar de madera maciza: geometría pura, color primario en los planos de apoyo.',
            resena: 'Tamara diseña desde Berlín objetos de mobiliario que reinterpretan la tradición De Stijl con materiales y procesos de producción contemporáneos.',
            instagram: '', behance: 'behance.net/tamarabloch',
            portada: '../img/6-foroypublicaciones.disenoindustrial-02.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-02.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-03', alias: '@forma.util', nombre: 'Nicolás Paz', pais: 'Argentina',
            descripcion: 'Set de vajilla con decoración geométrica neoplasticista: línea negra y planos de color en cerámica.',
            resena: 'Nicolás trabaja en Mendoza con cerámica artesanal. Su set de vajilla traslada el vocabulario formal del Neoplasticismo al objeto cotidiano, democratizando el acceso a la estética del movimiento.',
            instagram: '@forma.util', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-03.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-03.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-04', alias: '@estructura.visible', nombre: 'Clara Muñoz', pais: 'Colombia',
            descripcion: 'Silla de líneas ortogonales en varilla metálica: la estructura como ornamento.',
            resena: 'Clara investiga la relación entre estructura y forma en el mobiliario. Su silla de varilla metálica expone el esqueleto constructivo como elemento estético central, en la tradición de la Silla Berlín de Rietveld.',
            instagram: '@estructura.visible', behance: 'behance.net/claramunoz',
            portada: '../img/6-foroypublicaciones.disenoindustrial-04.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-04.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-05', alias: '@modulo.rojo', nombre: 'Agustín Vera', pais: 'Chile',
            descripcion: 'Sistema modular de estantería con piezas intercambiables en los cuatro colores neoplasticistas.',
            resena: 'Agustín desarrolló este sistema como proyecto de tesis de diseño industrial, explorando la flexibilidad y adaptabilidad del objeto a distintos contextos habitacionales.',
            instagram: '@modulo.rojo', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-05.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-05.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-06', alias: '@plano.tactil', nombre: 'Renata Souza', pais: 'Brasil',
            descripcion: 'Colección de almohadones y textiles con pattern neoplasticista para tapicería de interiores.',
            resena: 'Renata diseña textiles en São Paulo. Su colección de almohadones y tapicería traslada el lenguaje geométrico del Neoplasticismo al plano textil, explorando la textura como variable visual.',
            instagram: '@plano.tactil', behance: 'behance.net/renatasouza',
            portada: '../img/6-foroypublicaciones.disenoindustrial-06.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-06.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-07', alias: '@neo.objeto', nombre: 'Emilio Fonseca', pais: 'Portugal',
            descripcion: 'Luminaria de techo en acero lacado: composición de planos de colores primarios suspendidos.',
            resena: 'Emilio trabaja en Lisboa en el campo del diseño de iluminación. Su luminaria suspendida recupera la lógica compositiva de Mondrian en un objeto tridimensional funcional.',
            instagram: '@neo.objeto', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-07.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-07.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-08', alias: '@cubo.util', nombre: 'Mariana Lopes', pais: 'México',
            descripcion: 'Juego de escritorio con organizador modular ortogonal en madera natural y color primario.',
            resena: 'Mariana diseña objetos de escritorio en Ciudad de México. Su organizador modular aplica los principios del sistema De Stijl al producto de oficina, combinando madera natural con acabados en color primario.',
            instagram: '@cubo.util', behance: 'behance.net/marianalopes',
            portada: '../img/6-foroypublicaciones.disenoindustrial-08.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-08.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-09', alias: '@eje.vertical', nombre: 'Ricardo Alves', pais: 'Venezuela',
            descripcion: 'Perchero de pie con estructura de varillas en ángulo recto y perillas de color primario.',
            resena: 'Ricardo trabaja el diseño de mobiliario desde Caracas. Su perchero es un objeto funcional que, como la Silla Roja y Azul, exhibe con orgullo su estructura como lenguaje formal.',
            instagram: '', behance: 'behance.net/ricardoalves',
            portada: '../img/6-foroypublicaciones.disenoindustrial-09.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-09.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-10', alias: '@trama.neo', nombre: 'Julia Navarro', pais: 'Uruguay',
            descripcion: 'Alfombra tejida en lana con composición geométrica neoplasticista de 200×200 cm.',
            resena: 'Julia combina la tradición artesanal del tejido uruguayo con el lenguaje formal del Neoplasticismo. Su alfombra es pieza única, tejida a mano en telar de cuatro marcos.',
            instagram: '@trama.neo', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-10.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-10.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-11', alias: '@volumen.primario', nombre: 'Pablo Sáez', pais: 'Argentina',
            descripcion: 'Escultura funcional: mesa de centro en acrílico de colores primarios con estructura de acero negro.',
            resena: 'Pablo trabaja en la intersección del diseño industrial y la escultura. Su mesa de centro cuestiona los límites entre objeto funcional y obra de arte, dentro del marco formal del Neoplasticismo.',
            instagram: '@volumen.primario', behance: 'behance.net/pablosaez',
            portada: '../img/6-foroypublicaciones.disenoindustrial-11.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-11.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-13', alias: '@linea.objeto', nombre: 'Carla Medina', pais: 'Paraguay',
            descripcion: 'Juego de portarretratos modulares en madera y acrílico con sistema de ensamble sin tornillos.',
            resena: 'Carla diseña en Asunción objetos para el hogar que dialogan con la tradición geométrica europea desde una producción local y artesanal.',
            instagram: '@linea.objeto', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-13.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-13.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-14', alias: '@neo.mueble', nombre: 'Hernán Giménez', pais: 'Argentina',
            descripcion: 'Biblioteca de pared en módulos de madera con frentes pintados en color primario.',
            resena: 'Hernán trabaja como ebanista y diseñador de interiores en Buenos Aires. Esta biblioteca modular puede reconfigurarse según el espacio disponible, manteniendo la coherencia del sistema formal neoplasticista.',
            instagram: '', behance: 'behance.net/hernangimenez',
            portada: '../img/6-foroypublicaciones.disenoindustrial-14.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-14.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-15', alias: '@plano.asiento', nombre: 'Ignacio Ruíz', pais: 'Bolivia',
            descripcion: 'Banqueta apilable en chapa doblada: reducción al plano mínimo y estructura visible.',
            resena: 'Ignacio desarrolla diseño de producto en La Paz con materiales industriales accesibles. Su banqueta es producible en serie con mínima inversión, democratizando el acceso al diseño neoplasticista.',
            instagram: '@plano.asiento', behance: '',
            portada: '../img/6-foroypublicaciones.disenoindustrial-15.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-15.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'di-16', alias: '@neo.contenedor', nombre: 'Sofía Bravo', pais: 'Ecuador',
            descripcion: 'Macetero de cerámica con patrón geométrico neoplasticista: color y línea como ornamento mínimo.',
            resena: 'Sofía trabaja en Quito con cerámica artesanal. Su colección de maceteros lleva el lenguaje geométrico del Neoplasticismo al objeto doméstico cotidiano en pequeño formato.',
            instagram: '@neo.contenedor', behance: 'behance.net/sofiabravo',
            portada: '../img/6-foroypublicaciones.disenoindustrial-16.jpg',
            fotos: ['../img/6-foroypublicaciones.disenoindustrial-16.jpg'],
            rama: 'disenoindustrial', ramaLabel: 'Diseño Industrial', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        }
    ],

    disenografico: [
        {
            id: 'dg-01', alias: '@grid.type', nombre: 'Elena Mora', pais: 'España',
            descripcion: 'Sistema de identidad visual para estudio de arte basado en la grilla neoplasticista.',
            resena: 'Elena es diseñadora gráfica en Madrid. Su sistema de identidad visual recupera los principios tipográficos y compositivos del Neoplasticismo para articular la comunicación de un estudio de arte contemporáneo.',
            instagram: '@grid.type', behance: 'behance.net/elenamora',
            portada: '../img/6-foroypublicaciones.disenografico-01.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-01.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'dg-02', alias: '@tipografia.pura', nombre: 'Marcos Vidal', pais: 'Argentina',
            descripcion: 'Familia tipográfica modular construida sobre grilla cuadrada de inspiración neoplasticista.',
            resena: 'Marcos investiga el diseño tipográfico desde Buenos Aires. Su alfabeto modular toma como punto de partida el trabajo tipográfico de Van Doesburg, actualizando sus principios con herramientas digitales contemporáneas.',
            instagram: '@tipografia.pura', behance: 'behance.net/marcosvidal',
            portada: '../img/6-foroypublicaciones.disenografico-02.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-02.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'dg-03', alias: '@analisis.neo', nombre: 'Valentina Rueda',
            pais: 'Colombia',
            descripcion: 'Análisis compositivo de obras neoplasticistas: deconstrucción de la grilla, el color y la proporción.',
            resena: 'Valentina es estudiante de Diseño Gráfico en la Universidad de los Andes. Este trabajo académico descompone la estructura compositiva de tres obras clave del Neoplasticismo, revelando los sistemas formales subyacentes.',
            instagram: '', behance: 'behance.net/valentinarueda',
            portada: '../img/6-foroypublicaciones.disenografico-03.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-03.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'dg-04', alias: '@afiche.puro', nombre: 'Luciana Pont', pais: 'Argentina',
            descripcion: 'Serie de afiches de conciertos de música contemporánea con lenguaje visual De Stijl.',
            resena: 'Luciana es diseñadora gráfica en Córdoba. Su serie de afiches para ciclos de música contemporánea aplica el vocabulario visual neoplasticista —grilla, tipografía de palo seco, color primario— al campo del diseño editorial para espectáculos.',
            instagram: '@afiche.puro', behance: '',
            portada: '../img/6-foroypublicaciones.disenografico-04.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-04.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'dg-05', alias: '@retícula.viva', nombre: 'Diego Soto', pais: 'Chile',
            descripcion: 'Packaging para línea de productos orgánicos: austeridad formal y color primario como señal de identidad.',
            resena: 'Diego trabaja en Santiago en diseño de packaging. Su propuesta para una línea de productos orgánicos rompe con los códigos visuales habituales del sector, apostando por la austeridad geométrica del Neoplasticismo como diferenciador.',
            instagram: '@reticula.viva', behance: 'behance.net/diegosoto',
            portada: '../img/6-foroypublicaciones.disenografico-05.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-05.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'dg-06', alias: '@neo.editorial', nombre: 'Paula Espinosa', pais: 'México',
            descripcion: 'Diseño editorial de catálogo de arte con sistema modular de grilla neoplasticista.',
            resena: 'Paula diseña publicaciones de arte en Ciudad de México. Su catálogo aplica un sistema de grilla estricta y jerarquía tipográfica inspirada en la tradición editorial De Stijl.',
            instagram: '@neo.editorial', behance: 'behance.net/paulaespinosa',
            portada: '../img/6-foroypublicaciones.disenografico-06.jpg',
            fotos: ['../img/6-foroypublicaciones.disenografico-06.jpg'],
            rama: 'disenografico', ramaLabel: 'Diseño Gráfico', ramaIcono: '../img/a-img-icono-disenografico.png'
        }
    ],

    indumentaria: [
        {
            id: 'ind-01', alias: '@costura.neo', nombre: 'Romina Farías', pais: 'Argentina',
            descripcion: 'Colección cápsula de cinco prendas con aplicaciones geométricas en los colores primarios del Neoplasticismo.',
            resena: 'Romina es diseñadora de indumentaria egresada de la Universidad de Palermo. Su colección cápsula dialoga explícitamente con los principios formales del Neoplasticismo, llevando la grilla y el color primario a la construcción de la prenda.',
            instagram: '@costura.neo', behance: '',
            portada: '../img/6-foroypublicaciones.indumentaria-01.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-01.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-02', alias: '@plano.textil', nombre: 'Andrea Gómez', pais: 'Colombia',
            descripcion: 'Serie de 5 looks con construcción geométrica y paleta primaria sobre base blanca.',
            resena: 'Andrea trabaja en Bogotá como diseñadora de moda. Su serie de cinco looks aplica los principios compositivos del Neoplasticismo a la construcción de la prenda, tratando cada pieza como un plano en el espacio tridimensional del cuerpo.',
            instagram: '@plano.textil', behance: 'behance.net/andreagomez',
            portada: '../img/6-foroypublicaciones.indumentaria-02.jpg',
            fotos: [
                '../img/6-foroypublicaciones.indumentaria-02.jpg',
                '../img/6-foroypublicaciones.indumentaria-03.jpg',
                '../img/6-foroypublicaciones.indumentaria-04.jpg',
                '../img/6-foroypublicaciones.indumentaria-05.jpg',
                '../img/6-foroypublicaciones.indumentaria-06.jpg'
            ],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-07', alias: '@construccion.forma', nombre: 'Natalia Ibáñez', pais: 'Chile',
            descripcion: 'Dos prendas estructuradas con volumen geométrico y color primario como eje constructivo.',
            resena: 'Natalia investiga la construcción de volumen en la indumentaria desde Santiago. Sus prendas exploran la tridimensionalidad de la geometría neoplasticista aplicada al cuerpo como soporte.',
            instagram: '@construccion.forma', behance: '',
            portada: '../img/6-foroypublicaciones.indumentaria-07a.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-07a.jpg', '../img/6-foroypublicaciones.indumentaria-07b.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-08', alias: '@tejido.geo', nombre: 'Paula Ramos', pais: 'Perú',
            descripcion: 'Tejido jacquard con patrón geométrico neoplasticista integrado en la trama del textil.',
            resena: 'Paula combina la tradición textil andina con la geometría del Neoplasticismo. Su tejido jacquard integra el patrón en la estructura misma del textil, sin intervención posterior.',
            instagram: '@tejido.geo', behance: 'behance.net/paularamos',
            portada: '../img/6-foroypublicaciones.indumentaria-08.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-08.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-09', alias: '@accesorio.primo', nombre: 'Lucía Vargas', pais: 'Brasil',
            descripcion: 'Colección de accesorios —cinturones, collares y carteras— con motivos neoplasticistas en cuero y acrílico.',
            resena: 'Lucía diseña accesorios en Río de Janeiro. Su colección lleva el lenguaje geométrico del Neoplasticismo al accesorio de moda, trabajando con cuero natural y acrílico de color primario.',
            instagram: '@accesorio.primo', behance: '',
            portada: '../img/6-foroypublicaciones.indumentaria-09.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-09.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-10', alias: '@patron.geometrico', nombre: 'Sofía Quispe', pais: 'Bolivia',
            descripcion: 'Estampado digital de patrón neoplasticista aplicado sobre tela de algodón para confección.',
            resena: 'Sofía diseña estampados digitales en Cochabamba. Su patrón neoplasticista está disponible para licenciar a productoras textiles que quieran incorporar este lenguaje a sus colecciones.',
            instagram: '@patron.geometrico', behance: 'behance.net/sofiaquispe',
            portada: '../img/6-foroypublicaciones.indumentaria-10.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-10.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-11', alias: '@neo.wearable', nombre: 'Carla Pereira', pais: 'Portugal',
            descripcion: 'Colección de joyería geométrica en latón con acabados en color primario.',
            resena: 'Carla trabaja en Porto en el campo de la joyería contemporánea. Su colección lleva la abstracción geométrica del Neoplasticismo a la joya, construyendo piezas que funcionan como esculturas mínimas portables.',
            instagram: '@neo.wearable', behance: '',
            portada: '../img/6-foroypublicaciones.indumentaria-11.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-11.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-12', alias: '@cuerpo.plano', nombre: 'Jimena Salinas', pais: 'Argentina',
            descripcion: 'Exploración de la silueta plana y el corte recto como lenguaje formal en la construcción de la prenda.',
            resena: 'Jimena es estudiante avanzada de Diseño de Indumentaria en la UBA. Este proyecto de tesis explora la silueta plana y el corte recto como lenguaje formal coherente con los principios del Neoplasticismo.',
            instagram: '@cuerpo.plano', behance: 'behance.net/jimenasalinas',
            portada: '../img/6-foroypublicaciones.indumentaria-12.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-12.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        },
        {
            id: 'ind-13', alias: '@zapatilla.intervenida', nombre: 'Tomás Mercado', pais: 'Argentina',
            descripcion: 'Intervención artística de zapatilla base: pintura acrílica con composición neoplasticista sobre calzado.',
            resena: 'Tomás trabaja en Buenos Aires interviniendo objetos de consumo masivo con el lenguaje del Neoplasticismo. Esta pieza única, sobre una zapatilla de marca comercial, cuestiona el límite entre el arte, el diseño y la cultura popular.',
            instagram: '@zapatilla.intervenida', behance: '',
            portada: '../img/6-foroypublicaciones.indumentaria-13.jpg',
            fotos: ['../img/6-foroypublicaciones.indumentaria-13.jpg'],
            rama: 'indumentaria', ramaLabel: 'Indumentaria', ramaIcono: '../img/a-img-icono-disenoindustrial.png'
        }
    ],

    otros: [
        {
            id: 'pub-01', alias: '@neo.publicidad', nombre: 'Renato Vargas', pais: 'Perú',
            descripcion: 'Campaña publicitaria para marca de agua mineral: austeridad formal neoplasticista como posicionamiento premium.',
            resena: 'Renato es director creativo en Lima. Su campaña aplica el vocabulario austero del Neoplasticismo —planos de color, tipografía de palo seco, grilla estricta— al brief de una marca de agua mineral premium.',
            instagram: '@neo.publicidad', behance: 'behance.net/renatovargaz',
            portada: '../img/6-foroypublicaciones.publicidad-01.jpg',
            fotos: ['../img/6-foroypublicaciones.publicidad-01.jpg'],
            rama: 'otros', ramaLabel: 'Otros', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'pub-02', alias: '@motion.geo', nombre: 'Camilo Nieto', pais: 'Colombia',
            descripcion: 'Motion graphics con composiciones animadas inspiradas en la dinámica formal del Neoplasticismo.',
            resena: 'Camilo trabaja en motion design en Medellín. Sus piezas animadas llevan la composición estática del Neoplasticismo al movimiento, explorando la temporalidad como nueva dimensión del lenguaje formal del movimiento.',
            instagram: '@motion.geo', behance: 'behance.net/camilonieto',
            portada: '../img/6-foroypublicaciones.publicidad-02.jpg',
            fotos: ['../img/6-foroypublicaciones.publicidad-02.jpg'],
            rama: 'otros', ramaLabel: 'Otros', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'pub-03', alias: '@neo.mural', nombre: 'Ignacio Valdés', pais: 'Chile',
            descripcion: 'Mural de intervención urbana de 40 m²: Neoplasticismo en el espacio público de Santiago.',
            resena: 'Ignacio trabaja el muralismo urbano desde Santiago. Esta intervención en el barrio Italia recupera el lenguaje formal del Neoplasticismo para el espacio público, dialogando con la tradición del muralismo latinoamericano.',
            instagram: '@neo.mural', behance: '',
            portada: '../img/6-foroypublicaciones.publicidad-03.jpg',
            fotos: ['../img/6-foroypublicaciones.publicidad-03.jpg'],
            rama: 'otros', ramaLabel: 'Otros', ramaIcono: '../img/a-img-icono-disenografico.png'
        },
        {
            id: 'pub-04', alias: '@instalacion.neo', nombre: 'Gabriela Font', pais: 'España',
            descripcion: 'Instalación site-specific en galería: planos de color suspendidos que componen en el espacio tridimensional.',
            resena: 'Gabriela trabaja el arte de instalación en Barcelona. Su obra site-specific para galería lleva la composición neoplasticista al espacio tridimensional, convirtiendo al espectador en parte de la composición misma.',
            instagram: '@instalacion.neo', behance: 'behance.net/gabrielafont',
            portada: '../img/6-foroypublicaciones.publicidad-04.jpg',
            fotos: [
                '../img/6-foroypublicaciones.publicidad-04.jpg',
                '../img/6-foroypublicaciones.publicidad-05.jpg',
                '../img/6-foroypublicaciones.publicidad-06.jpg'
            ],
            rama: 'otros', ramaLabel: 'Otros', ramaIcono: '../img/a-img-icono-disenografico.png'
        }
    ]
};

/* ============================================================
   LABELS Y CONFIGURACIÓN DE RAMAS
============================================================ */

const ramasConfig = {
    pintura:          { label: 'pintura', icono: '../img/a-img-icono-pintura.png' },
    arquitectura:     { label: 'arquitectura', icono: '../img/a-img-icono-arquitectura.png' },
    disenoindustrial: { label: 'diseño industrial', icono: '../img/a-img-icono-disenoindustrial.png' },
    disenografico:    { label: 'diseño gráfico', icono: '../img/a-img-icono-disenografico.png' },
    indumentaria:     { label: 'indumentaria', icono: '../img/a-img-icono-disenoindustrial.png' },
    otros:            { label: 'otros', icono: '../img/a-img-icono-disenografico.png' }
};

let ramaActiva = 'pintura';
let pubActual  = null;

/* ============================================================
   FILTRAR RAMA Y RENDERIZAR CARRUSEL
============================================================ */

function filtrarRama(rama, btnEl) {
    ramaActiva = rama;

    document.querySelectorAll('.foro-card-btn').forEach(function(b) {
        b.classList.remove('activo');
    });
    if (btnEl) btnEl.classList.add('activo');

    const config = ramasConfig[rama];
    document.getElementById('foro-rama-icono').src = config.icono;
    document.getElementById('foro-rama-nombre').textContent = config.label;

    renderizarTrack(rama);
}

function renderizarTrack(rama) {
    const track = document.getElementById('foro-track');
    const pubs  = publicacionesData[rama] || [];

    track.innerHTML = '';

    pubs.forEach(function(pub, i) {
        const redes = construirRedesCard(pub);

        const card = document.createElement('div');
        card.className = 'foro-card' + (i === 0 ? ' activo' : '');

        /* Imagen de fondo */
        card.style.backgroundImage  = 'url("' + pub.portada + '")';
        card.style.backgroundSize   = 'cover';
        card.style.backgroundPosition = 'center center';

        card.setAttribute('data-id',   pub.id);
        card.setAttribute('data-rama', rama);

        card.innerHTML =
            '<div class="foro-card-desc">' +
                '<span class="foro-card-alias">' + pub.alias + '</span>' +
                '<p class="foro-card-texto">' + pub.descripcion + '</p>' +
                '<div class="foro-card-redes">' + redes + '</div>' +
                '<button class="foro-card-btn-mas" onclick="abrirPub(\'' + pub.id + '\', \'' + rama + '\')">' +
                    'más información <i class="bi bi-arrow-right"></i>' +
                '</button>' +
            '</div>';

        card.addEventListener('click', function(e) {
            if (e.target.closest('.foro-card-btn-mas')) return;
            document.querySelectorAll('#foro-track .foro-card').forEach(function(c) {
                c.classList.remove('activo');
            });
            card.classList.add('activo');
        });

        track.appendChild(card);
    });
}

function construirRedesCard(pub) {
    let html = '';
    if (pub.instagram) {
        html += `<a href="https://instagram.com/${pub.instagram.replace('@','')}" target="_blank" class="foro-card-red-icono" title="Instagram"><i class="bi bi-instagram"></i></a>`;
    }
    if (pub.behance) {
        html += `<a href="https://${pub.behance}" target="_blank" class="foro-card-red-icono" title="Behance"><i class="bi bi-behance"></i></a>`;
    }
    return html;
}

/* ============================================================
   MODAL PUBLICACIÓN
============================================================ */

function abrirPub(id, rama) {
    const pubs = publicacionesData[rama] || [];
    const pub  = pubs.find(function(p) { return p.id === id; });
    if (!pub) return;

    pubActual = pub;

    document.getElementById('pub-rama-icono').src       = pub.ramaIcono;
    document.getElementById('pub-rama-label').textContent = pub.ramaLabel;
    document.getElementById('pub-alias').textContent    = pub.alias;
    document.getElementById('pub-nombre').textContent   = pub.nombre;
    document.getElementById('pub-pais').textContent     = pub.pais;
    document.getElementById('pub-resena').textContent   = pub.resena;

    /* Redes */
    const redesEl = document.getElementById('pub-redes');
    redesEl.innerHTML = '';
    if (pub.instagram) {
        redesEl.innerHTML += `<a href="https://instagram.com/${pub.instagram.replace('@','')}" target="_blank" class="modal-pub-red-link"><i class="bi bi-instagram"></i> ${pub.instagram}</a>`;
    }
    if (pub.behance) {
        redesEl.innerHTML += `<a href="https://${pub.behance}" target="_blank" class="modal-pub-red-link"><i class="bi bi-behance"></i> ${pub.behance}</a>`;
    }

    /* Carrusel imágenes */
    const inner = document.getElementById('carrusel-pub-inner');
    const dots  = document.getElementById('carrusel-pub-dots');
    inner.innerHTML = '';
    dots.innerHTML  = '';

    pub.fotos.forEach(function(foto, i) {
        inner.innerHTML += `<div class="carousel-item ${i === 0 ? 'active' : ''}"><img src="${foto}" alt="${pub.alias}"></div>`;
        dots.innerHTML  += `<button type="button" data-bs-target="#carruselPub" data-bs-slide-to="${i}" ${i === 0 ? 'class="active"' : ''} aria-label="Imagen ${i+1}"></button>`;
    });

    const carruselEl = document.getElementById('carruselPub');
    const carruselInst = bootstrap.Carousel.getOrCreateInstance(carruselEl);
    carruselInst.to(0);

    /* Valoración */
    document.getElementById('estrellas-input').setAttribute('data-pub-id', pub.id);
    renderizarEstrellas(pub.id);
    actualizarPromedio(pub.id);

    /* Comentarios */
    renderizarComentarios(pub.id);
    const sesion = localStorage.getItem('neo_sesion');
    document.getElementById('comentario-form').style.display  = sesion ? 'flex' : 'none';
    document.getElementById('comentario-aviso').style.display = sesion ? 'none' : 'block';

    document.getElementById('modal-pub').classList.add('activo');
    document.body.style.overflow = 'hidden';
}

function cerrarPub() {
    document.getElementById('modal-pub').classList.remove('activo');
    document.body.style.overflow = 'auto';
    pubActual = null;
}

document.getElementById('modal-pub').addEventListener('click', function(e) {
    if (e.target === this) cerrarPub();
});

/* ============================================================
   SISTEMA DE VALORACIÓN (localStorage)
============================================================ */

function renderizarEstrellas(pubId) {
    const contenedor = document.getElementById('estrellas-input');
    const valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    const sesion       = localStorage.getItem('neo_sesion');
    let miVoto = 0;

    if (sesion) {
        const usuario = JSON.parse(sesion);
        const key     = pubId + '_' + usuario.alias;
        miVoto = valoraciones[key] || 0;
    }

    contenedor.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.className  = 'estrella-btn' + (i <= miVoto ? ' activo' : '');
        btn.textContent = '★';
        btn.setAttribute('data-valor', i);
        btn.onclick = function() { votar(pubId, i); };
        contenedor.appendChild(btn);
    }
}

function votar(pubId, valor) {
    const sesion = localStorage.getItem('neo_sesion');
    if (!sesion) { abrirAuth('login'); return; }

    const usuario      = JSON.parse(sesion);
    const valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    const key          = pubId + '_' + usuario.alias;

    valoraciones[key] = valor;
    localStorage.setItem('neo_valoraciones', JSON.stringify(valoraciones));

    renderizarEstrellas(pubId);
    actualizarPromedio(pubId);
}

function actualizarPromedio(pubId) {
    const valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    const votos = Object.keys(valoraciones)
        .filter(function(k) { return k.startsWith(pubId + '_'); })
        .map(function(k) { return valoraciones[k]; });

    if (votos.length === 0) {
        document.getElementById('pub-promedio').textContent  = '—';
        document.getElementById('pub-cant-votos').textContent = 'sin valoraciones aún';
        return;
    }

    const suma     = votos.reduce(function(a, b) { return a + b; }, 0);
    const promedio = (suma / votos.length).toFixed(1);
    document.getElementById('pub-promedio').textContent  = '★ ' + promedio;
    document.getElementById('pub-cant-votos').textContent = votos.length + (votos.length === 1 ? ' valoración' : ' valoraciones');
}

/* ============================================================
   SISTEMA DE COMENTARIOS (localStorage)
============================================================ */

function renderizarComentarios(pubId) {
    const todosLosComentarios = JSON.parse(localStorage.getItem('neo_comentarios') || '{}');
    const comentarios = todosLosComentarios[pubId] || [];
    const lista = document.getElementById('comentarios-lista');

    if (comentarios.length === 0) {
        lista.innerHTML = '<p style="font-family:DMSans,sans-serif;font-size:12px;color:#888;margin:0;">Todavía no hay comentarios. ¡Sé el primero!</p>';
        return;
    }

    lista.innerHTML = comentarios.map(function(c) {
        return `<div class="comentario-item">
                    <p class="comentario-item-alias">${c.alias}</p>
                    <p class="comentario-item-texto">${c.texto}</p>
                </div>`;
    }).join('');
}

function enviarComentario() {
    const sesion = localStorage.getItem('neo_sesion');
    if (!sesion || !pubActual) return;

    const usuario = JSON.parse(sesion);
    const texto   = document.getElementById('comentario-input').value.trim();
    if (!texto) return;

    const todosLosComentarios = JSON.parse(localStorage.getItem('neo_comentarios') || '{}');
    if (!todosLosComentarios[pubActual.id]) todosLosComentarios[pubActual.id] = [];

    todosLosComentarios[pubActual.id].push({
        alias: usuario.alias || usuario.nombre,
        texto: texto
    });

    localStorage.setItem('neo_comentarios', JSON.stringify(todosLosComentarios));
    document.getElementById('comentario-input').value = '';
    renderizarComentarios(pubActual.id);
}

/* ============================================================
   INICIALIZACIÓN AL CARGAR LA PÁGINA
============================================================ */

(function initForo() {
    filtrarRama('pintura', document.querySelector('.foro-card-btn.activo'));
})();