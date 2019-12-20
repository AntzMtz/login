var mivideo, reproducir, barra, progreso, timeV, maximo;

maximo = 300;

function comenzar() {
    mivideo = document.getElementById("Mi video");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", playV, false);
    barra.addEventListener("click", moverV, false);
    bucle = setInterval(estado, 100);
}

function playV() {
    if ((mivideo.paused == false) && (mivideo.ended == false)) {
        mivideo.pause();
        reproducir.innerHTML = "Play";
    } else if ((mivideo.paused == true) && (mivideo.ended == false)) {
        mivideo.play();
        reproducir.innerHTML = "Pause";

    }
}

function estado() {
    if (mivideo.ended == false) {
        timeV = parseInt(mivideo.currentTime * maximo / mivideo.duration)
            // console.log("Time" + mivideo.currentTime + "duracion: " + mivideo.duration);
        progreso.style.width = timeV + "px";
    }

}

function moverV(posicion) {
    if (mivideo.paused == false && mivideo.ended == false) {


        var ratonX = posicion.pageX - barra.offsetLeft;
        console.log(ratonX);

        var nuevoTime = ratonX * mivideo.duration / maximo;
        mivideo.currentTime = nuevoTime;
        progreso.style.width = ratonX + "px";

    }
    // console.log(barra.offsetLeft + " posicion: " + pageX);


}


window.addEventListener("load", comenzar, false);