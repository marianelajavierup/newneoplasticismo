<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

include("conexion.php");

/* Datos del usuario desde POST */
$usuario_id    = intval($_POST['usuario_id']    ?? 0);
$alias         = trim($_POST['alias']           ?? '');
$nombre        = trim($_POST['nombre']          ?? '');
$pais          = trim($_POST['pais']            ?? '');
$rama          = trim($_POST['rama']            ?? '');
$titulo_obra   = trim($_POST['titulo_obra']     ?? '');
$anio_obra     = trim($_POST['anio_obra']       ?? '');
$resena_artista= trim($_POST['resena_artista']  ?? '');
$resena_obra   = trim($_POST['resena_obra']     ?? '');
$instagram     = trim($_POST['instagram']       ?? '');
$behance       = trim($_POST['behance']         ?? '');
$telefono      = trim($_POST['telefono']        ?? '');

/* Validar campos obligatorios */
if (!$usuario_id || !$alias || !$nombre || !$rama || !$titulo_obra || !$anio_obra) {
    echo json_encode(['ok' => false, 'error' => 'Faltan campos obligatorios']);
    exit;
}

/* Subir imágenes */
$portada = '';
$fotos_arr = [];
$upload_dir = __DIR__ . '/../img/uploads/';

if (!empty($_FILES['imagenes']['name'][0])) {
    $tipos_permitidos = ['image/jpeg', 'image/png', 'image/webp'];
    $max_archivos = 5;
    $cantidad = min(count($_FILES['imagenes']['name']), $max_archivos);

    for ($i = 0; $i < $cantidad; $i++) {
        if ($_FILES['imagenes']['error'][$i] !== 0) continue;
        if (!in_array($_FILES['imagenes']['type'][$i], $tipos_permitidos)) continue;

        $ext       = pathinfo($_FILES['imagenes']['name'][$i], PATHINFO_EXTENSION);
        $nombre_archivo = 'pub_' . $usuario_id . '_' . time() . '_' . $i . '.' . $ext;
        $destino   = $upload_dir . $nombre_archivo;
        $ruta_web  = '../img/uploads/' . $nombre_archivo;

        if (move_uploaded_file($_FILES['imagenes']['tmp_name'][$i], $destino)) {
            $fotos_arr[] = $ruta_web;
            if ($i === 0) $portada = $ruta_web;
        }
    }
}

/* Si no subió imágenes, usar placeholder */
if (empty($portada)) {
    $portada = '../img/a-img-icono-pintura.png';
}

$fotos_json = mysqli_real_escape_string($conexion, json_encode($fotos_arr));
$portada    = mysqli_real_escape_string($conexion, $portada);
$alias      = mysqli_real_escape_string($conexion, $alias);
$nombre     = mysqli_real_escape_string($conexion, $nombre);
$pais       = mysqli_real_escape_string($conexion, $pais);
$rama       = mysqli_real_escape_string($conexion, $rama);
$titulo_obra= mysqli_real_escape_string($conexion, $titulo_obra);
$anio_obra  = mysqli_real_escape_string($conexion, $anio_obra);
$resena_artista = mysqli_real_escape_string($conexion, $resena_artista);
$resena_obra    = mysqli_real_escape_string($conexion, $resena_obra);
$instagram  = mysqli_real_escape_string($conexion, $instagram);
$behance    = mysqli_real_escape_string($conexion, $behance);
$telefono   = mysqli_real_escape_string($conexion, $telefono);

$consulta = mysqli_query($conexion,
    "INSERT INTO publicaciones
     (usuario_id, alias, nombre, pais, rama, titulo_obra, anio_obra,
      resena_artista, resena_obra, instagram, behance, telefono, portada, fotos)
     VALUES
     ('$usuario_id','$alias','$nombre','$pais','$rama','$titulo_obra','$anio_obra',
      '$resena_artista','$resena_obra','$instagram','$behance','$telefono','$portada','$fotos_json')"
);

if ($consulta) {
    echo json_encode([
        'ok'  => true,
        'id'  => mysqli_insert_id($conexion),
        'msg' => 'Obra publicada correctamente.'
    ]);
} else {
    echo json_encode(['ok' => false, 'error' => 'Error al guardar: ' . mysqli_error($conexion)]);
}

mysqli_close($conexion);
?>