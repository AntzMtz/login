var elemorig1, elemDestino, elemen02, codigo, element01;
var x = false;
var nombre;

function comenzar() {
    elemorig1 = document.querySelectorAll("#cajaimagenes img");

    for (var i = 0; i < elemorig1.length; i++) {
        elemorig1[i].addEventListener("dragstart", arrastrar, false);


        elemorig1[i].addEventListener("dragend", imagenTermina, false);

    }
    elemDestino = document.getElementById("destino");

    elemDestino.addEventListener("dragenter", entrando, false);
    elemDestino.addEventListener("dragover", function(e) {
        e.preventDefault();
    }, false);
    elemDestino.addEventListener("dragleave", salir, false);

    elemDestino.addEventListener("drop", destinoDrop, false);




}

function arrastrar(e) {
    element01 = e.target;
    console.log("element01: " + element01);
    e.dataTransfer.setData("Text", element01.getAttribute("id"))
        // codigo = "<img src='" + elemorig1[i].getAttribute("src") + "' id='imagen'>";
        // e.dataTransfer.setData("Text", codigo);
        // console.log("codi: " + codigo);

}

function destinoDrop(e) {

    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    var src = document.getElementById(id).src;

    if (src == null) {
        console.log("src:+" + src);
    } else {
        elemDestino.innerHTML = "<img src='" + src + "' id='" + id + "'>";
        console.log("codi env: " + elemDestino);
        x = true;

    }
    elemDestino.style.background = "white";


}

function entrando(e) {
    e.preventDefault();
    elemDestino.style.background = "rgba(8,252,25,.5)";
}

function salir(e) {
    e.preventDefault();
    elemDestino.style.background = "white";
}

function imagenTermina(e) {
    var imagenDes = e.target;
    if (x == true) {

        nombre = elemorig1[i].id.slice(0, -1);
        console.log("nombre: " + nombre);
        imagenDes.style.visibility = "hidden";
        x = false;
    }

    // console.log("Termina");


}

window.addEventListener("load", comenzar, false);