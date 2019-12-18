//java Script
var a = 1;

function ejecuta() {
    // document.getElementsByTagName("p")[0].onclick=alerta;  
    // document.getElementById("sec").onclick=alerta;
    // for (var i=0; i<2;i++){

    //     document.getElementsByTagName("p")[i].onclick=alerta;

    // }


    for (var i = 0; i < 2; i++) {

        var x = document.getElementsByClassName("secu")[i].onclick = alerta;
        // a = document.getElementsByClassName("secu")[i].
    }

}

function alerta() {
    alert("Nuevo quien:" + a);
}

window.onload = ejecuta;