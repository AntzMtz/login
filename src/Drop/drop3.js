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
        // listado = archivo[f].size;
        listado = archivo[f].name;

    }
    soltar.innerHTML = listado;
}

window.addEventListener("load", comenzar, false);