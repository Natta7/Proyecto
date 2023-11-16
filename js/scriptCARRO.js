// scriptCARRO.js

// Verifica si la variable carrito ya está definida
if (!window.carrito) {
    // Si no está definida, la declara
    let carrito = [];

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        mostrarCarrito();
    }

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    var carritoContainer = document.getElementById('carrito-container');
    var totalContainer = document.getElementById('total-container');

    // Limpiamos el contenido previo
    carritoContainer.innerHTML = '';
    totalContainer.textContent = '';

    // Mostramos el contenido del carrito
    carrito.forEach(function (producto) {
        var productoEnCarrito = document.createElement('p');
        productoEnCarrito.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);
        carritoContainer.appendChild(productoEnCarrito);
    });

    // Mostramos el total de la compra
    var total = carrito.reduce(function (sum, producto) {
        return sum + producto.precio;
    }, 0);

    totalContainer.textContent = 'Total: $' + total.toFixed(2);
}

    // Función para realizar la compra
    function realizarCompra() {
        // Aquí puedes agregar la lógica para finalizar la compra
        console.log('Compra realizada:', carrito);

        // Puedes limpiar el carrito después de realizar la compra
        carrito = [];
        mostrarCarrito();
    }

    // Función de ejemplo para obtener el contenido del carrito
    function obtenerContenidoDelCarrito() {
        // Aquí implementarías la lógica para obtener el contenido actual del carrito
        // Esta función debe retornar un array de objetos que representen los productos en el carrito
        // Por ejemplo: [{nombre: 'Producto 1', precio: 50.00}, {nombre: 'Producto 2', precio: 100.00}]
        return carrito;
    }
}