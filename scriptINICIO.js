// script.js

// Función para mostrar el estado de inicio de sesión
function mostrarEstadoInicioSesion() {
    var usuarioGuardado = localStorage.getItem('usuario');
    var menuUsuario = document.getElementById('menu-usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (usuarioGuardado) {
        var usuario = JSON.parse(usuarioGuardado);
        console.log('Usuario almacenado:', usuario);
        mostrarNombreUsuario(usuario.nombre);
    } else {
        console.log('No hay usuario almacenado en localStorage');
        ocultarElementosUsuario();
    }
}

// Función para mostrar el nombre del usuario
function mostrarNombreUsuario(nombre) {
    var mensajeBienvenida = document.getElementById('mensaje-bienvenida');

    if (mensajeBienvenida) {
        mensajeBienvenida.innerText = '¡Bienvenido, ' + nombre + '!';
    }

    mostrarElementosUsuario();
}

// Función para ocultar elementos del usuario
function ocultarElementosUsuario() {
    var menuUsuario = document.getElementById('menu-usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (menuUsuario && opcionesUsuario && menuVisitante) {
        menuUsuario.style.display = 'none';
        opcionesUsuario.style.display = 'none';
        menuVisitante.style.display = 'block';
    }
}

// Función para mostrar elementos del usuario
function mostrarElementosUsuario() {
    var menuUsuario = document.getElementById('menu-usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (menuUsuario && opcionesUsuario && menuVisitante) {
        menuUsuario.style.display = 'block';
        opcionesUsuario.style.display = 'block';
        menuVisitante.style.display = 'none';
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuario'); // Elimina el usuario almacenado en localStorage
    window.location.href = "index.html"; // Redirige a la página de inicio
}

try {
    console.log('Script ejecutado correctamente');

    // Muestra el estado de inicio de sesión al cargar la página
    mostrarEstadoInicioSesion();
} catch (error) {
    console.error('Error en el script:', error);
}

