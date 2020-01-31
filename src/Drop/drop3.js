var soltar;

function comenzar() {
    soltar = document.getElementById("destino");
    soltar.addEventListener("dragenter", function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener("dragover", function(e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener("drop", soltarText, false);

}

function soltarText(e) {
    e.preventDefault();
    var archivo = e.dataTransfer.files;
    var listado = "";
    for (var f = 0; f < archivo.length; f++) {
        // listado = (archivo[f].size/1024).toFixed(2);
        // listado = archivo[f].name;
        listado += "Archivo: " + archivo[f].name + " Peso: " + (archivo[f].size / 1024).toFixed(2) + " Tipo: " + archivo[f].type + "<br>";

    }
    soltar.innerHTML = listado;
}

window.addEventListener("load", comenzar, false);