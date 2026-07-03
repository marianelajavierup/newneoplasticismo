/* ============================================================
   NEOPLASTICISMO — SCRIPT.JS
   Laboratorio de Diseño II — Universidad de Palermo 2026
============================================================ */

/*============================================================
A — HOME: FLECHA SCROLL TO TOP
============================================================ */

window.addEventListener('scroll', function() {
    var botonTop = document.querySelector('.scroll-to-top');
    if (!botonTop) return;
    if (window.scrollY > window.innerHeight / 2) {
        botonTop.classList.add('show');
    } else {
        botonTop.classList.remove('show');
    }
});

/* ============================================================
   B — CONTEXTO HISTÓRICO: LÍNEA DE TIEMPO
============================================================ */

var timelineWrapper = document.querySelector('.timeline-wrapper');
if (timelineWrapper) {
    timelineWrapper.addEventListener('wheel', function(e) {
        e.preventDefault();
        timelineWrapper.scrollLeft += e.deltaY * 2;
    }, { passive: false });
}

function abrirModal(titulo, texto, img) {
    var elTitulo = document.getElementById('modal-titulo');
    var elTexto  = document.getElementById('modal-texto');
    var elImg    = document.getElementById('modal-img');
    var modal    = document.getElementById('modal-timeline');
    if (!modal) return;
    if (elTitulo) elTitulo.textContent = titulo;
    if (elTexto)  elTexto.textContent  = texto;
    if (elImg)    elImg.src            = img;
    modal.classList.add('activo');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    var modal = document.getElementById('modal-timeline');
    if (!modal) return;
    modal.classList.remove('activo');
    document.body.style.overflow = 'auto';
}

var modalTimeline = document.getElementById('modal-timeline');
if (modalTimeline) {
    modalTimeline.addEventListener('click', function(e) {
        if (e.target === this) cerrarModal();
    });
}

/* ============================================================
   B — DE STIJL: MODAL MANIFIESTOS
============================================================ */

var manifiestos = [
    {
        titulo: 'Primer Manifiesto De Stijl',
        anio: '1917',
        autores: 'Theo van Doesburg, Piet Mondrian, Bart van der Leck, J.J.P. Oud',
        texto: 'Este periódico se plantea como objetivo contribuir al desarrollo de un nuevo sentido estético. Proclama la búsqueda de un arte nuevo basado en relaciones puras entre forma y color, superando el arte individual hacia un lenguaje universal.',
        img: '../img/de-stijl-img-manifiestoIII.png',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    },
    {
        titulo: 'Segundo Manifiesto De Stijl',
        anio: '1920',
        autores: 'Theo van Doesburg, Piet Mondrian',
        texto: 'Profundiza en los principios del movimiento y amplía su alcance a la arquitectura y el diseño. Van Doesburg expande la visión del neoplasticismo más allá de la pintura, hacia una estética total del entorno construido.',
        img: '../img/de-stijl-img-manifiestoII.png',
        pdf: '../text/manifiesto-de-stijl-1923.pdf'
    },
    {
        titulo: 'Tercer Manifiesto De Stijl',
        anio: '1926',
        autores: 'Theo van Doesburg',
        texto: 'El tercer y último manifiesto amplía la visión del movimiento hacia un arte total que integre todas las disciplinas: pintura, escultura, arquitectura, diseño gráfico y tipografía.',
        img: '../img/de-stijl-img-manifiestoI.png',
        pdf: '../text/manifiesto-de-stijl-1925.pdf'
    }
];

var manifiestoActual = 0;

function abrirManifiesto(numero) {
    manifiestoActual = numero - 1;
    cargarManifiesto(manifiestoActual);
    var modal = document.getElementById('modal-manifiesto');
    if (modal) {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarManifiesto() {
    var modal = document.getElementById('modal-manifiesto');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

function cargarManifiesto(index) {
    var m = manifiestos[index];
    var elTitulo   = document.getElementById('manifiesto-titulo');
    var elAnio     = document.getElementById('manifiesto-anio');
    var elAutores  = document.getElementById('manifiesto-autores');
    var elTexto    = document.getElementById('manifiesto-texto');
    var elImg      = document.getElementById('manifiesto-img');
    var elPdf      = document.getElementById('manifiesto-pdf');
    var btnAnt     = document.getElementById('btn-anterior');
    var btnSig     = document.getElementById('btn-siguiente');
    if (elTitulo)  elTitulo.textContent  = m.titulo;
    if (elAnio)    elAnio.textContent    = m.anio;
    if (elAutores) elAutores.textContent = m.autores;
    if (elTexto)   elTexto.textContent   = m.texto;
    if (elImg)   { elImg.src = m.img; elImg.alt = m.titulo; }
    if (elPdf)     elPdf.href            = m.pdf;
    if (btnAnt)    btnAnt.disabled       = index === 0;
    if (btnSig)    btnSig.disabled       = index === manifiestos.length - 1;
}

function navegarManifiesto(direccion) {
    var nuevo = manifiestoActual + direccion;
    if (nuevo >= 0 && nuevo < manifiestos.length) {
        manifiestoActual = nuevo;
        cargarManifiesto(manifiestoActual);
    }
}

var modalManifiesto = document.getElementById('modal-manifiesto');
if (modalManifiesto) {
    modalManifiesto.addEventListener('click', function(e) {
        if (e.target === this) cerrarManifiesto();
    });
}

/* ============================================================
   C — AUTORES: GRILLA MONDRIAN + MODAL
============================================================ */

var autoresData = {
    mondrian: {
        nombre: 'Piet Mondrian', fechas: '1872 — 1944', pais: 'Países Bajos',
        formacion: 'Academia de Bellas Artes de Ámsterdam',
        resena: 'Considerado el principal representante del Neoplasticismo, Mondrian desarrolló un lenguaje visual abstracto basado en líneas horizontales y verticales negras y planos de colores primarios.',
        fotos: ['../img/c-autores-piet-mondrian-01.webp','../img/c-autores-piet-mondrian-02.webp','../img/c-autores-piet-mondrian-03.jpg']
    },
    doesburg: {
        nombre: 'Theo van Doesburg', fechas: '1883 — 1931', pais: 'Países Bajos',
        formacion: 'Autodidacta, estudió pintura y crítica de arte',
        resena: 'Fundador y motor intelectual del movimiento De Stijl, Van Doesburg redactó los tres manifiestos del grupo y editó la revista homónima.',
        fotos: ['../img/c-autores-theo-van-doesburg-01.webp','../img/c-autores-theo-van-doesburg-02.jpg','../img/c-autores-theo-van-doesburg-03.jpg']
    },
    rietveld: {
        nombre: 'Gerrit Rietveld', fechas: '1888 — 1964', pais: 'Países Bajos',
        formacion: 'Ebanista y arquitecto autodidacta',
        resena: 'Rietveld tradujo los principios neoplasticistas al diseño de mobiliario y la arquitectura. Su obra más icónica es la Silla Roja y Azul (1917) y la Casa Schröder en Utrecht (1924).',
        fotos: ['../img/c-autores-gerrit-rietveld-01.jfif','../img/c-autores-gerrit-rietveld-02.jpg','../img/c-autores-gerrit-rietveld-03.jpg']
    },
    huszar: {
        nombre: 'Vilmos Huszár', fechas: '1884 — 1960', pais: 'Hungría / Países Bajos',
        formacion: 'Academia de Bellas Artes de Budapest y Munich',
        resena: 'Huszár fue uno de los miembros fundadores de De Stijl y diseñó el logotipo de la revista del movimiento.',
        fotos: ['../img/c-autores-vilmos-huszar-01.jpg','../img/c-autores-vilmos-huszar-02.jpg','../img/c-autores-vilmos-huszar-03.jpg']
    },
    vanderleck: {
        nombre: 'Bart van der Leck', fechas: '1876 — 1958', pais: 'Países Bajos',
        formacion: 'Escuela de Artes Aplicadas de Ámsterdam',
        resena: 'Van der Leck aportó al neoplasticismo su particular uso del color plano y la geometría simple.',
        fotos: ['../img/c-autores-bart-van-der-leck-01.jpg','../img/c-autores-bart-van-der-leck-02.jpg','../img/c-autores-bart-van-der-leck-03.jpg']
    },
    oud: {
        nombre: 'Jacobus Johannes Pieter Oud', fechas: '1890 — 1963', pais: 'Países Bajos',
        formacion: 'Escuela de Artes Aplicadas de Ámsterdam y Munich',
        resena: 'J.J.P. Oud fue el principal arquitecto del movimiento De Stijl junto a Rietveld.',
        fotos: ['../img/c-autores-jacobus-johannes-pieter-oud-01.jpg','../img/c-autores-jacobus-johannes-pieter-oud-02.jpg','../img/c-autores-jacobus-johannes-pieter-oud-03.jpg']
    }
};

function abrirAutor(id) {
    var autor = autoresData[id];
    if (!autor) return;
    var elNombre    = document.getElementById('autor-nombre');
    var elFechas    = document.getElementById('autor-fechas');
    var elPais      = document.getElementById('autor-pais');
    var elFormacion = document.getElementById('autor-formacion');
    var elResena    = document.getElementById('autor-resena');
    var inner       = document.getElementById('carrusel-autor-inner');
    var modal       = document.getElementById('modal-autor');
    if (elNombre)    elNombre.textContent    = autor.nombre;
    if (elFechas)    elFechas.textContent    = autor.fechas;
    if (elPais)      elPais.textContent      = autor.pais;
    if (elFormacion) elFormacion.textContent = autor.formacion;
    if (elResena)    elResena.textContent    = autor.resena;
    if (inner) {
        inner.innerHTML = '';
        autor.fotos.forEach(function(foto, i) {
            inner.innerHTML += '<div class="carousel-item ' + (i === 0 ? 'active' : '') + '"><img src="' + foto + '" alt="' + autor.nombre + '"></div>';
        });
    }
    if (modal) {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarAutor() {
    var modal = document.getElementById('modal-autor');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

var modalAutor = document.getElementById('modal-autor');
if (modalAutor) {
    modalAutor.addEventListener('click', function(e) {
        if (e.target === this) cerrarAutor();
    });
}

/* ============================================================
   D — OBRAS: HOTSPOTS + MODAL
============================================================ */

var obrasData = {
    'mondrian-01': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Composición con Rojo, Azul y Amarillo', autor:'Piet Mondrian', anio:'1930', tecnica:'Óleo sobre tela — 46 × 46 cm', resena:'Una de las obras más emblemáticas del Neoplasticismo. Mondrian reduce la pintura a sus elementos esenciales: líneas negras ortogonales y planos de colores primarios sobre fondo blanco.', fotos:['../img/5-obras.pintura-mondrian-01.jpg'], link:'https://www.moma.org/collection/works/79816' },
    'mondrian-02': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Tableau I', autor:'Piet Mondrian', anio:'1921', tecnica:'Óleo sobre tela — 103 × 100 cm', resena:'En Tableau I Mondrian consolida su vocabulario visual neoplasticista: planos rectangulares delimitados por gruesas líneas negras.', fotos:['../img/5-obras.pintura-mondrian-02.jpg'], link:'https://www.moma.org/collection/works/79816' },
    'mondrian-03': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Composición II en Rojo, Azul y Amarillo', autor:'Piet Mondrian', anio:'1929', tecnica:'Óleo sobre tela — 40,3 × 32,1 cm', resena:'Obra de madurez del movimiento. La asimetría controlada genera una tensión visual que Mondrian denominó equilibrio dinámico.', fotos:['../img/5-obras.pintura-mondrian-04.jpg'], link:'https://www.moma.org/collection/works/79002' },
    'mondrian-04': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Trabajo en los muelles ', autor:'Bart van der Leck ', anio:'1916', tecnica:'Óleo sobre tela — 91 × 242 cm', resena:'Trabajo en los muelles es una de las obras más representativas de la transición de Bart van der Leck hacia la abstracción geométrica. Pintada en 1916, muestra figuras de trabajadores portuarios reducidas a formas planas y siluetas esquemáticas sobre fondo blanco, anticipando los principios que definiría el Neoplasticismo un año después. La paleta se limita a los colores primarios — rojo, azul y amarillo — aplicados en planos puros sin gradientes ni sombras, estableciendo el lenguaje visual que Van der Leck aportaría al movimiento De Stijl.', fotos:['../img/5-obras.Van-der-Leck-Tecnne.jpg'], link:'https://krollermuller.nl/en/bart-van-der-leck-work-at-the-docks#' },
    'casa-schroder': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Casa Schröder', autor:'Gerrit Rietveld', anio:'1924', tecnica:'Arquitectura residencial — Utrecht, Países Bajos', resena:'Declarada Patrimonio de la Humanidad por la UNESCO, la Casa Schröder es la materialización tridimensional del Neoplasticismo.', fotos:['../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg','../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg'], link:'https://www.rietveldschroderhuis.nl/en' },
    'casa-schroder-02': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Casa Schröder — Interior', autor:'Gerrit Rietveld', anio:'1924', tecnica:'Vista interior — Utrecht, Países Bajos', resena:'El interior introduce paneles corredizos que permiten transformar el espacio. La planta libre y los colores primarios son fieles al principio neoplasticista.', fotos:['../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg','../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg'], link:'https://www.rietveldschroderhuis.nl/en' },
    'cafe-aubette': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Café Aubette — Salón de Baile', autor:'Theo van Doesburg', anio:'1928', tecnica:'Interiorismo — Estrasburgo, Francia', resena:'El Café Aubette es una de las intervenciones de diseño total del Neoplasticismo. Van Doesburg aplicó su Elementarismo a paredes, techos y pisos.', fotos:['../img/5-obras.arquitectura-cafeaubette-01.jpg'], link:'https://www.archdaily.com/791507/ad-classics-cafe-laubette-strasbourg-theo-van-doesburg' },
    'maison-particuliere': { rama:'diseño grafico', ramaLabel:'Diseño grafico', ramaIcono:'../img/a-img-icono-disenografico.png', titulo:'Contraconstrucción Axonométrica Casa privada.', autor:'Theo van Doesburg', anio:'1923', tecnica:'Gouache sobre litografía - 57,2 x 57,2 cm', resena:'Contraconstrucción es una de las exploraciones más audaces de Van Doesburg en la intersección entre arquitectura y pintura. Ejecutada en 1923 mediante gouache sobre litografía, la obra presenta una vista axonométrica de una vivienda particular donde los planos de colores primarios se despliegan libremente en el espacio, liberándose de los límites de la estructura arquitectónica convencional. Van Doesburg desafía aquí la ortogonalidad estricta de Mondrian, anticipando su posterior concepto del Elementarismo — donde el color actúa como elemento espacial autónomo capaz de transformar y expandir la percepción del volumen construido.', fotos:['../img/5-obras.arquitectura-proyectomaison particuliére1923-theovandoesburg-01.jpg'], link:'https://www.meisterdrucke.es/impresion-art%C3%ADstica/Theo-van-Doesburg/853781/La-Construcci%C3%B3n-del-Espacio---Tiempo-III%2C-1924.html' },
    'silla-rietveld-01': { rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png', titulo:'Silla Roja y Azul', autor:'Gerrit Rietveld', anio:'1917', tecnica:'Madera lacada — 86,5 × 66 × 83,5 cm', resena:'La Silla Roja y Azul es el primer objeto de diseño industrial del Neoplasticismo. Su estructura de listones perpendiculares traduce al espacio tridimensional los principios formales de De Stijl.', fotos:['../img/5-obras.disenoindustrial-sillarietveld.webp','../img/5-obras.disenoindustrial-sillarietveld2.png','../img/5-obras.disenoindustrial-sillarietveld3.jpg'], link:'https://www.moma.org/collection/works/4044' },
    'silla-rietveld-02': { rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png', titulo:'Silla Berlín', autor:'Gerrit Rietveld', anio:'1923', tecnica:'Madera — 84 × 61,5 × 78 cm', resena:'La Silla Berlín es una versión más depurada del lenguaje formal de Rietveld, eliminando el color para concentrarse en la estructura.', fotos:['../img/5-obras.disenoindustrial-sillarietveld2.png','../img/5-obras.disenoindustrial-sillarietveld.webp'], link:'#' },
    'disenografico-01': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'La vaca ', autor:'Theo van Doesburg', anio:'1917', tecnica:'Óleo sobre tela — 37,5 × 63,5 ', resena:'La Vaca es una de las obras más ilustrativas del proceso de abstracción progresiva de Theo van Doesburg. Partiendo de un estudio figurativo del animal, Van Doesburg lo redujo sistemáticamente hasta alcanzar una composición de planos rectangulares de colores primarios sobre fondo neutro. La obra funciona casi como un manifiesto visual del método neoplasticista: la eliminación de todo elemento accidental hasta revelar la estructura geométrica esencial subyacente en la naturaleza.', fotos:['../img/LA VACA 02.jpg'], link:'https://www.moma.org/collection/works/79189' },
    'disenografico-02': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'La vaca ', autor:'Theo van Doesburg', anio:'1917', tecnica:'Óleo sobre tela — 37,5 × 63,5 ', resena:'La Vaca es una de las obras más ilustrativas del proceso de abstracción progresiva de Theo van Doesburg. Partiendo de un estudio figurativo del animal, Van Doesburg lo redujo sistemáticamente hasta alcanzar una composición de planos rectangulares de colores primarios sobre fondo neutro. La obra funciona casi como un manifiesto visual del método neoplasticista: la eliminación de todo elemento accidental hasta revelar la estructura geométrica esencial subyacente en la naturaleza.', fotos:['../img/LA VACA 03.png'], link:'https://www.moma.org/collection/works/79189' },
};

function abrirObra(id) {
    var obra = obrasData[id];
    if (!obra) return;
    var elRamaIcono  = document.getElementById('obra-rama-icono');
    var elRamaNombre = document.getElementById('obra-rama-nombre');
    var elTitulo     = document.getElementById('obra-titulo');
    var elAutor      = document.getElementById('obra-autor');
    var elAnio       = document.getElementById('obra-anio');
    var elTecnica    = document.getElementById('obra-tecnica');
    var elResena     = document.getElementById('obra-resena');
    var elBtnMas     = document.getElementById('obra-btn-mas');
    var inner        = document.getElementById('carrusel-obra-inner');
    var dots         = document.getElementById('carrusel-obra-dots');
    var carruselEl   = document.getElementById('carruselObra');
    var modal        = document.getElementById('modal-obra');
    if (elRamaIcono)  { elRamaIcono.src = obra.ramaIcono; elRamaIcono.alt = obra.ramaLabel; }
    if (elRamaNombre)   elRamaNombre.textContent = obra.ramaLabel;
    if (elTitulo)       elTitulo.textContent     = obra.titulo;
    if (elAutor)        elAutor.textContent      = obra.autor;
    if (elAnio)         elAnio.textContent       = obra.anio;
    if (elTecnica)      elTecnica.textContent    = obra.tecnica;
    if (elResena)       elResena.textContent     = obra.resena;
    if (elBtnMas)       elBtnMas.href            = obra.link;
    if (inner && dots) {
        inner.innerHTML = '';
        dots.innerHTML  = '';
        obra.fotos.forEach(function(foto, i) {
            inner.innerHTML += '<div class="carousel-item ' + (i === 0 ? 'active' : '') + '"><img src="' + foto + '" alt="' + obra.titulo + '"></div>';
            dots.innerHTML  += '<button type="button" data-bs-target="#carruselObra" data-bs-slide-to="' + i + '" ' + (i === 0 ? 'class="active"' : '') + ' aria-label="Imagen ' + (i+1) + '"></button>';
        });
    }
    if (carruselEl) {
        var inst = bootstrap.Carousel.getOrCreateInstance(carruselEl);
        inst.to(0);
    }
    if (modal) {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarObra() {
    var modal = document.getElementById('modal-obra');
    if (modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
}

var modalObra = document.getElementById('modal-obra');
if (modalObra) {
    modalObra.addEventListener('click', function(e) {
        if (e.target === this) cerrarObra();
    });
}

document.querySelectorAll('.obras-hotspot').forEach(function(btn) {
    btn.addEventListener('click', function() {
        abrirObra(this.getAttribute('data-obra'));
    });
});

/* ============================================================
   E — AUTH: SISTEMA DE AUTENTICACIÓN
============================================================ */

function mostrarError(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function limpiarErrores(ids) {
    ids.forEach(function(id) { mostrarError(id, ''); });
}

function marcarInvalido(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('invalido');
}

function limpiarInvalido(id) {
    var el = document.getElementById(id);
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

function abrirAuth(tab) {
    var overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.add('activo');
    document.body.style.overflow = 'hidden';
    switchTab(tab || 'login');
}

window.cerrarAuth = function() {
    var overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.classList.remove('activo');
    document.body.style.overflow = 'auto';

    /* Limpiar campos al cerrar */
    document.querySelectorAll('.auth-form input').forEach(function(input) {
        input.value = '';
    });
    document.querySelectorAll('.auth-error').forEach(function(span) {
        span.textContent = '';
    });
};

function cerrarAuthOverlay(e) {
    var overlay = document.getElementById('auth-overlay');
    if (e.target === overlay) cerrarAuth();
}

function switchTab(tab) {
    ['form-login','form-registro','form-recuperar','auth-exito'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    ['tab-login','tab-registro'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.classList.remove('activo');
    });
    if (tab === 'login') {
        var fl = document.getElementById('form-login');
        var tl = document.getElementById('tab-login');
        if (fl) fl.style.display = 'flex';
        if (tl) tl.classList.add('activo');
    } else if (tab === 'registro') {
        var fr = document.getElementById('form-registro');
        var tr = document.getElementById('tab-registro');
        if (fr) fr.style.display = 'flex';
        if (tr) tr.classList.add('activo');
    } else if (tab === 'recuperar') {
        var frec = document.getElementById('form-recuperar');
        if (frec) frec.style.display = 'flex';
    } else if (tab === 'exito') {
        var fe = document.getElementById('auth-exito');
        if (fe) fe.style.display = 'flex';
        
        var contenedor = document.getElementById('lottie-check');
        if (contenedor) {
            contenedor.innerHTML = '';
            lottie.loadAnimation({
                container: contenedor,
                renderer:  'svg',
                loop:      false,
                autoplay:  true,
                path:      'http://localhost/neoplasticismo/img/lottie-auth.json'
            });
        }
    }
}

function togglePass(inputId, btn) {
    var input = document.getElementById(inputId);
    if (!input) return;
    var icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) { icon.classList.remove('bi-eye'); icon.classList.add('bi-eye-slash'); }
    } else {
        input.type = 'password';
        if (icon) { icon.classList.remove('bi-eye-slash'); icon.classList.add('bi-eye'); }
    }
}

var regPassInput = document.getElementById('reg-pass');
if (regPassInput) {
    regPassInput.addEventListener('input', function() {
        var v = validarPassword(this.value);
        var elLargo   = document.getElementById('req-largo');
        var elMayus   = document.getElementById('req-mayus');
        var elNumero  = document.getElementById('req-numero');
        var elEspecial= document.getElementById('req-especial');
        if (elLargo)    elLargo.classList.toggle('cumplido',    v.largo);
        if (elMayus)    elMayus.classList.toggle('cumplido',    v.mayus);
        if (elNumero)   elNumero.classList.toggle('cumplido',   v.numero);
        if (elEspecial) elEspecial.classList.toggle('cumplido', v.especial);
    });
}

var regRamaSelect = document.getElementById('reg-rama');
if (regRamaSelect) {
    regRamaSelect.addEventListener('change', function() {
        var campoOtro = document.getElementById('campo-rama-otro');
        if (campoOtro) campoOtro.style.display = this.value === 'otro' ? 'flex' : 'none';
    });
}

var regNacimiento = document.getElementById('reg-nacimiento');
if (regNacimiento) {
    regNacimiento.max = new Date().toISOString().split('T')[0];
}

/* ---- LOGIN CON PHP ---- */
function handleLogin(e) {
    e.preventDefault();

    var elUsuario = document.getElementById('login-usuario');
    var elPass    = document.getElementById('login-pass');
    if (!elUsuario || !elPass) return;

    var usuario = elUsuario.value.trim();
    var pass    = elPass.value;
    var valido  = true;

    limpiarErrores(['err-login-usuario','err-login-pass']);
    limpiarInvalido('login-usuario');
    limpiarInvalido('login-pass');

    if (!usuario) { mostrarError('err-login-usuario','Ingresá tu usuario o email.'); marcarInvalido('login-usuario'); valido = false; }
    if (!pass)    { mostrarError('err-login-pass','Ingresá tu contraseña.');         marcarInvalido('login-pass');    valido = false; }
    if (!valido) return;

    var btnSubmit = document.querySelector('#form-login .auth-submit');
    if (btnSubmit) { btnSubmit.disabled = true; btnSubmit.textContent = 'verificando...'; }

    fetch('/neoplasticismo/subpaginas/login.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ usuario: usuario, pass: pass })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'ingresar'; }
        if (data.ok) {
            localStorage.setItem('neo_sesion', JSON.stringify(data.usuario));
            activarSesion(data.usuario);
            cerrarAuth();
        } else {
            mostrarError('err-login-pass', 'Usuario o contraseña incorrectos.');
            marcarInvalido('login-pass');
        }
    })
    .catch(function(err) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'ingresar'; }
        alert('Error de conexión. Verificá que XAMPP esté corriendo.');
        console.error(err);
    });
}

/* ---- SESIÓN ---- */
function activarSesion(usuario) {
    var btnIngresar  = document.getElementById('btn-abrir-auth');
    var btnCerrar    = document.getElementById('btn-cerrar-sesion');
    var navUsuario   = document.getElementById('navbar-usuario');
    var navNombre    = document.getElementById('navbar-usuario-nombre');
    if (btnIngresar) btnIngresar.style.display = 'none';
    if (btnCerrar) btnCerrar.style.display = 'flex';
    if (navUsuario)  navUsuario.style.display  = 'flex';
    if (navNombre)   navNombre.textContent      = usuario.alias || usuario.nombre;
}

function cerrarSesion() {
    localStorage.removeItem('neo_sesion');
    var btnIngresar = document.getElementById('btn-abrir-auth');
    var btnCerrar   = document.getElementById('btn-cerrar-sesion');
    var navUsuario  = document.getElementById('navbar-usuario');
    if (btnIngresar) btnIngresar.style.display = 'flex';
    if (btnCerrar)   btnCerrar.style.display   = 'none';
    if (navUsuario)  navUsuario.style.display  = 'none';
}

(function verificarSesionAlCargar() {
    var sesion = localStorage.getItem('neo_sesion');
    if (sesion) {
        try { activarSesion(JSON.parse(sesion)); }
        catch(e) { localStorage.removeItem('neo_sesion'); }
    }
})();

/* ---- REGISTRO CON PHP ---- */
function handleRegistro(e) {
    e.preventDefault();

    var errIds = ['err-reg-nombre','err-reg-apellido','err-reg-alias',
                  'err-reg-nacionalidad','err-reg-nacimiento','err-reg-email',
                  'err-reg-email-confirm','err-reg-rama','err-reg-pass',
                  'err-reg-pass-confirm','err-reg-consentimiento'];
    limpiarErrores(errIds);
    ['reg-nombre','reg-apellido','reg-alias','reg-nacionalidad',
     'reg-nacimiento','reg-email','reg-email-confirm',
     'reg-pass','reg-pass-confirm'].forEach(function(id) { limpiarInvalido(id); });

    var g = function(id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
    };

    var nombre       = g('reg-nombre');
    var apellido     = g('reg-apellido');
    var alias        = g('reg-alias');
    var nacionalidad = g('reg-nacionalidad');
    var nacimiento   = g('reg-nacimiento');
    var email        = g('reg-email');
    var emailConf    = g('reg-email-confirm');
    var telefono     = g('reg-telefono');
    var instagram    = g('reg-instagram');
    var behance      = g('reg-behance');
    var ramaEl       = document.getElementById('reg-rama');
    var rama         = ramaEl ? ramaEl.value : '';
    var ramaOtroEl   = document.getElementById('reg-rama-otro');
    var ramaOtro     = ramaOtroEl ? ramaOtroEl.value.trim() : '';
    var passEl       = document.getElementById('reg-pass');
    var passConfEl   = document.getElementById('reg-pass-confirm');
    var pass         = passEl ? passEl.value : '';
    var passConf     = passConfEl ? passConfEl.value : '';
    var consentEl    = document.getElementById('reg-consentimiento');
    var consentimiento = consentEl ? consentEl.checked : false;

    var valido = true;

    if (!nombre)       { mostrarError('err-reg-nombre','Campo requerido.');         marcarInvalido('reg-nombre');       valido = false; }
    if (!apellido)     { mostrarError('err-reg-apellido','Campo requerido.');       marcarInvalido('reg-apellido');     valido = false; }
    if (!alias)        { mostrarError('err-reg-alias','Elegí un alias.');           marcarInvalido('reg-alias');        valido = false; }
    if (!nacionalidad) { mostrarError('err-reg-nacionalidad','Campo requerido.');   marcarInvalido('reg-nacionalidad'); valido = false; }
    if (!nacimiento)   { mostrarError('err-reg-nacimiento','Seleccioná tu fecha.'); marcarInvalido('reg-nacimiento');   valido = false; }
    if (!rama)         { mostrarError('err-reg-rama','Seleccioná una rama.');       marcarInvalido('reg-rama');         valido = false; }

    if (!email || !validarEmail(email)) {
        mostrarError('err-reg-email','Ingresá un email válido.');
        marcarInvalido('reg-email');
        valido = false;
    }
    if (email !== emailConf) {
        mostrarError('err-reg-email-confirm','Los emails no coinciden.');
        marcarInvalido('reg-email-confirm');
        valido = false;
    }

    var v = validarPassword(pass);
    if (!v.largo || !v.mayus || !v.numero || !v.especial) {
        mostrarError('err-reg-pass','La contraseña no cumple los requisitos.');
        marcarInvalido('reg-pass');
        valido = false;
    }
    if (pass !== passConf) {
        mostrarError('err-reg-pass-confirm','Las contraseñas no coinciden.');
        marcarInvalido('reg-pass-confirm');
        valido = false;
    }
    if (!consentimiento) {
        mostrarError('err-reg-consentimiento','Debés aceptar para continuar.');
        valido = false;
    }

    if (!valido) return;

    var btnSubmit = document.querySelector('#form-registro .auth-submit');
    if (btnSubmit) { btnSubmit.disabled = true; btnSubmit.textContent = 'enviando...'; }

    var payload = {
        nombre:           nombre,
        apellido:         apellido,
        alias:            alias,
        nacionalidad:     nacionalidad,
        fecha_nacimiento: nacimiento,
        email:            email,
        telefono:         telefono,
        instagram:        instagram,
        behance:          behance,
        rama:             rama === 'otro' ? ramaOtro : rama,
        pass:             pass
    };

    fetch('/neoplasticismo/subpaginas/registro.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'crear cuenta'; }

        if (data.ok) {
            var sesionData = {
                id:     data.id,
                nombre: data.nombre,
                alias:  data.alias,
                email:  data.email,
                rama:   data.rama
            };
            localStorage.setItem('neo_sesion', JSON.stringify(sesionData));

            var elTexto = document.getElementById('auth-exito-texto');
            if (elTexto) elTexto.textContent = '¡Hola, ' + (data.alias || data.nombre) + '! Tu cuenta fue creada exitosamente.';
            switchTab('exito');
            activarSesion(sesionData);

        } else {
            if (data.error === 'alias_duplicado') {
                mostrarError('err-reg-alias', 'Ese alias ya está en uso.');
                marcarInvalido('reg-alias');
            } else if (data.error === 'email_duplicado') {
                mostrarError('err-reg-email', 'Ese email ya está registrado.');
                marcarInvalido('reg-email');
            } else {
                alert('Error del servidor: ' + data.error);
            }
        }
    })
    .catch(function(err) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'crear cuenta'; }
        alert('No se pudo conectar con el servidor. Verificá que XAMPP esté corriendo.');
        console.error('Error fetch registro:', err);
    });
}

/* ============================================================
   F — FORO Y PUBLICACIONES
============================================================ */

var publicacionesData = {
    pintura:          [],
    arquitectura:     [],
    disenoindustrial: [],
    disenografico:    [],
    indumentaria:     [],
    otros:            []
};

var ramasConfig = {
    pintura:          { label:'pintura',           icono:'../img/a-img-icono-pintura.png' },
    arquitectura:     { label:'arquitectura',      icono:'../img/a-img-icono-arquitectura.png' },
    disenoindustrial: { label:'diseño industrial', icono:'../img/a-img-icono-disenoindustrial.png' },
    disenografico:    { label:'diseño gráfico',    icono:'../img/a-img-icono-disenografico.png' },
    indumentaria:     { label:'indumentaria',      icono:'../img/a-img-icono-disenoindustrial.png' },
    otros:            { label:'otros',             icono:'../img/a-img-icono-disenografico.png' }
};

var ramaActiva = 'pintura';
var pubActual  = null;

/* ---- FILTRAR RAMA ---- */
window.filtrarRama = function(rama, btnEl) {
    ramaActiva = rama;
    document.querySelectorAll('.foro-card-btn').forEach(function(b) { b.classList.remove('activo'); });
    if (btnEl) btnEl.classList.add('activo');
    var config = ramasConfig[rama];
    if (config) {
        var iconoEl  = document.getElementById('foro-rama-icono');
        var nombreEl = document.getElementById('foro-rama-nombre');
        if (iconoEl)  iconoEl.src          = config.icono;
        if (nombreEl) nombreEl.textContent = config.label;
    }
    renderizarTrack(rama);
};

/* ---- RENDERIZAR CARDS ---- */
function renderizarTrack(rama) {
    var track = document.getElementById('foro-track');
    if (!track) return;

    fetch('obtener_publicaciones.php?rama=' + encodeURIComponent(rama))
    .then(function(res) { return res.json(); })
    .then(function(pubsBD) {

        var pubsBDFormateadas = pubsBD.map(function(p) {
            var ramaConfig = {
                pintura:          { label:'Pintura',          icono:'../img/a-img-icono-pintura.png' },
                arquitectura:     { label:'Arquitectura',     icono:'../img/a-img-icono-arquitectura.png' },
                disenoindustrial: { label:'Diseño Industrial',icono:'../img/a-img-icono-disenoindustrial.png' },
                disenografico:    { label:'Diseño Gráfico',   icono:'../img/a-img-icono-disenografico.png' },
                indumentaria:     { label:'Indumentaria',     icono:'../img/a-img-icono-disenoindustrial.png' },
                otros:            { label:'Otros',            icono:'../img/a-img-icono-disenografico.png' }
            };
            var config = ramaConfig[p.rama] || ramaConfig['otros'];
            return {
                id:           'bd_' + p.id,
                alias:        p.alias.startsWith('@') ? p.alias : '@' + p.alias,
                nombre:       p.nombre,
                pais:         p.pais,
                tituloObra:   p.titulo_obra,
                anioObra:     p.anio_obra,
                descripcion:  p.resena_obra,
                resenaArtista:p.resena_artista,
                resenaObra:   p.resena_obra,
                instagram:    p.instagram,
                behance:      p.behance,
                telefono:     p.telefono,
                portada:      p.portada,
                fotos:        p.fotos.length > 0 ? p.fotos : [p.portada],
                rama:         p.rama,
                ramaLabel:    config.label,
                ramaIcono:    config.icono,
                deBD:         true
            };
        });

        /* Solo datos de BD */
        var todasLasPubs = pubsBDFormateadas;

        track.innerHTML = '';
        todasLasPubs.forEach(function(pub, i) {
            var sesion   = localStorage.getItem('neo_sesion');
            var logueado = !!sesion;

            var card = document.createElement('div');
            card.className = 'foro-card' + (i === 0 ? ' activo' : '');
            card.setAttribute('style',
                'background-image:url("' + pub.portada + '");' +
                'background-size:cover;background-position:center center;background-repeat:no-repeat;'
            );
            card.setAttribute('data-id',   pub.id);
            card.setAttribute('data-rama', rama);

            var infoPublica =
                '<span class="foro-card-titulo-obra">' + pub.tituloObra + '</span>' +
                '<span class="foro-card-nombre-artista">por ' + pub.nombre + '</span>';

            var infoPrivada = '';
            if (logueado) {
                var redes = '';
                if (pub.instagram) redes += '<a href="https://instagram.com/' + pub.instagram.replace('@','') + '" target="_blank" class="foro-card-red-icono" onclick="event.stopPropagation()"><i class="bi bi-instagram"></i></a>';
                if (pub.behance)   redes += '<a href="https://' + pub.behance + '" target="_blank" class="foro-card-red-icono" onclick="event.stopPropagation()"><i class="bi bi-behance"></i></a>';
                infoPrivada =
                    '<span class="foro-card-alias">' + pub.alias + '</span>' +
                    '<div class="foro-card-redes">' + redes + '</div>' +
                    '<button class="foro-card-btn-mas" onclick="event.stopPropagation(); abrirPubUnificado(\'' + pub.id + '\',\'' + rama + '\')">más información <i class="bi bi-arrow-right"></i></button>';
            } else {
                infoPrivada = '<span class="foro-card-login-aviso">Iniciá sesión para ver más</span>';
            }

            card.innerHTML = '<div class="foro-card-desc">' + infoPublica + infoPrivada + '</div>';

            card.addEventListener('click', function() {
                document.querySelectorAll('#foro-track .foro-card').forEach(function(c) { c.classList.remove('activo'); });
                card.classList.add('activo');
            });
            track.appendChild(card);
        });

        window._pubsBD = window._pubsBD || {};
        window._pubsBD[rama] = pubsBDFormateadas;
    })
    .catch(function() {
        /* Si falla la BD mostrar mensaje */
        track.innerHTML = '<p style="color:white;padding:20px;font-family:DMSans,sans-serif;">Error al cargar las publicaciones.</p>';
    });
}

/* ---- ABRIR MODAL PUBLICACIÓN ---- */
window.abrirPub = function(id, rama) {
    var pubs = publicacionesData[rama] || [];
    var pub  = pubs.find(function(p) { return p.id === id; });
    if (!pub) return;
    pubActual = pub;
    var sesion   = localStorage.getItem('neo_sesion');
    var logueado = !!sesion;

    var setEl = function(elId, val) { var el = document.getElementById(elId); if (el) el.textContent = val; };
    setEl('pub-rama-label',  pub.ramaLabel);
    setEl('pub-alias',       pub.alias);
    setEl('pub-nombre',      pub.nombre);
    setEl('pub-pais',        pub.pais);
    setEl('pub-titulo-obra', pub.tituloObra);
    setEl('pub-anio-obra',   pub.anioObra);
    setEl('pub-resena-artista', pub.resenaArtista);
    setEl('pub-resena-obra',    pub.resenaObra);

    var elRamaIcono = document.getElementById('pub-rama-icono');
    if (elRamaIcono) elRamaIcono.src = pub.ramaIcono;

    /* Redes — solo logueado */
    var redesEl = document.getElementById('pub-redes');
    if (redesEl) {
        if (logueado) {
            redesEl.innerHTML = '';
            if (pub.instagram) redesEl.innerHTML += '<a href="https://instagram.com/' + pub.instagram.replace('@','') + '" target="_blank" class="modal-pub-red-link"><i class="bi bi-instagram"></i> ' + pub.instagram + '</a>';
            if (pub.behance)   redesEl.innerHTML += '<a href="https://' + pub.behance + '" target="_blank" class="modal-pub-red-link"><i class="bi bi-behance"></i> ' + pub.behance + '</a>';
            if (pub.telefono)  redesEl.innerHTML += '<span class="modal-pub-red-link"><i class="bi bi-telephone"></i> ' + pub.telefono + '</span>';
            redesEl.style.display = 'flex';
        } else {
            redesEl.innerHTML = '<p class="foro-aviso-login">Iniciá sesión para ver datos de contacto y redes.</p>';
        }
    }

    /* Carrusel */
    var inner = document.getElementById('carrusel-pub-inner');
    var dots  = document.getElementById('carrusel-pub-dots');
    if (inner && dots) {
        inner.innerHTML = '';
        dots.innerHTML  = '';
        pub.fotos.forEach(function(foto, i) {
            inner.innerHTML += '<div class="carousel-item ' + (i === 0 ? 'active' : '') + '"><img src="' + foto + '" alt="' + pub.tituloObra + '"></div>';
            dots.innerHTML  += '<button type="button" data-bs-target="#carruselPub" data-bs-slide-to="' + i + '" ' + (i === 0 ? 'class="active"' : '') + ' aria-label="Imagen ' + (i+1) + '"></button>';
        });
        var carruselEl = document.getElementById('carruselPub');
        if (carruselEl) bootstrap.Carousel.getOrCreateInstance(carruselEl).to(0);
    }

    /* Valoración y comentarios — solo logueado */
    var secValoracion  = document.getElementById('sec-valoracion');
    var secComentarios = document.getElementById('sec-comentarios');
    if (secValoracion)  secValoracion.style.display  = logueado ? 'flex' : 'none';
    if (secComentarios) secComentarios.style.display = logueado ? 'flex' : 'none';

    if (logueado) {
        var elEstrellas = document.getElementById('estrellas-input');
        if (elEstrellas) elEstrellas.setAttribute('data-pub-id', pub.id);
        renderizarEstrellas(pub.id);
        actualizarPromedio(pub.id);
        renderizarComentarios(pub.id);
        var elForm  = document.getElementById('comentario-form');
        var elAviso = document.getElementById('comentario-aviso');
        if (elForm)  elForm.style.display  = 'flex';
        if (elAviso) elAviso.style.display = 'none';
    }

    var modal = document.getElementById('modal-pub');
    if (modal) { modal.classList.add('activo'); document.body.style.overflow = 'hidden'; }
};

window.cerrarPub = function() {
    var modal = document.getElementById('modal-pub');
    if (modal) { modal.classList.remove('activo'); document.body.style.overflow = 'auto'; }
    pubActual = null;
};

var modalPubEl = document.getElementById('modal-pub');
if (modalPubEl) {
    modalPubEl.addEventListener('click', function(e) {
        if (e.target === this) window.cerrarPub();
    });
}
window.abrirPubUnificado = function(id, rama) {
    /* Si es publicación de BD */
    if (String(id).indexOf('bd_') === 0) {
        var pubsBD = (window._pubsBD && window._pubsBD[rama]) || [];
        var pub = pubsBD.find(function(p) { return p.id === id; });
        if (pub) {
            /* Agregar al publicacionesData temporalmente y abrir */
            if (!publicacionesData[rama]) publicacionesData[rama] = [];
            var existe = publicacionesData[rama].find(function(p) { return p.id === id; });
            if (!existe) publicacionesData[rama].unshift(pub);
            window.abrirPub(id, rama);
        }
    } else {
        window.abrirPub(id, rama);
    }
};

/* ---- COMENTARIOS CON PHP ---- */
function renderizarComentarios(pubId) {
    var lista = document.getElementById('comentarios-lista');
    if (!lista) return;
    lista.innerHTML = '<p style="font-family:DMSans,sans-serif;font-size:12px;color:#888;margin:0;">Cargando...</p>';

    fetch('comentarios.php?pub_id=' + encodeURIComponent(pubId))
    .then(function(res) { return res.json(); })
    .then(function(comentarios) {
        if (comentarios.length === 0) {
            lista.innerHTML = '<p style="font-family:DMSans,sans-serif;font-size:12px;color:#888;margin:0;">Todavía no hay comentarios. ¡Sé el primero!</p>';
            return;
        }
        lista.innerHTML = comentarios.map(function(c) {
            return '<div class="comentario-item">' +
                '<p class="comentario-item-alias">' + c.alias + '</p>' +
                '<p class="comentario-item-texto">' + c.texto + '</p>' +
            '</div>';
        }).join('');
    })
    .catch(function() {
        lista.innerHTML = '<p style="font-family:DMSans,sans-serif;font-size:12px;color:#888;margin:0;">Error al cargar comentarios.</p>';
    });
}

window.enviarComentario = function() {
    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion || !pubActual) return;
    var usuario = JSON.parse(sesion);
    var elInput = document.getElementById('comentario-input');
    var texto   = elInput ? elInput.value.trim() : '';
    if (!texto) return;

    fetch('comentarios.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
            pub_id:     pubActual.id,
            usuario_id: usuario.id,
            alias:      usuario.alias || usuario.nombre,
            texto:      texto
        })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (data.ok) {
            if (elInput) elInput.value = '';
            renderizarComentarios(pubActual.id);
        }
    });
};

/* ---- VALORACIONES CON PHP ---- */
function renderizarEstrellas(pubId) {
    var contenedor = document.getElementById('estrellas-input');
    if (!contenedor) return;
    var sesion = localStorage.getItem('neo_sesion');
    var usuario = sesion ? JSON.parse(sesion) : null;

    var url = 'valoraciones.php?pub_id=' + encodeURIComponent(pubId);
    if (usuario) url += '&usuario_id=' + usuario.id;

    fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(data) {
        var miVoto = data.mi_voto || 0;
        contenedor.innerHTML = '';
        for (var i = 1; i <= 5; i++) {
            var btn = document.createElement('button');
            btn.className   = 'estrella-btn' + (i <= miVoto ? ' activo' : '');
            btn.textContent = '★';
            (function(valor) {
                btn.onclick = function() { votar(pubId, valor); };
            })(i);
            contenedor.appendChild(btn);
        }

        var elProm = document.getElementById('pub-promedio');
        var elCant = document.getElementById('pub-cant-votos');
        if (data.total > 0) {
            if (elProm) elProm.textContent = '★ ' + data.promedio;
            if (elCant) elCant.textContent = data.total + (data.total === 1 ? ' valoración' : ' valoraciones');
        } else {
            if (elProm) elProm.textContent = '—';
            if (elCant) elCant.textContent = 'sin valoraciones aún';
        }
    });
}

function votar(pubId, valor) {
    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion) { abrirAuth('login'); return; }
    var usuario = JSON.parse(sesion);

    fetch('valoraciones.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
            pub_id:     pubId,
            usuario_id: usuario.id,
            alias:      usuario.alias || usuario.nombre,
            estrellas:  valor
        })
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (data.ok) {
            renderizarEstrellas(pubId);
        }
    });
}

function actualizarPromedio(pubId) {
    /* Esta función ahora la maneja renderizarEstrellas */
    renderizarEstrellas(pubId);
}

/* ---- INIT FORO ---- */
document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('foro-track');
    if (!track) return;
    var btnActivo = document.querySelector('.foro-card-btn.activo');
    window.filtrarRama('pintura', btnActivo);
});

/* ---- FORMULARIO CARGA DE OBRA (artistas logueados) ---- */
window.abrirFormularioCarga = function() {
    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion) { abrirAuth('login'); return; }
    var modal = document.getElementById('modal-carga-obra');
    if (modal) { modal.classList.add('activo'); document.body.style.overflow = 'hidden'; }
};

window.cerrarFormularioCarga = function() {
    var modal = document.getElementById('modal-carga-obra');
    if (modal) { modal.classList.remove('activo'); document.body.style.overflow = 'auto'; }
};

window.handleCargaObra = function(e) {
    e.preventDefault();

    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion) { abrirAuth('login'); return; }
    var usuario = JSON.parse(sesion);

    var seccionEl    = document.getElementById('carga-seccion');
    var nombreEl     = document.getElementById('carga-nombre-obra');
    var anioEl       = document.getElementById('carga-anio');
    var resenaArtEl  = document.getElementById('carga-resena-artista');
    var resenaObEl   = document.getElementById('carga-resena-obra');
    var imagenesEl   = document.getElementById('carga-imagenes');
    var consentEl    = document.getElementById('carga-consentimiento');

    if (!seccionEl.value || !nombreEl.value.trim() || !anioEl.value.trim() ||
        !resenaArtEl.value.trim() || !resenaObEl.value.trim()) {
        alert('Completá todos los campos obligatorios.');
        return;
    }

    if (!consentEl.checked) {
        alert('Debés confirmar que el contenido es de tu autoría.');
        return;
    }

    var formData = new FormData();
    formData.append('usuario_id',     usuario.id);
    formData.append('alias',          usuario.alias || usuario.nombre);
    formData.append('nombre',         usuario.nombre);
    formData.append('pais',           usuario.pais || '');
    formData.append('rama',           seccionEl.value);
    formData.append('titulo_obra',    nombreEl.value.trim());
    formData.append('anio_obra',      anioEl.value.trim());
    formData.append('resena_artista', resenaArtEl.value.trim());
    formData.append('resena_obra',    resenaObEl.value.trim());
    formData.append('instagram',      usuario.instagram || '');
    formData.append('behance',        usuario.behance   || '');
    formData.append('telefono',       usuario.telefono  || '');

    if (imagenesEl.files.length > 0) {
        for (var i = 0; i < Math.min(imagenesEl.files.length, 5); i++) {
            formData.append('imagenes[]', imagenesEl.files[i]);
        }
    }

    var btnSubmit = document.querySelector('#form-carga-obra .auth-submit');
    if (btnSubmit) { btnSubmit.disabled = true; btnSubmit.textContent = 'publicando...'; }

    fetch('/neoplasticismo/subpaginas/publicar.php', {
        method: 'POST',
        body:   formData
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'enviar obra'; }

        if (data.ok) {
            alert('¡Obra publicada! Tu trabajo ya está visible en el foro.\n\nRecordá que las publicaciones están sujetas a revisión y pueden ser removidas si infringen derechos de autor o no cumplen las condiciones de uso.');
            window.cerrarFormularioCarga();
            e.target.reset();
            var btnActivo = document.querySelector('.foro-card-btn.activo');
            if (btnActivo) {
                var ramaActual = btnActivo.getAttribute('onclick').match(/'([^']+)'/)[1];
                window.filtrarRama(ramaActual, btnActivo);
            }
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(function(err) {
        if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'enviar obra'; }
        alert('No se pudo conectar con el servidor.');
        console.error(err);
    });
};

/* ============================================================
   G — BUSCADOR GLOBAL CON PHP + MySQL
============================================================ */

function resaltarTexto(texto, query) {
    if (!query) return texto;
    var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return texto.replace(regex, '<mark class="buscador-mark">$1</mark>');
}

function getLinkDestino(item) {
    var base = (window.location.pathname.indexOf('/subpaginas/') !== -1)
        ? '' : 'subpaginas/';

    var mapa = {
        'autores':           base + 'autores.html',
        'obras':             base + 'obras.html',
        'destijl':           base + 'destijl.html',
        'contextohistorico': base + 'contextohistorico.html'
    };

    var url = mapa[item.link] || '#';

    /* Agregar parámetro para abrir modal directo */
    if (item.id_contenido) {
        if (item.tipo === 'autor')      url += '?autor=' + item.id_contenido;
        if (item.tipo === 'obra')       url += '?obra='  + item.id_contenido;
        if (item.tipo === 'manifiesto') {
            var num = item.id_contenido.replace('manifiesto-', '');
            url += '?manifiesto=' + num;
        }
    }

    return url;
}

function getTipoLabel(tipo) {
    var labels = { autor:'Autor', obra:'Obra', manifiesto:'Manifiesto', termino:'Concepto' };
    return labels[tipo] || tipo;
}

function getTipoColor(tipo) {
    var colores = {
        autor:      'var(--color-azul)',
        obra:       'var(--color-rojo)',
        manifiesto: 'var(--color-amarillo)',
        termino:    'var(--color-negro)'
    };
    return colores[tipo] || 'var(--color-negro)';
}

function renderBuscadorResultados(resultados, query) {
    var panel = document.getElementById('buscador-panel');
    if (!panel) return;

    if (resultados.length === 0) {
        panel.innerHTML = '<p class="buscador-sin-resultados">Sin resultados para "<strong>' + query + '</strong>"</p>';
        panel.classList.add('activo');
        return;
    }

    var html = resultados.map(function(item) {
        var tituloResaltado = resaltarTexto(item.titulo,      query);
        var descResaltada   = resaltarTexto(item.descripcion, query);
        var destino = getLinkDestino(item);
        var colorTipo       = getTipoColor(item.tipo);
        var labelTipo       = getTipoLabel(item.tipo);
        var colorTexto      = item.tipo === 'manifiesto' ? 'var(--color-negro)' : 'var(--color-blanco)';

        return '<div class="buscador-resultado-item">' +
            '<img src="' + item.imagen + '" alt="' + item.titulo + '" class="buscador-resultado-img" onerror="this.style.display=\'none\'">' +
            '<div class="buscador-resultado-info">' +
                '<span class="buscador-resultado-tipo" style="background:' + colorTipo + ';color:' + colorTexto + '">' + labelTipo + '</span>' +
                '<p class="buscador-resultado-titulo">' + tituloResaltado + '</p>' +
                '<p class="buscador-resultado-desc">'   + descResaltada   + '</p>' +
            '</div>' +
            '<a href="' + destino + '" class="buscador-resultado-btn">Ver <i class="bi bi-arrow-right"></i></a>' +
        '</div>';
    }).join('');

    panel.innerHTML = html;
    panel.classList.add('activo');
}

function cerrarBuscadorPanel() {
    var panel = document.getElementById('buscador-panel');
    if (panel) panel.classList.remove('activo');
}

document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector('.buscador-input');
    if (!input) return;

    var panel = document.createElement('div');
    panel.id = 'buscador-panel';
    panel.className = 'buscador-panel';
    input.closest('.buscador').appendChild(panel);

    var timer = null;

    input.addEventListener('input', function() {
        var q = this.value.trim();
        if (q.length < 2) { cerrarBuscadorPanel(); return; }

        clearTimeout(timer);
        timer = setTimeout(function() {
            var pagina = window.location.pathname;
            var filtroTipo = '';
            if (pagina.indexOf('autores.html') !== -1)  filtroTipo = '&tipo=autor';
            if (pagina.indexOf('obras.html') !== -1)     filtroTipo = '&tipo=obra';

            var phpUrl = (pagina.indexOf('/subpaginas/') !== -1)
                ? 'buscar.php?q=' + encodeURIComponent(q) + filtroTipo
                : 'subpaginas/buscar.php?q=' + encodeURIComponent(q) + filtroTipo;

            fetch(phpUrl)
                .then(function(res) { return res.json(); })
                .then(function(data) { renderBuscadorResultados(data, q); })
                .catch(function() { cerrarBuscadorPanel(); });
        }, 300);
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') cerrarBuscadorPanel();
    });

    document.addEventListener('click', function(e) {
        var contenedor = document.querySelector('.buscador');
        if (contenedor && !contenedor.contains(e.target)) cerrarBuscadorPanel();
    });
});

/* ============================================================
   H — ABRIR MODAL DESDE URL (buscador)
============================================================ */
document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);

    /* Abrir modal de autor */
    var autorParam = params.get('autor');
    if (autorParam && typeof abrirAutor === 'function') {
        setTimeout(function() { abrirAutor(autorParam); }, 300);
    }

    /* Abrir modal de obra */
    var obraParam = params.get('obra');
    if (obraParam && typeof abrirObra === 'function') {
        setTimeout(function() { abrirObra(obraParam); }, 300);
    }

    /* Abrir modal de manifiesto */
    var manifiestoParam = params.get('manifiesto');
    if (manifiestoParam && typeof abrirManifiesto === 'function') {
        setTimeout(function() { abrirManifiesto(parseInt(manifiestoParam)); }, 300);
    }
});