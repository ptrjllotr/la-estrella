let carrito = {};

// 🛒 AGREGAR PRODUCTO
function agregar(nombre, precio) {
    if (carrito[nombre]) {
        carrito[nombre].cantidad++;
    } else {
        carrito[nombre] = {
            precio: precio,
            cantidad: 1
        };
    }

    actualizar();
}

// 📊 ACTUALIZAR
function actualizar() {
    let cantidadTotal = 0;
    let total = 0;

    for (let nombre in carrito) {
        cantidadTotal += carrito[nombre].cantidad;
        total += carrito[nombre].precio * carrito[nombre].cantidad;
    }

    document.getElementById("cantidad").innerText = cantidadTotal;
    document.getElementById("total").innerText = total;
}

// 🧹 VACIAR
function vaciar() {
    carrito = {};
    actualizar();
}

// 🗑 BORRAR ÚLTIMO
function borrarUltimo() {
    let keys = Object.keys(carrito);
    if (keys.length === 0) return;

    let ultimo = keys[keys.length - 1];

    carrito[ultimo].cantidad--;

    if (carrito[ultimo].cantidad <= 0) {
        delete carrito[ultimo];
    }

    actualizar();
}

// 💳 PAGO (SOLO AQUÍ APARECEN OPCIONES)
function pagar() {
    let total = 0;

    for (let nombre in carrito) {
        total += carrito[nombre].precio * carrito[nombre].cantidad;
    }

    if (total === 0) {
        alert("El carrito está vacío");
        return;
    }

    let opcion = prompt(
        "TOTAL A PAGAR: $" + total +
        "\n\nElige método de pago:\n" +
        "1 - Efectivo\n" +
        "2 - Tarjeta\n" +
        "3 - Transferencia"
    );

    if (opcion === null) return;

    if (opcion === "1") {
        alert("Pago en efectivo confirmado. Total: $" + total);
    } 
    else if (opcion === "2") {
        alert("Pago con tarjeta confirmado. Total: $" + total);
    } 
    else if (opcion === "3") {
        alert("Transferencia confirmada. Total: $" + total);
    } 
    else {
        alert("Opción inválida. Pago cancelado.");
        return;
    }

    carrito = {};
    actualizar();
}