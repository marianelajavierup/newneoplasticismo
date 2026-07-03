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

$datos = json_decode(file_get_contents('php://input'), true);

$nombre       = $datos['nombre']           ?? '';
$apellido     = $datos['apellido']         ?? '';
$alias        = $datos['alias']            ?? '';
$nacionalidad = $datos['nacionalidad']     ?? '';
$nacimiento   = $datos['fecha_nacimiento'] ?? '';
$email        = $datos['email']            ?? '';
$telefono     = $datos['telefono']         ?? '';
$instagram    = $datos['instagram']        ?? '';
$behance      = $datos['behance']          ?? '';
$rama         = $datos['rama']             ?? '';
$pass         = $datos['pass']             ?? '';

/* Validar campos obligatorios */
if (!$nombre || !$apellido || !$alias || !$nacionalidad || 
    !$nacimiento || !$email || !$rama || !$pass) {
    echo json_encode(['ok' => false, 'error' => 'Faltan campos obligatorios']);
    exit;
}

/* Verificar alias único */
$consulta = mysqli_query($conexion, "SELECT id FROM usuarios WHERE alias = '$alias'");
if (mysqli_num_rows($consulta) > 0) {
    echo json_encode(['ok' => false, 'error' => 'alias_duplicado']);
    exit;
}

/* Verificar email único */
$consulta = mysqli_query($conexion, "SELECT id FROM usuarios WHERE email = '$email'");
if (mysqli_num_rows($consulta) > 0) {
    echo json_encode(['ok' => false, 'error' => 'email_duplicado']);
    exit;
}

/* Hash de la contraseña */
$password = password_hash($pass, PASSWORD_BCRYPT);

/* Insertar usuario */
$consulta = mysqli_query($conexion,
    "INSERT INTO usuarios 
     (nombre, apellido, alias, nacionalidad, fecha_nacimiento, 
      email, telefono, instagram, behance, rama, password_hash)
     VALUES 
     ('$nombre','$apellido','$alias','$nacionalidad','$nacimiento',
      '$email','$telefono','$instagram','$behance','$rama','$password')"
);

if ($consulta) {
    $nuevo_id = mysqli_insert_id($conexion);
    echo json_encode([
        'ok'     => true,
        'id'     => $nuevo_id,
        'alias'  => $alias,
        'nombre' => $nombre,
        'email'  => $email,
        'rama'   => $rama
    ]);
} else {
    echo json_encode(['ok' => false, 'error' => 'Error al guardar: ' . mysqli_error($conexion)]);
}

mysqli_close($conexion);
?>