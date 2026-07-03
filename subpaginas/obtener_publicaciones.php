<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include("conexion.php");

$rama = isset($_GET['rama']) ? mysqli_real_escape_string($conexion, $_GET['rama']) : '';

if ($rama) {
    $consulta = mysqli_query($conexion,
        "SELECT * FROM publicaciones WHERE rama = '$rama' AND activo = 1
         ORDER BY fecha_publicacion DESC"
    );
} else {
    $consulta = mysqli_query($conexion,
        "SELECT * FROM publicaciones WHERE activo = 1
         ORDER BY fecha_publicacion DESC"
    );
}

$publicaciones = [];
while ($fila = mysqli_fetch_assoc($consulta)) {
    $fila['fotos'] = json_decode($fila['fotos'], true) ?: [];
    $publicaciones[] = $fila;
}

echo json_encode($publicaciones, JSON_UNESCAPED_UNICODE);
mysqli_close($conexion);
?>