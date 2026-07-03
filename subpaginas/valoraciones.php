<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

include("conexion.php");

/* GET — traer promedio y voto del usuario */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $pub_id     = isset($_GET['pub_id'])     ? mysqli_real_escape_string($conexion, $_GET['pub_id'])     : '';
    $usuario_id = isset($_GET['usuario_id']) ? intval($_GET['usuario_id']) : 0;

    if (!$pub_id) { echo json_encode(['promedio' => 0, 'total' => 0, 'mi_voto' => 0]); exit; }

    $res = mysqli_query($conexion,
        "SELECT AVG(estrellas) as promedio, COUNT(*) as total FROM valoraciones
         WHERE publicacion_id = '$pub_id'"
    );
    $datos = mysqli_fetch_assoc($res);

    $mi_voto = 0;
    if ($usuario_id) {
        $res2 = mysqli_query($conexion,
            "SELECT estrellas FROM valoraciones
             WHERE publicacion_id = '$pub_id' AND usuario_id = '$usuario_id'"
        );
        if ($fila = mysqli_fetch_assoc($res2)) {
            $mi_voto = intval($fila['estrellas']);
        }
    }

    echo json_encode([
        'promedio' => $datos['promedio'] ? round($datos['promedio'], 1) : 0,
        'total'    => intval($datos['total']),
        'mi_voto'  => $mi_voto
    ]);
    exit;
}

/* POST — guardar o actualizar valoración */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $datos = json_decode(file_get_contents('php://input'), true);

    $pub_id     = mysqli_real_escape_string($conexion, $datos['pub_id']     ?? '');
    $usuario_id = intval($datos['usuario_id'] ?? 0);
    $alias      = mysqli_real_escape_string($conexion, $datos['alias']      ?? '');
    $estrellas  = intval($datos['estrellas']  ?? 0);

    if (!$pub_id || !$usuario_id || $estrellas < 1 || $estrellas > 5) {
        echo json_encode(['ok' => false, 'error' => 'Datos inválidos']);
        exit;
    }

    /* INSERT o UPDATE si ya votó */
    $consulta = mysqli_query($conexion,
        "INSERT INTO valoraciones (publicacion_id, usuario_id, alias, estrellas)
         VALUES ('$pub_id', '$usuario_id', '$alias', '$estrellas')
         ON DUPLICATE KEY UPDATE estrellas = '$estrellas'"
    );

    if ($consulta) {
        /* Devolver nuevo promedio */
        $res = mysqli_query($conexion,
            "SELECT AVG(estrellas) as promedio, COUNT(*) as total
             FROM valoraciones WHERE publicacion_id = '$pub_id'"
        );
        $nuevo = mysqli_fetch_assoc($res);
        echo json_encode([
            'ok'       => true,
            'promedio' => round($nuevo['promedio'], 1),
            'total'    => intval($nuevo['total'])
        ]);
    } else {
        echo json_encode(['ok' => false, 'error' => mysqli_error($conexion)]);
    }
    exit;
}

mysqli_close($conexion);
?>