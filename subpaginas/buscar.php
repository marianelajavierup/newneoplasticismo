<?php
$servidor  = "localhost";
$usuario   = "root";
$clave     = "";
$basedatos = "up_neoplasticismo";

$conn = mysqli_connect($servidor, $usuario, $clave, $basedatos);

if (!$conn) {
    echo json_encode([]);
    exit;
}

mysqli_set_charset($conn, "utf8mb4");

$q    = isset($_GET['q'])    ? trim($_GET['q'])    : '';
$tipo = isset($_GET['tipo']) ? trim($_GET['tipo']) : '';

if (strlen($q) < 2) {
    echo json_encode([]);
    exit;
}

$busqueda_limpia = mysqli_real_escape_string($conn, $q);
$busqueda = '%' . $busqueda_limpia . '%';

$filtroTipo = '';
if ($tipo !== '') {
    $tipo_limpio = mysqli_real_escape_string($conn, $tipo);
    $filtroTipo  = " AND tipo = '$tipo_limpio'";
}

$sql = "SELECT id, tipo, titulo, descripcion, imagen, link, id_contenido, tags
        FROM contenidos
        WHERE (titulo LIKE '$busqueda' OR descripcion LIKE '$busqueda' OR tags LIKE '$busqueda')
        $filtroTipo
        ORDER BY titulo ASC
        LIMIT 10";

$resultado = mysqli_query($conn, $sql);

$datos = [];
while ($fila = mysqli_fetch_assoc($resultado)) {
    $datos[] = $fila;
}

echo json_encode($datos);
mysqli_close($conn);
?>