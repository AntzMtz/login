var zonaD, boton, bd;

function iniciar() {
    zonaD = document.getElementById("zonaDatos");
    boton = document.getElementById("grabar");
    boton.addEventListener("click", creaBD, false);
    var solicitud = indexedDB.open("miBase");
    solicitud.onsuccess = function(e) {
        bd = e.target.result;
    }

    solicitud.onupgradeneeded = function(e) {
        bd.crateObjectStore("gente", { keyPath: "clave" })
    }
}

function creaBD() {

}

window.addEventListener("load", iniciar, false);