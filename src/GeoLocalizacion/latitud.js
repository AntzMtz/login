var output, ubicaText, infoWindow;
var ubica = "";
var map;
var maker;
var pos, long, lati, opti;

function comenzar() {
    var boton = document.getElementById("find_btn");
    boton.addEventListener("click", ubicacion, false);
}

function ubicacion(e) {
    console.log("Click correcto");
    output = document.getElementById("map");
    ubicaText = document.getElementById("lati");
    if (navigator.geolocation) {
        output.innerHTML = "<p>Tu Navegador soporta localización</p>"
        var configura = {
            // enableHighAccuracy:true,
            // timeout:10000,
            // maximunAge:60000
        };
        // localizacion();
        //  navigator.geolocation.watchPosition(localizacion,errores,configura);
        navigator.geolocation.getCurrentPosition(localizacion, errores, configura);

    } else {
        output.innerHTML = "<p>Tu Navegador No soporta localización</p>"
    }
}


function localizacion(posicion) {
    pos01(posicion);
    output.innerHTML = "<p> " + ubica + "</p>";
    ubicaText.innerHTML = "<p> " + ubica + "</p>";
    geneMap(posicion);
    geneMarke(posicion);
    console.log("ubica: " + ubica);

    maker.addListener('click', iformacion)
}

function geneMarke(posicion) {
    var imt = '../imagen/pequeño.png';
    var image = {
        url: imt, //ruta de la imagen
        size: new google.maps.Size(300, 300), //tamaño de la imagen
        origin: new google.maps.Point(0, 0), //origen de la iamgen
        anchor: new google.maps.Point(0, 40)
    };

    maker = new google.maps.Marker({
        position: { lat: lati, lng: long },
        icon: image,
        content: '<h1>Lynn MA</h1>',
        map: map
    });
}

function pos01(posicion) {
    lati = posicion.coords.latitude;
    long = posicion.coords.longitude;
    ubica = "";
    console.log("mapa");

    ubica += "La Latitud : " + posicion.coords.latitude + "<br>";
    ubica += "Longitud1  : " + posicion.coords.longitude + "<br>";
    ubica += "Excactitud : " + posicion.coords.accuracy;

}

function geneMap(posicion) {
    opti = {
        zoom: 19,
        center: { lat: lati, lng: long },
    }
    map = new google.maps.Map(document.getElementById('map'), opti);
    pos = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
}

function iformacion() {
    console.log("Quien");
    infoWindow = new google.maps.InfoWindow;
    infoWindow.setPosition(pos);

    infoWindow.setContent('Te encontre');
    // infoWindow.setImage(imt);
    infoWindow.open(map);
    map.setCenter(pos);
}

function errores(errores) {
    if (errores.code == 1) {
        output.innerHTML = "<p>Da permiso para la geolocalización</p>"
    }
}

window.addEventListener("load", comenzar, false)