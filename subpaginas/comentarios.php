<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

include("conexion.php");

/* GET — traer comentarios de una publicación */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $pub_id = isset($_GET['pub_id']) ? mysqli_real_escape_string($conexion, $_GET['pub_id']) : '';
    if (!$pub_id) { echo json_encode([]); exit; }

    $consulta = mysqli_query($conexion,
        "SELECT alias, texto, fecha FROM comentarios
         WHERE publicacion_id = '$pub_id'
         ORDER BY fecha ASC"
    );
    $comentarios = [];
    while ($fila = mysqli_fetch_assoc($consulta)) {
        $comentarios[] = $fila;
    }
    echo json_encode($comentarios, JSON_UNESCAPED_UNICODE);
    exit;
}

/* POST — guardar comentario */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $datos = json_decode(file_get_contents('php://input'), true);

    $pub_id     = mysqli_real_escape_string($conexion, $datos['pub_id']     ?? '');
    $usuario_id = intval($datos['usuario_id'] ?? 0);
    $alias      = mysqli_real_escape_string($conexion, $datos['alias']      ?? '');
    $texto      = mysqli_real_escape_string($conexion, $datos['texto']      ?? '');

    if (!$pub_id || !$usuario_id || !$alias || !$texto) {
        echo json_encode(['ok' => false, 'error' => 'Datos incompletos']);
        exit;
    }

    $consulta = mysqli_query($conexion,
        "INSERT INTO comentarios (publicacion_id, usuario_id, alias, texto)
         VALUES ('$pub_id', '$usuario_id', '$alias', '$texto')"
    );

    if ($consulta) {
        echo json_encode(['ok' => true]);
    } else {
        echo json_encode(['ok' => false, 'error' => mysqli_error($conexion)]);
    }
    exit;
}

mysqli_close($conexion);
?>
