<?php
// CONEXIÓN A BASE DE DATOS
$conexion = new mysqli("localhost", "root", "", "abarrotes");

// VERIFICAR CONEXIÓN
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// RECIBIR DATOS DEL FORMULARIO
$ubicacion = $_POST['ubicacion'];
$mensaje = $_POST['mensaje'];

// INSERTAR EN MYSQL
$sql = "INSERT INTO domicilio (ubicacion, mensaje) VALUES (?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $ubicacion, $mensaje);

// EJECUTAR
if ($stmt->execute()) {
    echo "<script>
        alert('Pedido enviado correctamente');
        window.location.href='domicilio.html';
    </script>";
} else {
    echo "<script>
        alert('Error al enviar pedido');
        window.location.href='domicilio.html';
    </script>";
}

// CERRAR CONEXIÓN
$stmt->close();
$conexion->close();
?>