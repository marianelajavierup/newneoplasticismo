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