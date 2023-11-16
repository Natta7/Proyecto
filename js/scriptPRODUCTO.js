// scriptPRODUCTO.js

// Función para crear un producto
function crearProducto(nombre, descripcion, precio, imagen) {
    // Crear el contenedor principal del producto
    var productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Crear la imagen del producto
    var imgElement = document.createElement('img');
    imgElement.src = imagen;
    imgElement.alt = nombre;

    // Crear el nombre del producto
    var nameElement = document.createElement('p');
    nameElement.textContent = nombre;

    // Crear la descripción del producto
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = descripcion;

    // Crear el precio del producto
    var priceElement = document.createElement('div');
    priceElement.classList.add('price');
    
    // Verificar que el precio sea un número antes de usar toFixed
    if (typeof precio === 'number' && !isNaN(precio)) {
        priceElement.textContent = '$' + precio.toFixed(2);
    } else {
        // Manejar precios no válidos
        priceElement.textContent = 'Precio no válido';
    }

    // Crear el contenedor de botones
    var buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    // Crear el botón de "Añadir a carrito"
    var addToCartButton = document.createElement('button');
    addToCartButton.classList.add('button');
    addToCartButton.textContent = 'Añadir a carrito';
    addToCartButton.onclick = function () {
        agregarAlCarrito({ nombre: nombre, precio: precio });
    };

    // Crear el botón de "Comprar"
    var buyButton = document.createElement('button');
    buyButton.classList.add('button');
    buyButton.textContent = 'Comprar';
    buyButton.onclick = realizarCompra;

    // Añadir los botones al contenedor de botones
    buttonsDiv.appendChild(addToCartButton);
    buttonsDiv.appendChild(buyButton);

    // Añadir todos los elementos al contenedor principal del producto
    productDiv.appendChild(imgElement);
    productDiv.appendChild(nameElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(buttonsDiv);

    // Devolver el contenedor principal del producto
    return productDiv;
}