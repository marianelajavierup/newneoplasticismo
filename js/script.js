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
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    },
    {
        titulo: 'Segundo Manifiesto De Stijl',
        anio: '1920',
        autores: 'Theo van Doesburg, Piet Mondrian',
        texto: 'Profundiza en los principios del movimiento y amplía su alcance a la arquitectura y el diseño. Van Doesburg expande la visión del neoplasticismo más allá de la pintura, hacia una estética total del entorno construido.',
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
    },
    {
        titulo: 'Tercer Manifiesto De Stijl',
        anio: '1926',
        autores: 'Theo van Doesburg',
        texto: 'El tercer y último manifiesto amplía la visión del movimiento hacia un arte total que integre todas las disciplinas: pintura, escultura, arquitectura, diseño gráfico y tipografía.',
        img: '../img/5-obras.disenoindustrial-sillarietveld.webp',
        pdf: '../text/manifiesto-de-stijl-1917.pdf'
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
    'mondrian-01': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Composición con Rojo, Azul y Amarillo', autor:'Piet Mondrian', anio:'1930', tecnica:'Óleo sobre tela — 46 × 46 cm', resena:'Una de las obras más emblemáticas del Neoplasticismo. Mondrian reduce la pintura a sus elementos esenciales: líneas negras ortogonales y planos de colores primarios sobre fondo blanco.', fotos:['../img/5-obras.pintura-mondrian-01.jpg'], link:'#' },
    'mondrian-02': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Tableau I', autor:'Piet Mondrian', anio:'1921', tecnica:'Óleo sobre tela — 103 × 100 cm', resena:'En Tableau I Mondrian consolida su vocabulario visual neoplasticista: planos rectangulares delimitados por gruesas líneas negras.', fotos:['../img/5-obras.pintura-mondrian-02.jpg'], link:'#' },
    'mondrian-03': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Composición II en Rojo, Azul y Amarillo', autor:'Piet Mondrian', anio:'1929', tecnica:'Óleo sobre tela — 40,3 × 32,1 cm', resena:'Obra de madurez del movimiento. La asimetría controlada genera una tensión visual que Mondrian denominó equilibrio dinámico.', fotos:['../img/5-obras.pintura-mondrian-04.jpg'], link:'#' },
    'mondrian-04': { rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png', titulo:'Composición en Negro, Blanco y Gris', autor:'Piet Mondrian', anio:'1939', tecnica:'Óleo sobre tela — 80,7 × 73,5 cm', resena:'Periodo de transición donde Mondrian prescinde de los colores primarios para explorar la pura relación entre línea y plano neutro.', fotos:['../img/5-obras.pintura-mondrian-01.jpg'], link:'#' },
    'casa-schroder': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Casa Schröder', autor:'Gerrit Rietveld', anio:'1924', tecnica:'Arquitectura residencial — Utrecht, Países Bajos', resena:'Declarada Patrimonio de la Humanidad por la UNESCO, la Casa Schröder es la materialización tridimensional del Neoplasticismo.', fotos:['../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg','../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg'], link:'#' },
    'casa-schroder-02': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Casa Schröder — Interior', autor:'Gerrit Rietveld', anio:'1924', tecnica:'Vista interior — Utrecht, Países Bajos', resena:'El interior introduce paneles corredizos que permiten transformar el espacio. La planta libre y los colores primarios son fieles al principio neoplasticista.', fotos:['../img/5-obras.arquitectura-rietveldhouseschroderhuis-02.jpg','../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg'], link:'#' },
    'cafe-aubette': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Café Aubette — Salón de Baile', autor:'Theo van Doesburg', anio:'1928', tecnica:'Interiorismo — Estrasburgo, Francia', resena:'El Café Aubette es una de las intervenciones de diseño total del Neoplasticismo. Van Doesburg aplicó su Elementarismo a paredes, techos y pisos.', fotos:['../img/5-obras.arquitectura-cafeaubette-01.jpg'], link:'#' },
    'maison-particuliere': { rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png', titulo:'Proyecto Maison Particulière', autor:'Theo van Doesburg', anio:'1923', tecnica:'Proyecto arquitectónico — París, Francia', resena:'Proyecto de vivienda particular desarrollado con Cornelis van Eesteren. Representa la transición del Neoplasticismo de la pintura a la arquitectura.', fotos:['../img/5-obras.arquitectura-proyectomaison particuliére1923-theovandoesburg-01.jpg'], link:'#' },
    'silla-rietveld-01': { rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png', titulo:'Silla Roja y Azul', autor:'Gerrit Rietveld', anio:'1917', tecnica:'Madera lacada — 86,5 × 66 × 83,5 cm', resena:'La Silla Roja y Azul es el primer objeto de diseño industrial del Neoplasticismo. Su estructura de listones perpendiculares traduce al espacio tridimensional los principios formales de De Stijl.', fotos:['../img/5-obras.disenoindustrial-sillarietveld.webp','../img/5-obras.disenoindustrial-sillarietveld2.png','../img/5-obras.disenoindustrial-sillarietveld3.jpg'], link:'#' },
    'silla-rietveld-02': { rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png', titulo:'Silla Berlín', autor:'Gerrit Rietveld', anio:'1923', tecnica:'Madera — 84 × 61,5 × 78 cm', resena:'La Silla Berlín es una versión más depurada del lenguaje formal de Rietveld, eliminando el color para concentrarse en la estructura.', fotos:['../img/5-obras.disenoindustrial-sillarietveld2.png','../img/5-obras.disenoindustrial-sillarietveld.webp'], link:'#' },
    'disenografico-01': { rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png', titulo:'Portada De Stijl N°1', autor:'Theo van Doesburg / Vilmos Huszár', anio:'1917', tecnica:'Diseño editorial — Revista De Stijl', resena:'La portada del primer número sienta las bases del diseño gráfico neoplasticista: tipografía de palo seco, composición reticular y colores primarios.', fotos:['../img/5-obras.disenoindustrial-sillarietveld.webp'], link:'#' },
    'disenografico-02': { rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png', titulo:'Tipografía Universal', autor:'Theo van Doesburg', anio:'1919', tecnica:'Diseño tipográfico — Alfabeto De Stijl', resena:'El alfabeto aplica la gramática geométrica del Neoplasticismo al campo tipográfico: cada letra se construye sobre una grilla cuadrada modular.', fotos:['../img/5-obras.disenoindustrial-sillarietveld2.png'], link:'#' }
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

function cerrarAuth() {
    var overlay = document.getElementById('auth-overlay');
    if (!overlay) return;
    overlay.classList.remove('activo');
    document.body.style.overflow = 'auto';
}

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
    var usuarios   = JSON.parse(localStorage.getItem('neo_usuarios') || '[]');
    var encontrado = usuarios.find(function(u) { return (u.alias === usuario || u.email === usuario) && u.pass === pass; });
    if (!encontrado) { mostrarError('err-login-pass','Usuario o contraseña incorrectos.'); marcarInvalido('login-pass'); return; }
    localStorage.setItem('neo_sesion', JSON.stringify(encontrado));
    activarSesion(encontrado);
    cerrarAuth();
}

function handleRegistro(e) {
    e.preventDefault();
    var errIds = ['err-reg-nombre','err-reg-apellido','err-reg-alias','err-reg-nacionalidad','err-reg-nacimiento','err-reg-email','err-reg-email-confirm','err-reg-rama','err-reg-pass','err-reg-pass-confirm','err-reg-consentimiento'];
    limpiarErrores(errIds);
    ['reg-nombre','reg-apellido','reg-alias','reg-nacionalidad','reg-nacimiento','reg-email','reg-email-confirm','reg-pass','reg-pass-confirm'].forEach(function(id) { limpiarInvalido(id); });
    var g = function(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
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
    if (!nombre)       { mostrarError('err-reg-nombre','Campo requerido.');              marcarInvalido('reg-nombre');       valido = false; }
    if (!apellido)     { mostrarError('err-reg-apellido','Campo requerido.');            marcarInvalido('reg-apellido');     valido = false; }
    if (!alias)        { mostrarError('err-reg-alias','Elegí un alias.');                marcarInvalido('reg-alias');        valido = false; }
    if (!nacionalidad) { mostrarError('err-reg-nacionalidad','Campo requerido.');        marcarInvalido('reg-nacionalidad'); valido = false; }
    if (!nacimiento)   { mostrarError('err-reg-nacimiento','Seleccioná tu fecha.');      marcarInvalido('reg-nacimiento');   valido = false; }
    if (!rama)         { mostrarError('err-reg-rama','Seleccioná una rama.');            marcarInvalido('reg-rama');         valido = false; }
    if (!email || !validarEmail(email)) { mostrarError('err-reg-email','Email inválido.'); marcarInvalido('reg-email'); valido = false; }
    if (email !== emailConf) { mostrarError('err-reg-email-confirm','Los emails no coinciden.'); marcarInvalido('reg-email-confirm'); valido = false; }
    var v = validarPassword(pass);
    if (!v.largo || !v.mayus || !v.numero || !v.especial) { mostrarError('err-reg-pass','La contraseña no cumple los requisitos.'); marcarInvalido('reg-pass'); valido = false; }
    if (pass !== passConf) { mostrarError('err-reg-pass-confirm','Las contraseñas no coinciden.'); marcarInvalido('reg-pass-confirm'); valido = false; }
    if (!consentimiento)   { mostrarError('err-reg-consentimiento','Debés aceptar para continuar.'); valido = false; }
    if (!valido) return;
    var usuarios = JSON.parse(localStorage.getItem('neo_usuarios') || '[]');
    if (usuarios.find(function(u) { return u.alias === alias; }))  { mostrarError('err-reg-alias','Ese alias ya está en uso.'); marcarInvalido('reg-alias'); return; }
    if (usuarios.find(function(u) { return u.email === email; }))  { mostrarError('err-reg-email','Ese email ya está registrado.'); marcarInvalido('reg-email'); return; }
    var nuevoUsuario = { nombre:nombre, apellido:apellido, alias:alias, nacionalidad:nacionalidad, nacimiento:nacimiento, email:email, telefono:telefono, instagram:instagram, behance:behance, rama: rama === 'otro' ? ramaOtro : rama, pass:pass };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('neo_usuarios', JSON.stringify(usuarios));
    localStorage.setItem('neo_sesion',   JSON.stringify(nuevoUsuario));
    var elExitoTexto = document.getElementById('auth-exito-texto');
    if (elExitoTexto) elExitoTexto.textContent = '¡Hola, ' + (alias || nombre) + '! Tu cuenta fue creada.';
    switchTab('exito');
    activarSesion(nuevoUsuario);
}

function handleRecuperar(e) {
    e.preventDefault();
    var elEmail = document.getElementById('rec-email');
    var email   = elEmail ? elEmail.value.trim() : '';
    limpiarErrores(['err-rec-email']);
    limpiarInvalido('rec-email');
    if (!email || !validarEmail(email)) { mostrarError('err-rec-email','Ingresá un email válido.'); marcarInvalido('rec-email'); return; }
    alert('Si ese email está registrado, recibirás las instrucciones pronto.');
    switchTab('login');
}

function activarSesion(usuario) {
    var btnIngresar = document.getElementById('btn-abrir-auth');
    var navUsuario  = document.getElementById('navbar-usuario');
    var navNombre   = document.getElementById('navbar-usuario-nombre');
    if (btnIngresar) btnIngresar.style.display = 'none';
    if (navUsuario)  navUsuario.style.display  = 'flex';
    if (navNombre)   navNombre.textContent      = usuario.alias || usuario.nombre;
}

function cerrarSesion() {
    localStorage.removeItem('neo_sesion');
    var btnIngresar = document.getElementById('btn-abrir-auth');
    var navUsuario  = document.getElementById('navbar-usuario');
    if (btnIngresar) btnIngresar.style.display = 'flex';
    if (navUsuario)  navUsuario.style.display  = 'none';
}

(function verificarSesionAlCargar() {
    var sesion = localStorage.getItem('neo_sesion');
    if (sesion) {
        try { activarSesion(JSON.parse(sesion)); }
        catch(e) { localStorage.removeItem('neo_sesion'); }
    }
})();

/* ============================================================
   F — FORO Y PUBLICACIONES
============================================================ */

var publicacionesData = {
    pintura: [
        { id:'pintura-01', alias:'@neo.pigmento', nombre:'Lucía Ferreyra', pais:'Argentina', tituloObra:'Serie Grilla Ortogonal', anioObra:'2024', descripcion:'Serie de acrílicos sobre tela explorando la grilla ortogonal y el color puro como lenguaje emocional.', resenaArtista:'Lucía trabaja desde Rosario con técnicas mixtas que dialogan con la tradición de Mondrian.', resenaObra:'La serie explora el equilibrio dinámico entre planos cromáticos y la tensión de la línea negra estructurante.', instagram:'@neo.pigmento', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.pintura-01.jpg', fotos:['../img/6-foroypublicaciones.pintura-01.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-02', alias:'@planos.primarios', nombre:'Martín Solá', pais:'Uruguay', tituloObra:'Díptico Silencio Visual', anioObra:'2023', descripcion:'Díptico que explora la tensión entre planos de color y el espacio en blanco como silencio visual.', resenaArtista:'Martín estudió Bellas Artes en Montevideo y desarrolla su práctica en torno al lenguaje geométrico abstracto.', resenaObra:'Dos piezas que funcionan como un sistema: el blanco y el color en diálogo permanente.', instagram:'@planos.primarios', behance:'behance.net/martinsolarte', telefono:'', portada:'../img/6-foroypublicaciones.pintura-02a.jpg', fotos:['../img/6-foroypublicaciones.pintura-02a.jpg','../img/6-foroypublicaciones.pintura-02b.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-03', alias:'@grid.studio', nombre:'Valentina Cruz', pais:'Chile', tituloObra:'Proporciones Áureas', anioObra:'2024', descripcion:'Experimentación con proporciones áureas y paleta primaria sobre soporte de gran formato.', resenaArtista:'Valentina combina el rigor matemático del Neoplasticismo con procesos gestálticos de composición.', resenaObra:'La proporción áurea actúa como sistema generador de la composición.', instagram:'@grid.studio', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.pintura-03.jpg', fotos:['../img/6-foroypublicaciones.pintura-03.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-04', alias:'@lienzo.recto', nombre:'Andrés Blanco', pais:'España', tituloObra:'Vaciado — Serie Negra', anioObra:'2023', descripcion:'Reducción formal al plano negro: investigación sobre la ausencia del color en el sistema neoplasticista.', resenaArtista:'Andrés explora los límites del vocabulario De Stijl mediante la eliminación progresiva del color.', resenaObra:'El negro como campo activo, no como ausencia sino como presencia máxima del peso visual.', instagram:'', behance:'behance.net/andresblanco', telefono:'', portada:'../img/6-foroypublicaciones.pintura-04.jpg', fotos:['../img/6-foroypublicaciones.pintura-04.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-05', alias:'@atlas.color', nombre:'Inés Rodríguez', pais:'México', tituloObra:'Archivo Geométrico', anioObra:'2024', descripcion:'Serie fotográfica-pictórica que fusiona el archivo documental con la intervención geométrica.', resenaArtista:'Inés trabaja en la intersección de la fotografía y la pintura geométrica.', resenaObra:'El archivo visual latinoamericano como soporte para la intervención neoplasticista.', instagram:'@atlas.color', behance:'behance.net/inesrodriguez', telefono:'', portada:'../img/6-foroypublicaciones.pintura-05a.jpg', fotos:['../img/6-foroypublicaciones.pintura-05a.jpg','../img/6-foroypublicaciones.pintura-05b.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-06', alias:'@forma.pura', nombre:'Diego Méndez', pais:'Colombia', tituloObra:'La Diagonal Prohibida', anioObra:'2023', descripcion:'Exploración de la diagonal prohibida: tensión entre el dogma ortogonal y el dinamismo visual.', resenaArtista:'Diego dialoga con el Elementarismo de Van Doesburg, incorporando la diagonal como elemento disruptivo.', resenaObra:'¿Puede el Neoplasticismo incorporar la diagonal sin traicionarse? Esta obra lo pregunta.', instagram:'@forma.pura', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.pintura-06.jpg', fotos:['../img/6-foroypublicaciones.pintura-06.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-07', alias:'@retina.roja', nombre:'Florencia Aibar', pais:'Argentina', tituloObra:'Monocromo Rojo — Serie', anioObra:'2024', descripcion:'Serie de monocromos con intervención lineal negra. El color como campo de investigación.', resenaArtista:'Florencia es egresada de la UNA y trabaja la pintura como sistema.', resenaObra:'El rojo como campo pictórico total, interrumpido por la línea negra que lo tensiona.', instagram:'@retina.roja', behance:'behance.net/florenciaaibar', telefono:'', portada:'../img/6-foroypublicaciones.pintura-07.jpg', fotos:['../img/6-foroypublicaciones.pintura-07.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-08', alias:'@amarillo.norte', nombre:'Rodrigo Suárez', pais:'Perú', tituloObra:'Variaciones en Amarillo', anioObra:'2023', descripcion:'El amarillo como protagonista: variaciones de valor y relación con el blanco en serie de 12 piezas.', resenaArtista:'Rodrigo investiga la psicología del color dentro del marco formal del Neoplasticismo.', resenaObra:'12 piezas que exploran el rango perceptivo del amarillo primario en relación al blanco puro.', instagram:'@amarillo.norte', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.pintura-08.jpg', fotos:['../img/6-foroypublicaciones.pintura-08.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-09', alias:'@azul.fijo', nombre:'Camila Torres', pais:'Argentina', tituloObra:'Peso Azul', anioObra:'2024', descripcion:'Composición en torno al azul primario y su relación con el peso visual de la grilla negra.', resenaArtista:'Camila es estudiante avanzada de Diseño Gráfico e investiga la intersección entre diseño y pintura.', resenaObra:'El azul como color de mayor peso visual dentro de la paleta primaria neoplasticista.', instagram:'@azul.fijo', behance:'behance.net/camilatorres', telefono:'', portada:'../img/6-foroypublicaciones.pintura-09.jpg', fotos:['../img/6-foroypublicaciones.pintura-09.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' },
        { id:'pintura-10', alias:'@campo.blanco', nombre:'Pablo Herrera', pais:'Bolivia', tituloObra:'El Blanco Activo', anioObra:'2023', descripcion:'El blanco como espacio activo: investigación sobre la relación figura-fondo en la tradición De Stijl.', resenaArtista:'Pablo trabaja en La Paz con acrílicos y pintura industrial sobre madera cruda.', resenaObra:'El blanco deja de ser fondo neutro para convertirse en el elemento compositivo principal.', instagram:'', behance:'behance.net/pabloherrera', telefono:'', portada:'../img/6-foroypublicaciones.pintura-10.jpg', fotos:['../img/6-foroypublicaciones.pintura-10.jpg'], rama:'pintura', ramaLabel:'Pintura', ramaIcono:'../img/a-img-icono-pintura.png' }
    ],
    arquitectura: [
        { id:'arq-01', alias:'@espacio.neo', nombre:'Sebastián Mira', pais:'Países Bajos', tituloObra:'Vivienda Colectiva Utrecht', anioObra:'2023', descripcion:'Vivienda colectiva en Utrecht con fachadas articuladas mediante planos de color primario.', resenaArtista:'Sebastián es arquitecto graduado en la TU Delft.', resenaObra:'El proyecto recupera los principios del Neoplasticismo aplicados a la escala urbana y residencial.', instagram:'@espacio.neo', behance:'behance.net/sebastianmira', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-01a.avif', fotos:['../img/6-foroypublicaciones.arquitectura-01a.avif','../img/6-foroypublicaciones.arquitectura-01b.jpg','../img/6-foroypublicaciones.arquitectura-01c.jpg','../img/6-foroypublicaciones.arquitectura-01d.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' },
        { id:'arq-02', alias:'@planta.libre', nombre:'Ana Kovács', pais:'Hungría', tituloObra:'Hábitat Mínimo — Planta Libre', anioObra:'2024', descripcion:'Análisis y reinterpretación de la planta libre en la Casa Schröder aplicada a hábitat mínimo.', resenaArtista:'Ana investiga la planta libre como concepto y su vigencia en el diseño contemporáneo.', resenaObra:'Los paneles corredizos de Rietveld reformulados con tecnología de particiones actuales.', instagram:'@planta.libre', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-02.jpg', fotos:['../img/6-foroypublicaciones.arquitectura-02.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' },
        { id:'arq-03', alias:'@muro.primario', nombre:'Lucas Ferreira', pais:'Brasil', tituloObra:'Local Comercial Vila Madalena', anioObra:'2023', descripcion:'Interiorismo de local comercial con aplicación de los cuatro colores neoplasticistas.', resenaArtista:'Lucas trabaja en São Paulo como diseñador de interiores.', resenaObra:'El vocabulario formal del Neoplasticismo aplicado al espacio de retail contemporáneo.', instagram:'@muro.primario', behance:'behance.net/lucasferreira', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-03.jpg', fotos:['../img/6-foroypublicaciones.arquitectura-03.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' },
        { id:'arq-04', alias:'@linea.constructiva', nombre:'María José Ríos', pais:'Argentina', tituloObra:'Pabellón Cultural Efímero', anioObra:'2024', descripcion:'Propuesta para pabellón cultural efímero con planos de color primario desmontables.', resenaArtista:'María José es arquitecta e investiga la arquitectura efímera como espacio de experimentación.', resenaObra:'La arquitectura efímera como laboratorio del Neoplasticismo en escala real.', instagram:'', behance:'behance.net/mjrios', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-04.jpg', fotos:['../img/6-foroypublicaciones.arquitectura-04.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' },
        { id:'arq-05', alias:'@tectonica.neo', nombre:'Johan Bakker', pais:'Bélgica', tituloObra:'Conjunto Habitacional Borgerhout', anioObra:'2023', descripcion:'Análisis tectónico de la obra de J.J.P. Oud aplicado a vivienda social en Amberes.', resenaArtista:'Johan es investigador y arquitecto.', resenaObra:'La metodología proyectual de Oud —vivienda social, prefabricación, color— actualizada.', instagram:'@tectonica.neo', behance:'behance.net/johanbakker', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-05.jpg', fotos:['../img/6-foroypublicaciones.arquitectura-05.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' },
        { id:'arq-06', alias:'@cubierta.roja', nombre:'Sofía Andrade', pais:'Ecuador', tituloObra:'Casa Unifamiliar Quito', anioObra:'2024', descripcion:'Casa unifamiliar en Quito con fachada articulada con los tres colores primarios.', resenaArtista:'Sofía desarrolló esta vivienda como proyecto de tesis.', resenaObra:'El lenguaje neoplasticista en el contexto climático y cultural ecuatoriano.', instagram:'@cubierta.roja', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.arquitectura-06.jpg', fotos:['../img/6-foroypublicaciones.arquitectura-06.jpg'], rama:'arquitectura', ramaLabel:'Arquitectura', ramaIcono:'../img/a-img-icono-arquitectura.png' }
    ],
    disenoindustrial: [
        { id:'di-01', alias:'@objeto.neo', nombre:'Felipe Crespo', pais:'España', tituloObra:'Lámpara Modular Primaria', anioObra:'2024', descripcion:'Lámpara de mesa con estructura modular ortogonal y difusor en los tres colores primarios.', resenaArtista:'Felipe es diseñador industrial graduado en Barcelona.', resenaObra:'La estructura portante visible como elemento compositivo, en diálogo con la Silla Roja y Azul.', instagram:'@objeto.neo', behance:'behance.net/felipecrespo', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-01.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-01.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-02', alias:'@grid.product', nombre:'Tamara Bloch', pais:'Alemania', tituloObra:'Mesa Auxiliar Geométrica', anioObra:'2023', descripcion:'Mesa auxiliar de madera maciza: geometría pura, color primario en los planos de apoyo.', resenaArtista:'Tamara diseña desde Berlín objetos de mobiliario que reinterpretan la tradición De Stijl.', resenaObra:'Materiales contemporáneos con principios formales del Neoplasticismo clásico.', instagram:'', behance:'behance.net/tamarabloch', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-02.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-02.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-03', alias:'@forma.util', nombre:'Nicolás Paz', pais:'Argentina', tituloObra:'Set de Vajilla Neoplasticista', anioObra:'2024', descripcion:'Set de vajilla con decoración geométrica neoplasticista: línea negra y planos de color en cerámica.', resenaArtista:'Nicolás trabaja en Mendoza con cerámica artesanal.', resenaObra:'El vocabulario formal del Neoplasticismo al objeto cotidiano democratizando el movimiento.', instagram:'@forma.util', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-03.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-03.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-04', alias:'@estructura.visible', nombre:'Clara Muñoz', pais:'Colombia', tituloObra:'Silla Varilla Ortogonal', anioObra:'2023', descripcion:'Silla de líneas ortogonales en varilla metálica: la estructura como ornamento.', resenaArtista:'Clara investiga la relación entre estructura y forma en el mobiliario.', resenaObra:'El esqueleto constructivo como elemento estético central, en la tradición de la Silla Berlín.', instagram:'@estructura.visible', behance:'behance.net/claramunoz', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-04.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-04.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-05', alias:'@modulo.rojo', nombre:'Agustín Vera', pais:'Chile', tituloObra:'Sistema Modular de Estantería', anioObra:'2024', descripcion:'Sistema modular de estantería con piezas intercambiables en los cuatro colores neoplasticistas.', resenaArtista:'Agustín desarrolló este sistema como proyecto de tesis de diseño industrial.', resenaObra:'Flexibilidad y adaptabilidad del objeto a distintos contextos habitacionales.', instagram:'@modulo.rojo', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-05.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-05.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-06', alias:'@plano.tactil', nombre:'Renata Souza', pais:'Brasil', tituloObra:'Colección Textil Neoplasticista', anioObra:'2023', descripcion:'Colección de almohadones y textiles con pattern neoplasticista para tapicería de interiores.', resenaArtista:'Renata diseña textiles en São Paulo.', resenaObra:'La textura como variable visual en la trasposición del lenguaje geométrico al plano textil.', instagram:'@plano.tactil', behance:'behance.net/renatasouza', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-06.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-06.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-07', alias:'@neo.objeto', nombre:'Emilio Fonseca', pais:'Portugal', tituloObra:'Luminaria Mondrian Suspendida', anioObra:'2024', descripcion:'Luminaria de techo en acero lacado con planos de colores primarios suspendidos.', resenaArtista:'Emilio trabaja en Lisboa en diseño de iluminación.', resenaObra:'La lógica compositiva de Mondrian en un objeto tridimensional funcional.', instagram:'@neo.objeto', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-07.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-07.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-08', alias:'@cubo.util', nombre:'Mariana Lopes', pais:'México', tituloObra:'Organizador Modular De Stijl', anioObra:'2023', descripcion:'Organizador modular ortogonal en madera natural y color primario.', resenaArtista:'Mariana diseña objetos de escritorio en Ciudad de México.', resenaObra:'Los principios del sistema De Stijl al producto de oficina en madera y color primario.', instagram:'@cubo.util', behance:'behance.net/marianalopes', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-08.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-08.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-09', alias:'@eje.vertical', nombre:'Ricardo Alves', pais:'Venezuela', tituloObra:'Perchero Estructura Visible', anioObra:'2024', descripcion:'Perchero de pie con estructura de varillas en ángulo recto y perillas de color primario.', resenaArtista:'Ricardo trabaja el diseño de mobiliario desde Caracas.', resenaObra:'El objeto funcional que exhibe su estructura como lenguaje formal, como la Silla Roja y Azul.', instagram:'', behance:'behance.net/ricardoalves', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-09.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-09.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-10', alias:'@trama.neo', nombre:'Julia Navarro', pais:'Uruguay', tituloObra:'Alfombra Tejida 200×200', anioObra:'2023', descripcion:'Alfombra tejida en lana con composición geométrica neoplasticista de 200×200 cm.', resenaArtista:'Julia combina la tradición artesanal del tejido uruguayo con el lenguaje del Neoplasticismo.', resenaObra:'Pieza única, tejida a mano en telar de cuatro marcos.', instagram:'@trama.neo', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-10.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-10.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-11', alias:'@volumen.primario', nombre:'Pablo Sáez', pais:'Argentina', tituloObra:'Mesa Centro Acrílico', anioObra:'2024', descripcion:'Mesa de centro en acrílico de colores primarios con estructura de acero negro.', resenaArtista:'Pablo trabaja en la intersección del diseño industrial y la escultura.', resenaObra:'El límite entre objeto funcional y obra de arte, dentro del marco neoplasticista.', instagram:'@volumen.primario', behance:'behance.net/pablosaez', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-11.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-11.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-13', alias:'@linea.objeto', nombre:'Carla Medina', pais:'Paraguay', tituloObra:'Portarretratos Modulares', anioObra:'2023', descripcion:'Portarretratos modulares en madera y acrílico con sistema de ensamble sin tornillos.', resenaArtista:'Carla diseña en Asunción objetos para el hogar desde producción local y artesanal.', resenaObra:'Sistema sin tornillos que dialoga con la tradición geométrica europea.', instagram:'@linea.objeto', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-13.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-13.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-14', alias:'@neo.mueble', nombre:'Hernán Giménez', pais:'Argentina', tituloObra:'Biblioteca Modular Color Primario', anioObra:'2024', descripcion:'Biblioteca de pared en módulos de madera con frentes pintados en color primario.', resenaArtista:'Hernán trabaja como ebanista y diseñador de interiores en Buenos Aires.', resenaObra:'Sistema modular reconfigurable que mantiene coherencia formal neoplasticista.', instagram:'', behance:'behance.net/hernangimenez', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-14.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-14.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-15', alias:'@plano.asiento', nombre:'Ignacio Ruíz', pais:'Bolivia', tituloObra:'Banqueta Apilable Chapa', anioObra:'2023', descripcion:'Banqueta apilable en chapa doblada: reducción al plano mínimo y estructura visible.', resenaArtista:'Ignacio desarrolla diseño de producto en La Paz con materiales industriales accesibles.', resenaObra:'Producible en serie con mínima inversión, democratizando el acceso al diseño neoplasticista.', instagram:'@plano.asiento', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-15.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-15.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'di-16', alias:'@neo.contenedor', nombre:'Sofía Bravo', pais:'Ecuador', tituloObra:'Macetero Geométrico Cerámica', anioObra:'2024', descripcion:'Macetero de cerámica con patrón geométrico neoplasticista.', resenaArtista:'Sofía trabaja en Quito con cerámica artesanal.', resenaObra:'El lenguaje geométrico del Neoplasticismo al objeto doméstico cotidiano en pequeño formato.', instagram:'@neo.contenedor', behance:'behance.net/sofiabravo', telefono:'', portada:'../img/6-foroypublicaciones.disenoindustrial-16.jpg', fotos:['../img/6-foroypublicaciones.disenoindustrial-16.jpg'], rama:'disenoindustrial', ramaLabel:'Diseño Industrial', ramaIcono:'../img/a-img-icono-disenoindustrial.png' }
    ],
    disenografico: [
        { id:'dg-01', alias:'@grid.type', nombre:'Elena Mora', pais:'España', tituloObra:'Identidad Visual Estudio Arte', anioObra:'2024', descripcion:'Sistema de identidad visual para estudio de arte basado en la grilla neoplasticista.', resenaArtista:'Elena es diseñadora gráfica en Madrid.', resenaObra:'Principios tipográficos y compositivos del Neoplasticismo para comunicación contemporánea.', instagram:'@grid.type', behance:'behance.net/elenamora', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-01.jpg', fotos:['../img/6-foroypublicaciones.disenografico-01.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'dg-02', alias:'@tipografia.pura', nombre:'Marcos Vidal', pais:'Argentina', tituloObra:'Familia Tipográfica Modular', anioObra:'2023', descripcion:'Familia tipográfica modular construida sobre grilla cuadrada de inspiración neoplasticista.', resenaArtista:'Marcos investiga el diseño tipográfico desde Buenos Aires.', resenaObra:'El alfabeto de Van Doesburg actualizado con herramientas digitales contemporáneas.', instagram:'@tipografia.pura', behance:'behance.net/marcosvidal', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-02.jpg', fotos:['../img/6-foroypublicaciones.disenografico-02.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'dg-03', alias:'@analisis.neo', nombre:'Valentina Rueda', pais:'Colombia', tituloObra:'Análisis Compositivo Neoplasticista', anioObra:'2024', descripcion:'Análisis compositivo de obras neoplasticistas: deconstrucción de la grilla, el color y la proporción.', resenaArtista:'Valentina es estudiante de Diseño Gráfico en la Universidad de los Andes.', resenaObra:'Deconstrucción de tres obras clave revelando los sistemas formales subyacentes.', instagram:'', behance:'behance.net/valentinarueda', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-03.jpg', fotos:['../img/6-foroypublicaciones.disenografico-03.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'dg-04', alias:'@afiche.puro', nombre:'Luciana Pont', pais:'Argentina', tituloObra:'Serie Afiches Música Contemporánea', anioObra:'2023', descripcion:'Serie de afiches de conciertos con lenguaje visual De Stijl.', resenaArtista:'Luciana es diseñadora gráfica en Córdoba.', resenaObra:'Grilla, tipografía de palo seco y color primario al campo del diseño editorial para espectáculos.', instagram:'@afiche.puro', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-04.jpg', fotos:['../img/6-foroypublicaciones.disenografico-04.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'dg-05', alias:'@reticula.viva', nombre:'Diego Soto', pais:'Chile', tituloObra:'Packaging Productos Orgánicos', anioObra:'2024', descripcion:'Packaging para línea de productos orgánicos con austeridad formal y color primario.', resenaArtista:'Diego trabaja en Santiago en diseño de packaging.', resenaObra:'La austeridad geométrica del Neoplasticismo como diferenciador en el mercado orgánico.', instagram:'@reticula.viva', behance:'behance.net/diegosoto', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-05.jpg', fotos:['../img/6-foroypublicaciones.disenografico-05.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'dg-06', alias:'@neo.editorial', nombre:'Paula Espinosa', pais:'México', tituloObra:'Catálogo Arte — Sistema Modular', anioObra:'2023', descripcion:'Diseño editorial de catálogo de arte con sistema modular de grilla neoplasticista.', resenaArtista:'Paula diseña publicaciones de arte en Ciudad de México.', resenaObra:'Grilla estricta y jerarquía tipográfica inspirada en la tradición editorial De Stijl.', instagram:'@neo.editorial', behance:'behance.net/paulaespinosa', telefono:'', portada:'../img/6-foroypublicaciones.disenografico-06.jpg', fotos:['../img/6-foroypublicaciones.disenografico-06.jpg'], rama:'disenografico', ramaLabel:'Diseño Gráfico', ramaIcono:'../img/a-img-icono-disenografico.png' }
    ],
    indumentaria: [
        { id:'ind-01', alias:'@costura.neo', nombre:'Romina Farías', pais:'Argentina', tituloObra:'Colección Cápsula Primaria', anioObra:'2024', descripcion:'Colección cápsula de cinco prendas con aplicaciones geométricas en colores primarios.', resenaArtista:'Romina es diseñadora de indumentaria egresada de la Universidad de Palermo.', resenaObra:'La grilla y el color primario a la construcción de la prenda.', instagram:'@costura.neo', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-01.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-01.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-02', alias:'@plano.textil', nombre:'Andrea Gómez', pais:'Colombia', tituloObra:'5 Looks Paleta Primaria', anioObra:'2023', descripcion:'Serie de 5 looks con construcción geométrica y paleta primaria sobre base blanca.', resenaArtista:'Andrea trabaja en Bogotá como diseñadora de moda.', resenaObra:'Cada pieza tratada como un plano en el espacio tridimensional del cuerpo.', instagram:'@plano.textil', behance:'behance.net/andreagomez', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-02.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-02.jpg','../img/6-foroypublicaciones.indumentaria-03.jpg','../img/6-foroypublicaciones.indumentaria-04.jpg','../img/6-foroypublicaciones.indumentaria-05.jpg','../img/6-foroypublicaciones.indumentaria-06.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-07', alias:'@construccion.forma', nombre:'Natalia Ibáñez', pais:'Chile', tituloObra:'Volumen Geométrico — 2 Prendas', anioObra:'2024', descripcion:'Dos prendas estructuradas con volumen geométrico y color primario como eje constructivo.', resenaArtista:'Natalia investiga la construcción de volumen en la indumentaria desde Santiago.', resenaObra:'La tridimensionalidad de la geometría neoplasticista aplicada al cuerpo como soporte.', instagram:'@construccion.forma', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-07a.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-07a.jpg','../img/6-foroypublicaciones.indumentaria-07b.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-08', alias:'@tejido.geo', nombre:'Paula Ramos', pais:'Perú', tituloObra:'Tejido Jacquard Neoplasticista', anioObra:'2023', descripcion:'Tejido jacquard con patrón geométrico neoplasticista integrado en la trama del textil.', resenaArtista:'Paula combina la tradición textil andina con la geometría del Neoplasticismo.', resenaObra:'El patrón integrado en la estructura misma del textil, sin intervención posterior.', instagram:'@tejido.geo', behance:'behance.net/paularamos', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-08.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-08.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-09', alias:'@accesorio.primo', nombre:'Lucía Vargas', pais:'Brasil', tituloObra:'Accesorios Cuero y Acrílico', anioObra:'2024', descripcion:'Colección de accesorios con motivos neoplasticistas en cuero y acrílico.', resenaArtista:'Lucía diseña accesorios en Río de Janeiro.', resenaObra:'Cuero natural y acrílico de color primario al servicio del lenguaje geométrico.', instagram:'@accesorio.primo', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-09.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-09.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-10', alias:'@patron.geometrico', nombre:'Sofía Quispe', pais:'Bolivia', tituloObra:'Estampado Digital Neoplasticista', anioObra:'2023', descripcion:'Estampado digital de patrón neoplasticista sobre tela de algodón.', resenaArtista:'Sofía diseña estampados digitales en Cochabamba.', resenaObra:'Patrón disponible para licenciar a productoras textiles.', instagram:'@patron.geometrico', behance:'behance.net/sofiaquispe', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-10.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-10.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-11', alias:'@neo.wearable', nombre:'Carla Pereira', pais:'Portugal', tituloObra:'Joyería Geométrica Latón', anioObra:'2024', descripcion:'Colección de joyería geométrica en latón con acabados en color primario.', resenaArtista:'Carla trabaja en Porto en el campo de la joyería contemporánea.', resenaObra:'Esculturas mínimas portables que llevan el Neoplasticismo a la joya.', instagram:'@neo.wearable', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-11.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-11.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-12', alias:'@cuerpo.plano', nombre:'Jimena Salinas', pais:'Argentina', tituloObra:'Silueta Plana — Tesis UBA', anioObra:'2023', descripcion:'Exploración de la silueta plana y el corte recto como lenguaje formal.', resenaArtista:'Jimena es estudiante avanzada de Diseño de Indumentaria en la UBA.', resenaObra:'La silueta plana y el corte recto coherentes con los principios del Neoplasticismo.', instagram:'@cuerpo.plano', behance:'behance.net/jimenasalinas', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-12.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-12.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' },
        { id:'ind-13', alias:'@zapatilla.intervenida', nombre:'Tomás Mercado', pais:'Argentina', tituloObra:'Zapatilla Intervenida', anioObra:'2024', descripcion:'Intervención artística de zapatilla base con composición neoplasticista.', resenaArtista:'Tomás trabaja en Buenos Aires interviniendo objetos de consumo masivo.', resenaObra:'El límite entre arte, diseño y cultura popular cuestionado sobre una zapatilla comercial.', instagram:'@zapatilla.intervenida', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.indumentaria-13.jpg', fotos:['../img/6-foroypublicaciones.indumentaria-13.jpg'], rama:'indumentaria', ramaLabel:'Indumentaria', ramaIcono:'../img/a-img-icono-disenoindustrial.png' }
    ],
    otros: [
        { id:'pub-01', alias:'@neo.publicidad', nombre:'Renato Vargas', pais:'Perú', tituloObra:'Campaña Agua Mineral Premium', anioObra:'2023', descripcion:'Campaña publicitaria para marca de agua mineral con austeridad formal neoplasticista.', resenaArtista:'Renato es director creativo en Lima.', resenaObra:'El vocabulario austero del Neoplasticismo como diferenciador de marca premium.', instagram:'@neo.publicidad', behance:'behance.net/renatovargaz', telefono:'', portada:'../img/6-foroypublicaciones.publicidad-01.jpg', fotos:['../img/6-foroypublicaciones.publicidad-01.jpg'], rama:'otros', ramaLabel:'Otros', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'pub-02', alias:'@motion.geo', nombre:'Camilo Nieto', pais:'Colombia', tituloObra:'Motion Graphics Neoplasticistas', anioObra:'2024', descripcion:'Motion graphics con composiciones animadas inspiradas en el Neoplasticismo.', resenaArtista:'Camilo trabaja en motion design en Medellín.', resenaObra:'La temporalidad como nueva dimensión del lenguaje formal del movimiento.', instagram:'@motion.geo', behance:'behance.net/camilonieto', telefono:'', portada:'../img/6-foroypublicaciones.publicidad-02.jpg', fotos:['../img/6-foroypublicaciones.publicidad-02.jpg'], rama:'otros', ramaLabel:'Otros', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'pub-03', alias:'@neo.mural', nombre:'Ignacio Valdés', pais:'Chile', tituloObra:'Mural Urbano 40m² Santiago', anioObra:'2023', descripcion:'Mural de intervención urbana de 40 m² en el espacio público de Santiago.', resenaArtista:'Ignacio trabaja el muralismo urbano desde Santiago.', resenaObra:'El Neoplasticismo en el espacio público, dialogando con la tradición del muralismo latinoamericano.', instagram:'@neo.mural', behance:'', telefono:'', portada:'../img/6-foroypublicaciones.publicidad-03.jpg', fotos:['../img/6-foroypublicaciones.publicidad-03.jpg'], rama:'otros', ramaLabel:'Otros', ramaIcono:'../img/a-img-icono-disenografico.png' },
        { id:'pub-04', alias:'@instalacion.neo', nombre:'Gabriela Font', pais:'España', tituloObra:'Instalación Site-Specific Galería', anioObra:'2024', descripcion:'Instalación site-specific: planos de color suspendidos en el espacio tridimensional.', resenaArtista:'Gabriela trabaja el arte de instalación en Barcelona.', resenaObra:'El espectador como parte de la composición neoplasticista tridimensional.', instagram:'@instalacion.neo', behance:'behance.net/gabrielafont', telefono:'', portada:'../img/6-foroypublicaciones.publicidad-04.jpg', fotos:['../img/6-foroypublicaciones.publicidad-04.jpg','../img/6-foroypublicaciones.publicidad-05.jpg','../img/6-foroypublicaciones.publicidad-06.jpg'], rama:'otros', ramaLabel:'Otros', ramaIcono:'../img/a-img-icono-disenografico.png' }
    ]
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
    var pubs = publicacionesData[rama] || [];
    track.innerHTML = '';
    pubs.forEach(function(pub, i) {
        var sesion    = localStorage.getItem('neo_sesion');
        var logueado  = !!sesion;
        var card = document.createElement('div');
        card.className = 'foro-card' + (i === 0 ? ' activo' : '');
        card.setAttribute('style',
            'background-image:url("' + pub.portada + '");' +
            'background-size:cover;background-position:center center;background-repeat:no-repeat;'
        );
        card.setAttribute('data-id',   pub.id);
        card.setAttribute('data-rama', rama);

        /* Info visible para TODOS */
        var infoPublica =
            '<span class="foro-card-titulo-obra">' + pub.tituloObra + '</span>' +
            '<span class="foro-card-nombre-artista">por ' + pub.nombre + '</span>';

        /* Info extra visible solo para LOGUEADOS */
        var infoPrivada = '';
        if (logueado) {
            var redes = '';
            if (pub.instagram) redes += '<a href="https://instagram.com/' + pub.instagram.replace('@','') + '" target="_blank" class="foro-card-red-icono" onclick="event.stopPropagation()"><i class="bi bi-instagram"></i></a>';
            if (pub.behance)   redes += '<a href="https://' + pub.behance + '" target="_blank" class="foro-card-red-icono" onclick="event.stopPropagation()"><i class="bi bi-behance"></i></a>';
            infoPrivada =
                '<span class="foro-card-alias">' + pub.alias + '</span>' +
                '<div class="foro-card-redes">' + redes + '</div>' +
                '<button class="foro-card-btn-mas" onclick="event.stopPropagation(); abrirPub(\'' + pub.id + '\',\'' + rama + '\')">más información <i class="bi bi-arrow-right"></i></button>';
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

/* ---- VALORACIÓN ---- */
function renderizarEstrellas(pubId) {
    var contenedor   = document.getElementById('estrellas-input');
    if (!contenedor) return;
    var valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    var sesion       = localStorage.getItem('neo_sesion');
    var miVoto = 0;
    if (sesion) {
        var usuario = JSON.parse(sesion);
        miVoto = valoraciones[pubId + '_' + usuario.alias] || 0;
    }
    contenedor.innerHTML = '';
    for (var i = 1; i <= 5; i++) {
        var btn = document.createElement('button');
        btn.className   = 'estrella-btn' + (i <= miVoto ? ' activo' : '');
        btn.textContent = '★';
        (function(valor) { btn.onclick = function() { votar(pubId, valor); }; })(i);
        contenedor.appendChild(btn);
    }
}

function votar(pubId, valor) {
    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion) { abrirAuth('login'); return; }
    var usuario      = JSON.parse(sesion);
    var valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    valoraciones[pubId + '_' + usuario.alias] = valor;
    localStorage.setItem('neo_valoraciones', JSON.stringify(valoraciones));
    renderizarEstrellas(pubId);
    actualizarPromedio(pubId);
}

function actualizarPromedio(pubId) {
    var valoraciones = JSON.parse(localStorage.getItem('neo_valoraciones') || '{}');
    var votos = Object.keys(valoraciones).filter(function(k) { return k.indexOf(pubId + '_') === 0; }).map(function(k) { return valoraciones[k]; });
    var elProm  = document.getElementById('pub-promedio');
    var elCant  = document.getElementById('pub-cant-votos');
    if (votos.length === 0) {
        if (elProm) elProm.textContent = '—';
        if (elCant) elCant.textContent = 'sin valoraciones aún';
        return;
    }
    var suma     = votos.reduce(function(a,b) { return a+b; }, 0);
    var promedio = (suma / votos.length).toFixed(1);
    if (elProm) elProm.textContent = '★ ' + promedio;
    if (elCant) elCant.textContent = votos.length + (votos.length === 1 ? ' valoración' : ' valoraciones');
}

/* ---- COMENTARIOS ---- */
function renderizarComentarios(pubId) {
    var todos       = JSON.parse(localStorage.getItem('neo_comentarios') || '{}');
    var comentarios = todos[pubId] || [];
    var lista       = document.getElementById('comentarios-lista');
    if (!lista) return;
    if (comentarios.length === 0) {
        lista.innerHTML = '<p style="font-family:DMSans,sans-serif;font-size:12px;color:#888;margin:0;">Todavía no hay comentarios. ¡Sé el primero!</p>';
        return;
    }
    lista.innerHTML = comentarios.map(function(c) {
        return '<div class="comentario-item"><p class="comentario-item-alias">' + c.alias + '</p><p class="comentario-item-texto">' + c.texto + '</p></div>';
    }).join('');
}

window.enviarComentario = function() {
    var sesion = localStorage.getItem('neo_sesion');
    if (!sesion || !pubActual) return;
    var usuario = JSON.parse(sesion);
    var elInput = document.getElementById('comentario-input');
    var texto   = elInput ? elInput.value.trim() : '';
    if (!texto) return;
    var todos = JSON.parse(localStorage.getItem('neo_comentarios') || '{}');
    if (!todos[pubActual.id]) todos[pubActual.id] = [];
    todos[pubActual.id].push({ alias: usuario.alias || usuario.nombre, texto: texto });
    localStorage.setItem('neo_comentarios', JSON.stringify(todos));
    if (elInput) elInput.value = '';
    renderizarComentarios(pubActual.id);
};

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
    if (!sesion) return;
    var usuario     = JSON.parse(sesion);
    var seccionEl   = document.getElementById('carga-seccion');
    var nombreEl    = document.getElementById('carga-nombre-obra');
    var anioEl      = document.getElementById('carga-anio');
    var resenaArtEl = document.getElementById('carga-resena-artista');
    var resenaObEl  = document.getElementById('carga-resena-obra');
    if (!seccionEl || !nombreEl || !anioEl || !resenaArtEl || !resenaObEl) return;
    if (!seccionEl.value || !nombreEl.value.trim() || !anioEl.value.trim() || !resenaArtEl.value.trim() || !resenaObEl.value.trim()) {
        alert('Completá todos los campos obligatorios.');
        return;
    }
    /* Acá irá el fetch() a PHP cuando tengas el backend */
    alert('¡Obra enviada correctamente! Será revisada y publicada próximamente.');
    window.cerrarFormularioCarga();
    e.target.reset();
};

var modalCargaEl = document.getElementById('modal-carga-obra');
if (modalCargaEl) {
    modalCargaEl.addEventListener('click', function(e) {
        if (e.target === this) window.cerrarFormularioCarga();
    });
}