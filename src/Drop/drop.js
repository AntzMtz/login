var elemorig, elemDestino, elemen02, codigo;
var x = 0;

function comenzar() {
    elemorig = document.getElementById("imagen");

    // elemorig.addEventListener("dragend", drag, false);
    // elemorig.addEventListener("drag", drag, false);
    elemorig.addEventListener("dragstart", drag, false);

    elemDestino = document.getElementById("destino");


    elemDestino.addEventListener("dragover", function(e) {
        e.preventDefault();
    }, false);
    elemDestino.addEventListener("drop", soltar, false);
    elemorig.addEventListener("dragend", termina, false);
    elemDestino.addEventListener("dragenter", zona, false);
    elemDestino.addEventListener("dragleave", salir, false);

    elemDestino.addEventListener("dragstart", function(e) {
        e.preventDefault();
    }, false);
}


function drag(e) {
    console.log("X: " + x);
    codigo = "<img src='" + elemorig.getAttribute("src") + "' id='imagen'>";
    e.dataTransfer.setData("Text", codigo);
}


function soltar(e) {
    e.preventDefault();
    console.log("get: " + e.dataTransfer.getData("Text"));
    elemDestino.innerHTML = e.dataTransfer.getData("Text");
}

function termina(e) {
    elemen02 = e.target;
    if (elemDestino.style.background == "red") {
        console.log("si entro");
        elemen02.style.visibility = "hidden";
    } else {
        console.log("No entro");
    }
}

function zona(e) {
    e.preventDefault;
    elemDestino.style.background = "red";
}

function salir(e) {
    e.preventDefault
    elemDestino.style.background = "white";

}

window.addEventListener("load", comenzar, false);