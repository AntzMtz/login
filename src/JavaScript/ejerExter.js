//java Script
var a = 1;

function ejecuta() {
    // document.getElementsByTagName("p")[0].onclick=alerta;  
    // document.getElementById("sec").onclick=alerta;
    // for (var i=0; i<2;i++){

    //     document.getElementsByTagName("p")[i].onclick=alerta;

    // }

    // var x = document.getElementsByClassName("secu");
    // for (var i = 0; i < x.length; i++) {
    //     x[i].onclick = alerta;
    //     console.log("secu:" + x.length);


    //     // a = document.getElementsByClassName("secu")[i].
    // }
    // Con este selecciona un evento mediante css3 que contengan el atributo secu solo regresa 1
    // document.querySelector(".secu").onclick = alerta;
    // Lo mismo que el de arriba solo que selecciona el ultimo
    // document.querySelector("#principal p:last-child").onclick = alerta;
    // var elentos = document.querySelectorAll("#principal p")[0].onclick = alerta;
    var elentos = document.querySelectorAll("#principal p, span, .secu");
    for (var i = 0; i < elentos.length; i++) {
        elentos[i].onclick = alerta;
        console.log(elentos.length);
    }
}



function alerta() {
    alert("Nuevo quien:" + a);
}

window.onload = ejecuta;