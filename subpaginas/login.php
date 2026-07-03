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

$datos   = json_decode(file_get_contents('php://input'), true);
$usuario = $datos['usuario'] ?? '';
$pass    = $datos['pass']    ?? '';

if (!$usuario || !$pass) {
    echo json_encode(['ok' => false, 'error' => 'Datos incompletos']);
    exit;
}

$consulta = mysqli_query($conexion,
    "SELECT id, nombre, apellido, alias, email, rama,
            instagram, behance, telefono, password_hash
     FROM usuarios
     WHERE alias = '$usuario' OR email = '$usuario'
     LIMIT 1"
);

if (mysqli_num_rows($consulta) === 0) {
    echo json_encode(['ok' => false, 'error' => 'credenciales_incorrectas']);
    exit;
}

$fila = mysqli_fetch_assoc($consulta);

if (!password_verify($pass, $fila['password_hash'])) {
    echo json_encode(['ok' => false, 'error' => 'credenciales_incorrectas']);
    exit;
}

unset($fila['password_hash']);
echo json_encode(['ok' => true, 'usuario' => $fila]);

mysqli_close($conexion);
?>