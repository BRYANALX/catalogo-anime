// Obtener valores de la RUTA
var parteUrl = window.location.search;
var urlSearchParams = new URLSearchParams(parteUrl);


var valorUsuario = urlSearchParams.get('usuario');
var valorContrasena = urlSearchParams.get("contra");


var h1 = document.getElementById('titulo');
h1.innerHTML = 'Bienvenida ' + valorUsuario + ' al Catalogo de animes';
