-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2026 a las 05:30:21
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `up_neoplasticismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `publicacion_id` varchar(50) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `alias` varchar(80) NOT NULL,
  `texto` text NOT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `publicacion_id`, `usuario_id`, `alias`, `texto`, `fecha`) VALUES
(1, 'bd_1', 2, 'Marian', 'muy moderno', '2026-06-14 20:38:33'),
(2, 'bd_1', 22, 'Roca Calzados', 'hermoso sillón', '2026-06-14 20:41:44'),
(3, 'bd_10', 2, 'Marian', 'Me encanta el diseño del objeto.', '2026-06-15 16:03:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenidos`
--

CREATE TABLE `contenidos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `tags` varchar(500) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT current_timestamp(),
  `id_contenido` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `contenidos`
--

INSERT INTO `contenidos` (`id`, `tipo`, `titulo`, `descripcion`, `imagen`, `link`, `tags`, `fecha_registro`, `id_contenido`) VALUES
(1, 'autor', 'Piet Mondrian', 'Principal representante del Neoplasticismo. Desarrolló un lenguaje visual abstracto basado en líneas horizontales y verticales negras.', '../img/c-autores-piet-mondrian-01.webp', 'autores', 'mondrian,neoplasticismo,pintura,de stijl', '2026-06-01 18:27:35', 'mondrian'),
(2, 'autor', 'Theo van Doesburg', 'Fundador y motor intelectual del movimiento De Stijl. Redactó los tres manifiestos del grupo.', '../img/c-autores-theo-van-doesburg-01.webp', 'autores', 'doesburg,de stijl,manifiesto,neoplasticismo', '2026-06-01 18:27:35', 'doesburg'),
(3, 'autor', 'Gerrit Rietveld', 'Tradujo los principios neoplasticistas al diseño de mobiliario y la arquitectura. Casa Schröder y Silla Roja y Azul.', '../img/c-autores-gerrit-rietveld-01.jfif', 'autores', 'rietveld,arquitectura,silla,casa schroder', '2026-06-01 18:27:35', 'rietveld'),
(4, 'autor', 'Vilmos Huszár', 'Miembro fundador de De Stijl. Diseñó el logotipo de la revista del movimiento.', '../img/c-autores-vilmos-huszar-01.jpg', 'autores', 'huszar,de stijl,neoplasticismo', '2026-06-01 18:27:35', 'huszar'),
(5, 'autor', 'Bart van der Leck', 'Aportó al neoplasticismo su particular uso del color plano y la geometría simple.', '../img/c-autores-bart-van-der-leck-01.jpg', 'autores', 'van der leck,color,geometria,neoplasticismo', '2026-06-01 18:27:35', 'vanderleck'),
(6, 'autor', 'J.J.P. Oud', 'Principal arquitecto del movimiento De Stijl junto a Rietveld.', '../img/c-autores-jacobus-johannes-pieter-oud-01.jpg', 'autores', 'oud,arquitectura,de stijl', '2026-06-01 18:27:35', 'oud'),
(7, 'obra', 'Composición con Rojo, Azul y Amarillo', 'Piet Mondrian, 1930. Óleo sobre tela — 46 × 46 cm.', '../img/5-obras.pintura-mondrian-01.jpg', 'obras', 'mondrian,pintura,composicion,neoplasticismo,color', '2026-06-01 18:27:35', 'mondrian-01'),
(8, 'obra', 'Tableau I', 'Piet Mondrian, 1921. Óleo sobre tela — 103 × 100 cm.', '../img/5-obras.pintura-mondrian-02.jpg', 'obras', 'mondrian,pintura,tableau,neoplasticismo', '2026-06-01 18:27:35', 'mondrian-02'),
(9, 'obra', 'Casa Schröder', 'Gerrit Rietveld, 1924. Utrecht, Países Bajos. Patrimonio UNESCO.', '../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg', 'obras', 'rietveld,arquitectura,casa,schroder,neoplasticismo', '2026-06-01 18:27:35', 'casa-schroder'),
(10, 'obra', 'Café Aubette', 'Theo van Doesburg, 1928. Estrasburgo, Francia.', '../img/5-obras.arquitectura-cafeaubette-01.jpg', 'obras', 'doesburg,arquitectura,cafe,aubette,neoplasticismo', '2026-06-01 18:27:35', 'cafe-aubette'),
(11, 'obra', 'Silla Roja y Azul', 'Gerrit Rietveld, 1917. Madera lacada. Diseño industrial.', '../img/5-obras.disenoindustrial-sillarietveld.webp', 'obras', 'rietveld,silla,diseño,industrial,neoplasticismo', '2026-06-01 18:27:35', 'silla-rietveld-01'),
(22, 'obra', 'Composición en Negro, Blanco y Gris', 'Piet Mondrian, 1939. Óleo sobre tela — 80,7 × 73,5 cm.', '../img/5-obras.pintura-mondrian-01.jpg', 'obras', 'mondrian,pintura,negro,blanco,gris,neoplasticismo', '2026-06-01 18:34:39', 'mondrian-04'),
(23, 'obra', 'Silla Berlín', 'Gerrit Rietveld, 1923. Madera — 84 × 61,5 × 78 cm.', '../img/5-obras.disenoindustrial-sillarietveld2.png', 'obras', 'rietveld,silla,berlin,diseño,industrial,neoplasticismo', '2026-06-01 18:34:39', 'silla-rietveld-02'),
(24, 'obra', 'Proyecto Maison Particulière', 'Theo van Doesburg, 1923. Proyecto arquitectónico en París.', '../img/5-obras.arquitectura-rietveldhouseschroderhuis-01.jpg', 'obras', 'doesburg,arquitectura,paris,maison,neoplasticismo', '2026-06-01 18:34:39', 'maison-particuliere'),
(25, 'obra', 'Portada De Stijl N°1', 'Theo van Doesburg y Vilmos Huszár, 1917. Diseño editorial.', '../img/5-obras.disenoindustrial-sillarietveld.webp', 'obras', 'doesburg,huszar,diseño grafico,revista,de stijl,tipografia', '2026-06-01 18:34:39', 'disenografico-01'),
(26, 'autor', 'Piet Mondrian — Obras', 'Mondrian pintó más de 250 obras entre 1905 y 1944 explorando la abstracción pura.', '../img/c-autores-piet-mondrian-02.webp', 'autores', 'mondrian,obras,pintura,abstraccion,neoplasticismo,composicion', '2026-06-01 18:34:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `alias` varchar(80) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `rama` varchar(100) NOT NULL,
  `titulo_obra` varchar(200) NOT NULL,
  `anio_obra` varchar(4) NOT NULL,
  `resena_artista` text DEFAULT NULL,
  `resena_obra` text DEFAULT NULL,
  `instagram` varchar(100) DEFAULT '',
  `behance` varchar(150) DEFAULT '',
  `telefono` varchar(30) DEFAULT '',
  `portada` varchar(300) DEFAULT '',
  `fotos` text DEFAULT '',
  `activo` tinyint(1) DEFAULT 1,
  `fecha_publicacion` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `usuario_id`, `alias`, `nombre`, `pais`, `rama`, `titulo_obra`, `anio_obra`, `resena_artista`, `resena_obra`, `instagram`, `behance`, `telefono`, `portada`, `fotos`, `activo`, `fecha_publicacion`) VALUES
(1, 2, 'Marian', 'Marianela', '', 'disenoindustrial', 'Sillón Neoclasicista', '2026', 'hola', 'chau', '', '', '', '../img/uploads/pub_2_1781478548_0.jpg', '[\"..\\/img\\/uploads\\/pub_2_1781478548_0.jpg\"]', 1, '2026-06-14 20:09:08'),
(2, 8, '@neo.pigmento', 'Lucía Ferreyra', 'Argentina', 'pintura', 'Serie Grilla Ortogonal', '2024', 'Lucía trabaja desde Rosario con técnicas mixtas que dialogan con la tradición de Mondrian.', 'La serie explora el equilibrio dinámico entre planos cromáticos y la tensión de la línea negra estructurante.', '@neo.pigmento', '', '', '../img/6-foroypublicaciones.pintura-01.jpg', '[\"../img/6-foroypublicaciones.pintura-01.jpg\"]', 1, '2026-06-15 10:00:12'),
(3, 8, '@planos.primarios', 'Martín Solá', 'Uruguay', 'pintura', 'Silencio Visual', '2023', 'Martín estudió Bellas Artes en Montevideo y desarrolla su práctica en torno al lenguaje geométrico abstracto.', 'Dos piezas que funcionan como un sistema: el blanco y el color en diálogo permanente.', '@planos.primarios', 'behance.net/martinsolarte', '', '../img/6-foroypublicaciones.pintura-02a.jpg', '[\"../img/6-foroypublicaciones.pintura-02a.jpg\",\"../img/6-foroypublicaciones.pintura-02b.jpg\"]', 1, '2026-06-15 10:00:12'),
(4, 8, '@grid.studio', 'Valentina Cruz', 'Chile', 'pintura', 'Proporciones Áureas', '2024', 'Valentina combina el rigor matemático del Neoplasticismo con procesos espaciales de composición.', 'La proporción áurea actúa como sistema generador de la composición.', '@grid.studio', '', '', '../img/6-foroypublicaciones.pintura-03.jpg', '[\"../img/6-foroypublicaciones.pintura-03.jpg\"]', 1, '2026-06-15 10:00:12'),
(5, 8, '@lienzo.recto', 'Andrea Blanco', 'España', 'pintura', 'Anne', '2023', 'Exploro los límites del vocabulario De Stijl mediante la eliminación progresiva del color.', 'El negro como campo activo, no como ausencia sino como presencia máxima del peso visual.', '', '', '', '../img/6-foroypublicaciones.pintura-04.jpg', '[\"../img/6-foroypublicaciones.pintura-04.jpg\"]', 1, '2026-06-15 10:00:12'),
(6, 8, '@espacio.neo', 'Sebastián Mira', 'Países Bajos', 'arquitectura', 'Vivienda Colectiva Utrecht', '2023', 'Sebastián es arquitecto graduado en la TU Delft.', 'El proyecto recupera los principios del Neoplasticismo aplicados a la escala urbana y residencial.', '@espacio.neo', 'behance.net/sebastianmira', '', '../img/6-foroypublicaciones.arquitectura-01a.avif', '[\"../img/6-foroypublicaciones.arquitectura-01a.avif\",\"../img/6-foroypublicaciones.arquitectura-01b.jpg\",\"../img/6-foroypublicaciones.arquitectura-01c.jpg\",\"../img/6-foroypublicaciones.arquitectura-01d.jpg\"]', 1, '2026-06-15 10:00:12'),
(7, 8, '@planta.libre', 'Ana Kovács', 'Hungría', 'arquitectura', 'Hábitat Mínimo — Planta Libre', '2024', 'Ana investiga la planta libre como concepto y su vigencia en el diseño contemporáneo.', 'Los paneles corredizos de Rietveld reformulados con tecnología de particiones actuales.', '@planta.libre', '', '', '../img/6-foroypublicaciones.arquitectura-02.jpg', '[\"../img/6-foroypublicaciones.arquitectura-02.jpg\"]', 1, '2026-06-15 10:00:12'),
(8, 8, '@muro.primario', 'Lucas Ferreira', 'Brasil', 'arquitectura', 'Local Comercial Vila Madalena', '2023', 'Lucas trabaja en São Paulo como diseñador de interiores.', 'El vocabulario formal del Neoplasticismo aplicado al espacio de retail contemporáneo.', '@muro.primario', 'behance.net/lucasferreira', '', '../img/6-foroypublicaciones.arquitectura-03.jpg', '[\"../img/6-foroypublicaciones.arquitectura-03.jpg\"]', 1, '2026-06-15 10:00:12'),
(9, 8, '@grid.product', 'Tamara Bloch', 'Alemania', 'disenoindustrial', 'Sillón de tres cuerpos Geométrico', '2023', 'Tamara diseña desde Berlín objetos de mobiliario que reinterpretan la tradición De Stijl.', 'Materiales contemporáneos con principios formales del Neoplasticismo clásico.', '', 'behance.net/tamarabloch', '', '../img/6-foroypublicaciones.disenoindustrial-02.jpg', '[\"../img/6-foroypublicaciones.disenoindustrial-02.jpg\"]', 1, '2026-06-15 10:00:12'),
(10, 8, '@forma.util', 'Nicolás Paz', 'Argentina', 'disenoindustrial', 'Reloj de pared', '2024', 'Nicolás trabaja en Mendoza con objetos cotidianos.', 'El vocabulario formal del Neoplasticismo al objeto cotidiano democratizando el movimiento.', '@forma.util', '', '', '../img/6-foroypublicaciones.disenoindustrial-03.jpg', '[\"../img/6-foroypublicaciones.disenoindustrial-03.jpg\"]', 1, '2026-06-15 10:00:12'),
(11, 8, '@estructura.visible', 'Clara Muñoz', 'Colombia', 'disenoindustrial', 'Varilla Ortogonal', '2023', 'Clara investiga la relación entre estructura y forma en los objetos.', 'De la cotidianeidad al acompañamiento del día a día en cualquier mesa moderna.', '@estructura.visible', 'behance.net/claramunoz', '', '../img/6-foroypublicaciones.disenoindustrial-04.jpg', '[\"../img/6-foroypublicaciones.disenoindustrial-04.jpg\"]', 1, '2026-06-15 10:00:12'),
(12, 8, '@modulo.rojo', 'Agustín Vera', 'Chile', 'disenoindustrial', 'Sistema Modular', '2024', 'Agustín desarrolló este sistema como proyecto de tesis de diseño industrial.', 'Flexibilidad y adaptabilidad del objeto en sus diferentes facetas.', '@modulo.rojo', '', '', '../img/6-foroypublicaciones.disenoindustrial-05.jpg', '[\"../img/6-foroypublicaciones.disenoindustrial-05.jpg\"]', 1, '2026-06-15 10:00:12'),
(13, 8, '@grid.type', 'Elena Mora', 'España', 'disenografico', 'Identidad Visual Estudio Arte', '2024', 'Elena es diseñadora gráfica en Madrid.', 'Principios tipográficos y compositivos del Neoplasticismo para comunicación contemporánea.', '@grid.type', 'behance.net/elenamora', '', '../img/6-foroypublicaciones.disenografico-01.jpg', '[\"../img/6-foroypublicaciones.disenografico-01.jpg\"]', 1, '2026-06-15 10:00:12'),
(14, 8, '@tipografia.pura', 'Marcos Vidal', 'Argentina', 'disenografico', 'Moodboard', '2023', 'Marcos investiga el diseño espacial interior desde Buenos Aires.', 'Exploración de objetos, telas, formas para transmitir un lenguaje único.', '@tipografia.pura', 'behance.net/marcosvidal', '', '../img/6-foroypublicaciones.disenografico-02.jpg', '[\"../img/6-foroypublicaciones.disenografico-02.jpg\"]', 1, '2026-06-15 10:00:12'),
(15, 8, '@analisis.neo', 'Valentina Rueda', 'Colombia', 'disenografico', 'Análisis Compositivo Neoplasticista', '2024', 'Valentina es estudiante de Diseño Gráfico en la Universidad de los Andes.', 'Deconstrucción de tres obras clave revelando los sistemas formales subyacentes.', '', 'behance.net/valentinarueda', '', '../img/6-foroypublicaciones.disenografico-03.jpg', '[\"../img/6-foroypublicaciones.disenografico-03.jpg\"]', 1, '2026-06-15 10:00:12'),
(16, 8, '@afiche.puro', 'Luciana Pont', 'Argentina', 'disenografico', 'Serie Afiches Contemporánea para Obra Particular', '2023', 'Luciana es diseñadora gráfica en Córdoba.', 'Ante un encargo particular, se desarrolló una serie de afiches compositivos.', '@afiche.puro', '', '', '../img/6-foroypublicaciones.disenografico-04.jpg', '[\"../img/6-foroypublicaciones.disenografico-04.jpg\"]', 1, '2026-06-15 10:00:12'),
(17, 8, '@costura.neo', 'Romina Farías', 'Argentina', 'indumentaria', 'Sandalias Femeninas', '2024', 'Romina es diseñadora de indumentaria egresada de la Universidad de Palermo.', 'La grilla y el color primario a la construcción del calzado.', '@costura.neo', '', '', '../img/6-foroypublicaciones.indumentaria-01.jpg', '[\"../img/6-foroypublicaciones.indumentaria-01.jpg\"]', 1, '2026-06-15 10:00:12'),
(18, 8, '@plano.textil', 'Andrea Gómez', 'Colombia', 'indumentaria', 'Looks icónico de Yves Saint Laurent', '2023', 'Andrea trabaja en Bogotá como diseñadora de moda.', 'Recopilación de material oficial de los diseños.', '@plano.textil', 'behance.net/andreagomez', '', '../img/6-foroypublicaciones.indumentaria-02.jpg', '[\"../img/6-foroypublicaciones.indumentaria-02.jpg\",\"../img/6-foroypublicaciones.indumentaria-03.jpg\",\"../img/6-foroypublicaciones.indumentaria-04.jpg\",\"../img/6-foroypublicaciones.indumentaria-05.jpg\",\"../img/6-foroypublicaciones.indumentaria-06.jpg\"]', 1, '2026-06-15 10:00:12'),
(19, 8, '@construccion.forma', 'Natalia Ibáñez', 'Chile', 'indumentaria', 'Zapatillas Vans (intervención)', '2024', 'Natalia investiga la construcción de volumen en el calzado desde Santiago.', 'La tridimensionalidad de la geometría neoplasticista aplicada al cuerpo como soporte.', '@construccion.forma', '', '', '../img/6-foroypublicaciones.indumentaria-07a.jpg', '[\"../img/6-foroypublicaciones.indumentaria-07a.jpg\",\"../img/6-foroypublicaciones.indumentaria-07b.jpg\"]', 1, '2026-06-15 10:00:12'),
(20, 8, '@neo.publicidad', 'Renato Vargas', 'Perú', 'otros', 'Campaña Carteras Premium', '2023', 'Renato es director creativo en Lima.', 'El vocabulario austero del Neoplasticismo como diferenciador de marca premium.', '@neo.publicidad', 'behance.net/renatovargaz', '', '../img/6-foroypublicaciones.publicidad-01.jpg', '[\"../img/6-foroypublicaciones.publicidad-01.jpg\"]', 1, '2026-06-15 10:00:12'),
(21, 8, '@motion.geo', 'Camilo Nieto', 'Colombia', 'otros', 'Tesis Neoplasticista Publicitaria', '2024', 'Camilo trabaja en motion design en Medellín.', 'La temporalidad como nueva dimensión del lenguaje formal del movimiento.', '@motion.geo', 'behance.net/camilonieto', '', '../img/6-foroypublicaciones.publicidad-02.jpg', '[\"../img/6-foroypublicaciones.publicidad-02.jpg\"]', 1, '2026-06-15 10:00:12'),
(22, 2, 'Marian', 'Marianela', '', 'disenoindustrial', 'Set de Valijas', '2024', 'La obra de Piet Mondrian influyó profundamente en el diseño, la arquitectura y la moda del siglo XX.', 'Estas valijas reinterpretan la abstracción geométrica del artista, fusionando identidad visual, funcionalidad y movilidad contemporánea.', '', '', '', '../img/uploads/pub_2_1781550042_0.jpg', '[\"..\\/img\\/uploads\\/pub_2_1781550042_0.jpg\"]', 1, '2026-06-15 16:00:42'),
(23, 2, 'Marian', 'Marianela', '', 'otros', 'Neoplasticismo Mochila', '2023', 'Piet Mondrian fue un pintor neerlandés y referente del movimiento De Stijl, reconocido por su lenguaje abstracto basado en líneas y colores primarios.', 'La mochila traslada la composición geométrica de Mondrian al diseño cotidiano, transformando un ícono del arte moderno en un objeto funcional.', '', '', '', '../img/uploads/pub_2_1781550308_0.jpg', '[\"..\\/img\\/uploads\\/pub_2_1781550308_0.jpg\"]', 1, '2026-06-15 16:05:08'),
(24, 2, 'Marian', 'Marianela', '', 'otros', '150 años de Mondrian', '2023', 'Homenaje a un artista.', 'Serie de objetos conmemorativos por los 150años del maestro Mondrian.', '', '', '', '../img/uploads/pub_2_1781579435_0.jpg', '[\"..\\/img\\/uploads\\/pub_2_1781579435_0.jpg\",\"..\\/img\\/uploads\\/pub_2_1781579435_1.jpg\"]', 1, '2026-06-16 00:10:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `alias` varchar(80) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(150) NOT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `behance` varchar(150) DEFAULT NULL,
  `rama` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `fecha_registro` datetime DEFAULT current_timestamp(),
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `alias`, `nacionalidad`, `fecha_nacimiento`, `email`, `telefono`, `instagram`, `behance`, `rama`, `password_hash`, `fecha_registro`, `activo`) VALUES
(1, 'Debora', 'Marin', 'Millie', 'Argentina', '1984-10-23', 'canallona_86@hotmail.com', '', '', '', 'pintura', '$2y$10$5c84W2X6acKnFYfOOtHjR.ogDN6Xv24fgp5fquGt779JullXz4MMC', '2026-05-12 00:47:46', 1),
(2, 'Marianela', 'Javier', 'Marian', 'Argentina', '1990-09-03', 'marianelajavierarq@gmail.com', '', '', '', 'arquitectura', '$2y$10$/0RhFA3CSVQXXDYf2XthqeiMaV5q17ABwkaFKpd5V9UUQn.9fSW.q', '2026-05-12 00:54:47', 1),
(3, 'Juan', 'Cubito', 'Fideo_88', 'Argentina', '1988-01-19', 'rc_juancc@hotmail.com', '', '', '', 'disenoindustrial', '$2y$10$pg/s//DAWP7HwGelp6dLdegJtH5ffLcIwza/l7emvpHI78MOwuPwS', '2026-05-12 01:34:37', 1),
(4, 'Julio', 'Javier', 'Juliooo', 'Argentina', '1944-08-05', 'juliojavier262@gmail.com', '3413713149', '', '', 'Investigador', '$2y$10$qsQcEDNbyFXaG.N39w.Shefy94/XytqJAnOKBrh6/Mrsjv5ddRDZG', '2026-05-12 14:26:21', 1),
(5, 'Nelida', 'Moreno', 'Lupe', 'Argentina', '1947-10-14', 'marianelajavier@hotmail.com', '3413713149', '', '', 'indumentaria', '$2y$10$1PWNHgaKkZV5cqf95.JCM.A2cIyY6oV4bPUcvmZkIhe6oZfGeIvEe', '2026-05-12 15:07:42', 1),
(6, 'Juan Carlos', 'Cubito', 'Juan88', 'Argentina', '1988-01-19', 'cubitojc@gmail.com', '', '', '', 'disenoindustrial', '$2y$10$edBzSiVa2YdsN.gNaQOgWuvuTb/DNwVBbDRNNFo6eKJDvDJNiXjem', '2026-05-12 15:21:37', 1),
(7, 'Marianela', 'Javi', 'Marian03', 'Argentina', '1990-09-03', 'marianelajavierfpsf@gmail.com', '', '', '', 'disenografico', '$2y$10$vwT8L9rl0yqjM.JozHg7sees1jj89e.qQX6akRQs3MXJ6Lhq.UnJq', '2026-05-12 15:27:07', 1),
(8, 'Leilen', 'Javier', 'Leilen03', 'Argentina', '1990-09-03', 'marianelajavier@gmail.com', '3413713149', 'portfolio.marianelajavierup', 'https://www.behance.net/for_you', 'indumentaria', '$2y$10$XYS2prhaUAyV6GiLv6BLQuSFYASRcgteuH0TvPadcMh17nPuoyk/2', '2026-05-19 16:15:52', 1),
(9, 'Selene', 'Javier', 'Selen', 'Argentina', '2004-11-30', 'javiersele30@gmail.com', '341111111', '', '', 'Aficionado', '$2y$10$Q19loaEuXh.5419w.enbeeeI9WPg8ucrGMomuYKGhWlL3YEonI28e', '2026-05-19 18:50:18', 1),
(10, 'Silvina', 'Reichholz', 'Silvi_15', 'Argentina', '1972-10-15', 'selemile@hotmail.com', '3413232323', '', '', 'indumentaria', '$2y$10$aYlDJUVecTonyJdEVHC2/e0Q8JXOUuT3.zJeZfORU4zVoWCghqO7a', '2026-05-30 16:07:37', 1),
(11, 'Andrea', 'Cubito', '04', 'Argentina', '1983-03-04', 'andrea.virginia.cubito@gmail.com', '', '', '', 'fotografía', '$2y$10$ytqjzLRrW5XNQnatTFfawOS3JZAqWquhqGPlL7CTN/cUpq0tGLZb6', '2026-05-31 10:38:21', 1),
(12, 'Analía', 'Caminos', 'Any', 'Argentina', '1990-01-01', 'anuchycaminos@gmail.com', '', '', '', 'pintura', '$2y$10$NFq8YPWdPZwTm/0MAf5b4OSlrbvwGPi5GrtH3CRMcRAFyh8KM3Wvm', '2026-05-31 10:46:39', 1),
(13, 'Alfonsina', 'Quarin', 'Nemo', 'Argentina', '1990-01-01', 'alfonsina.gabrielaq@gmail.com', '', '', '', 'arquitectura', '$2y$10$.jYdJhIj2SRMymTSa5j/AebnBFZR2ITLDsi7hFzhVHF66/KefV4E6', '2026-05-31 10:53:22', 1),
(14, 'Ariana', 'Rojas', 'Ari', 'Argentina', '1990-01-01', 'ariaana98@gmail.com', '', '', '', 'maestra plástica', '$2y$10$3CPP6D.4DaB0BMi0KKec/Of6UF8Xy5FNiDM2to3nd7ZYUlNX/ArZ6', '2026-05-31 11:05:24', 1),
(15, 'Milena', 'Javier', 'Milen', 'Argentina', '2008-09-11', 'milejavi11@gmail.com', '3413112233', '', '', 'disenoindustrial', '$2y$10$Ni7KGE6YHZp4Tw2UWkxCfu/48dTVe7wWo38y6sVeQ8p4PeJuyaPsm', '2026-05-31 15:10:57', 1),
(16, 'Dayana', 'Lopez', 'Daya', 'Argentina', '1990-01-01', 'l_l_dayana2@hotmail.com', '', '', '', 'disenografico', '$2y$10$TXF.GiiQVDP8jMi2UsWcP.xYOt88D7HqtvON45p3PlcParvb1NQ6a', '2026-06-01 07:27:07', 1),
(17, 'Estefania', 'Ruiz', 'Estefi', 'Argentina', '1990-01-01', 'estefiruiz_90@hotmail.com', '', '', '', 'arquitectura', '$2y$10$rUCokyOBqr2VwRADTrctduOnHsvGg0T10U04LRz7DTK6qZTULFZie', '2026-06-01 07:34:53', 1),
(18, 'Guadalupe', 'Moreno', 'Lupe_14', 'Argentina', '1947-10-14', 'nelidaguadalupemoreno@gmail.com', '', '', '', 'interés general', '$2y$10$cR7NkDtDdc3yi6vth7oHdOr/MKted6GEnzHTLT1Ad6Lv5F3zzunv.', '2026-06-01 16:07:08', 1),
(19, 'Estefania', 'Mico', 'Estef', 'Argentina', '1988-09-01', 'estefaniam674@gmail.com', '', '', '', 'pintura', '$2y$10$n388l36M9Q9cpkvvu.PRYel60GppQmoMgtAW2oJOeDhWU09uIgPEC', '2026-06-01 17:52:26', 1),
(20, 'Selene', 'Coronel', 'SeleH', 'Argentina', '1990-01-01', 'selecoronel@gmail.com', '', '', '', 'pintura', '$2y$10$33aBRYl5GfM8I5B8EcTVEOyfxzZxbP8UDEIIoeIyxrZb/i.TydfPm', '2026-06-01 17:59:03', 1),
(21, 'Selene', 'Javier', 'Selenee', 'Argentina', '2004-11-30', 'selejavier30@gmail.com', '3414444444', '', '', 'arquitectura', '$2y$10$v0zkjge0HIlkz6pvKKurUeSDxNow9gA7DyJGd.rx/eqRvxU4iSjR2', '2026-06-01 18:05:35', 1),
(22, 'Roca', 'Cubito', 'Roca Calzados', 'Argentina', '1990-01-01', 'rocacalzados@hotmail.com', '3417778899', '', '', 'indumentaria', '$2y$10$oox980EmynSvZHFQFXTKWOyj6X1V/hVzTE1kmoSnkmbbi/2KEF6Zm', '2026-06-01 18:40:08', 1),
(23, 'Abel', 'Javier', 'Abel 05', 'Argentina', '1972-08-05', 'jaeelectronica23@gamil.com', '', '', '', 'interés general', '$2y$10$C9RfNIXtKW4T38J3fDU3B.LVjuct0S.K0zgF77z48McplN7g/tKmC', '2026-06-15 16:08:45', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id` int(11) NOT NULL,
  `publicacion_id` varchar(50) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `alias` varchar(80) NOT NULL,
  `estrellas` tinyint(4) NOT NULL CHECK (`estrellas` between 1 and 5),
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `publicacion_id`, `usuario_id`, `alias`, `estrellas`, `fecha`) VALUES
(1, 'bd_1', 2, 'Marian', 5, '2026-06-14 20:38:26'),
(3, 'bd_1', 22, 'Roca Calzados', 5, '2026-06-14 20:41:29'),
(4, 'bd_10', 2, 'Marian', 5, '2026-06-15 16:02:55'),
(5, 'bd_21', 2, 'Marian', 3, '2026-06-15 16:06:17'),
(6, 'bd_2', 2, 'Marian', 4, '2026-06-16 00:06:34'),
(7, 'bd_5', 2, 'Marian', 2, '2026-06-16 00:06:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unico_voto` (`publicacion_id`,`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contenidos`
--
ALTER TABLE `contenidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
