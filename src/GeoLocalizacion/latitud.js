var output;
var ubica="";
function comenzar(){
    var boton=document.getElementById("find_btn");
    boton.addEventListener("click",ubicacion,false);
}
function ubicacion(e){
    console.log("Click correcto");
    output=document.getElementById("map");
    if(navigator.geolocation){
        output.innerHTML="<p>Tu Navegador soporta localización</p>"
        var configura={
            enableHighAccuracy:true,
            timeout:10000,
            maximunAge:60000
        };
        // navigator.geolocation.getCurrentPosition(localizacion,errores,configura);
        navigator.geolocation.watchPosition(localizacion,errores,configura);

    }else{
        output.innerHTML="<p>Tu Navegador No soporta localización</p>"
    }
}
function localizacion(posicion){

    ubica="";
     ubica += "La Latitud : " + posicion.coords.latitude + "<br>";
     ubica += "Longitud1  : " + posicion.coords.longitude + "<br>";
     ubica += "Excactitud : " + posicion.coords.accuracy ;
    // console.log(ubica);
    output.innerHTML=ubica;
    
}
function errores(errores){
    // output.innerHTML="<p>Tu Navegador No pudo recuperar la  localización "+errores.code+" "+errores.message+"</p>"
    if(errores.code==1){
        output.innerHTML="<p>Da permiso para la geolocalización</p>"
    }
}

window.addEventListener("load",comenzar,false)