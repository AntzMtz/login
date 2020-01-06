// function comezar() {
//     var nombre2 = document.getElementById("nombre1");
//     var Apellido = document.getElementById("Apellido");
//     var edad = document.getElementById("edad");
//     nombre1.addEventListener("input", validar, false);
//     Apellido.addEventListener("input", validar, false);
//     validar();
// }

// function validar() {
//     if (nombre1.value == "" && Apellido.value == "") {
//         nombre1.setCustomValidity("Introduce Nombre y Apellido");
//         Apellido.setCustomValidity("");
//         nombre1.style.background = "#FFDDDD"
//         Apellido.style.background = "#FFDDDD"
//     } else if (!nombre1.value == "" && Apellido.value == "") {
//         nombre1.setCustomValidity("");
//         Apellido.setCustomValidity("Introduce Apellido");
//         nombre1.style.background = "#FFFFFF"
//         Apellido.style.background = "#FFDDDD"
//     } else if (nombre1.value == "" && !Apellido.value == "") {
//         nombre1.setCustomValidity("Introduce Nombre");
//         Apellido.setCustomValidity("");
//         Apellido.style.background = "#FFFFFF"
//         nombre1.style.background = "#FFDDDD"
//     } else {
//         nombre1.setCustomValidity("");
//         Apellido.setCustomValidity("");
//         Apellido.style.background = "#FFFFFF"
//         nombre1.style.background = "#FFFFFF"
//     }
// }
var edad;

function comezar() {
    edad = document.getElementById("edad");
    edad.addEventListener("change", cambia_rango, false);
    document.registro_usuarios.addEventListener("invalid", validar, true);
    document.getElementById("Enviar").addEventListener("click", enviar, false);
    document.registro_usuarios.addEventListener("input", validar1, false);
    // validar1();
}

function cambia_rango() {
    var salida = document.getElementById("rango");
    // var calculo = edad.value - 30;
    var calculo = edad.value
    if (calculo < 0) {
        calculo = 0
            // edad.value = 30;
    }
    // salida.innerHTML = calculo + " a " + edad.value
    salida.innerHTML = calculo
}

function validar(e) {
    var elemento = e.target;
    elemento.style.background = "#FFDDDD";
    // enviar();
}

function enviar() {
    var correcto = document.registro_usuarios.checkValidity();
    var cuadro_usuario = document.getElementById("usuario");
    if (correcto == true) {
        document.registro_usuarios.submit();
    } else if (cuadro_usuario.validity.valueMissing == true &&
        texto.validity.valueMissing == true) {
        usuario.setCustomValidity("Introduce Usuario y Correo electronico Por Favor");
        texto.setCustomValidity("");

    } else if (cuadro_usuario.validity.valueMissing == false && texto.validity.valueMissing == true) {

        if (cuadro_usuario.validity.patternMismatch == true) {
            usuario.setCustomValidity("El usuario es de 3 Caracteres");
            texto.setCustomValidity("");
        } else {

            usuario.setCustomValidity("");
            texto.setCustomValidity("Introduce Correo electronico");
        }
    } else if (cuadro_usuario.validity.valueMissing == true && texto.validity.valueMissing == false) {
        usuario.setCustomValidity("Introduce Usuario");
        texto.setCustomValidity("");

    } else {
        if (cuadro_usuario.validity.patternMismatch == true) {
            usuario.setCustomValidity("El usuario es de 3 Caracteres");
            texto.setCustomValidity("");
        } else {
            usuario.setCustomValidity("");
            texto.setCustomValidity("");
        }


    }
}

function validar1() {
    usuario.setCustomValidity("");
    texto.setCustomValidity("");
    if (usuario.value == "" && texto.value == "") {
        usuario.style.background = "#FFDDDD"
        texto.style.background = "#FFDDDD"
    } else if (!usuario.value == "" && texto.value == "") {
        usuario.style.background = "#FFFFFF"
        texto.style.background = "#FFDDDD"
    } else if (usuario.value == "" && !texto.value == "") {
        texto.style.background = "#FFFFFF"
        usuario.style.background = "#FFDDDD"
    } else {

        texto.style.background = "#FFFFFF"
        usuario.style.background = "#FFFFFF"
    }
}

window.addEventListener("load", comezar, false)