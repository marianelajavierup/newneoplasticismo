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
   CUBOS Y MODAL AUTORES
============================================================ */

const autoresData = {
    mondrian: {
        nombre: 'Piet Mondrian',
        fechas: '1872 — 1944',
        pais: 'Países Bajos',
        formacion: 'Academia de Bellas Artes de Ámsterdam',
        resena: 'Considerado el principal representante del Neoplasticismo, Mondrian desarrolló un lenguaje visual abstracto basado en líneas horizontales y verticales negras y planos de colores primarios. Dentro del movimiento sus obras más significativas son las series Composición con Rojo, Azul y Amarillo. Fuera del neoplasticismo exploró el cubismo en sus inicios y hacia el final de su vida desarrolló el estilo Broadway Boogie-Woogie, incorporando ritmos dinámicos influenciados por el jazz neoyorquino.',
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
        resena: 'Van der Leck aportó al neoplasticismo su particular uso del color plano y la geometría simple. Sus composiciones dentro del movimiento se caracterizan por figuras fragmentadas en formas rectangulares de colores primarios sobre fondo blanco. Fuera del neoplasticismo, abandonó el grupo relativamente pronto para desarrollar un estilo propio más figurativo, aplicado también al diseño textil y la cerámica.',
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

    // Cargar fotos en carrusel
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