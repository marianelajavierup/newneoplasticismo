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