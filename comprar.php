<?php
include "conexion.php";

$producto = $_POST['producto'];
$precio = $_POST['precio'];

$sql = "INSERT INTO compra (producto, precio) VALUES (?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("sd", $producto, $precio);

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "error";
}
?>