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
    elemDestino.addEventListener("dragover", function (e) {
        e.preventDefault();
    }, false);
    elemDestino.addEventListener("dragleave", salir, false);

    elemDestino.addEventListener("drop", destinoDrop, false);
}

function arrastrar(e) {
    element01 = e.target;
    nombre = e.target.id.slice(0,-1);
    console.log("nom1: "+nombre);
    // console.log("element01: " + element01);
    e.dataTransfer.setData("Text", element01.getAttribute("id"))
}

function destinoDrop(e) {

    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    var src = document.getElementById(id).src;

    if (src == null) {
        console.log("src:+" + src);
    } else {
        if(nombre=="Flor"){
            elemDestino.innerHTML = "<img src='" + src + "' id='" + id + "'>";
        }
        
        // console.log("codi env: " + elemDestino);
        x = true;

    }
    elemDestino.style.background = "white";


}

function entrando(e) {
    e.preventDefault();
    
    if(nombre=="Flor"){
        elemDestino.style.background = "rgba(8,252,25,.5)";
    }else{
        elemDestino.style.background = "rgba(255,0,0,.3)"
    }
    
}

function salir(e) {
    e.preventDefault();
    elemDestino.style.background = "white";
}

function imagenTermina(e) {
    var imagenDes = e.target;
    // console.log("target: "+imagenDes.id);
    
    if (x == true) {
        
        
        if(nombre=="Flor"){
            // console.log("nombre: " + nombre);
            imagenDes.style.visibility = "hidden";
            
        }
        x = false;
    }

    // console.log("Termina");


}

window.addEventListener("load", comenzar, false);