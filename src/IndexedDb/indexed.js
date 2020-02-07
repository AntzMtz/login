var zonaD, boton, bd, solicitud;

function iniciar() {
    zonaD = document.getElementById("zonaDatos");
    boton = document.getElementById("grabar");
    boton.addEventListener("click", creaBD, false);
    var solicitud = indexedDB.open("miBase");
    solicitud.onsuccess = function(e) {
        bd = e.target.result;
    }

    solicitud.onupgradeneeded = function(e) {
        bd = e.target.result;
        bd.createObjectStore("gente", { keyPath: "clave" })
    }
}

function creaBD() {
    var clav = document.getElementById("clave").value;
    var val = document.getElementById("valor").value;
    var fech = document.getElementById("fecha").value;
    var trans = bd.transaction(["gente"], "readwrite");
    var alma = trans.objectStore("gente");
    var agre = alma.add({ clave: clav, valor: val, fecha: fech });


    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("fecha").value = "";
    agre.addEventListener("success", mostrarDat, false)


}

function mostrarDat() {
    zonaD.innerHTML = "";
    var transa1 = bd.transaction(["gente"], "readonly");
    var almace = transa1.objectStore("gente");
    var curso = almace.openCursor();
    curso.addEventListener("success", mostaD, false);
}

function mostaD(e) {
    var curso = e.target.result;
    if (curso) {
        zonaD.innerHTML += "<div>" + curso.value.clave + " " + curso.value.valor + " " + curso.value.fecha + "</div>"
        curso.continue();
    }
}


window.addEventListener("load", iniciar, false);