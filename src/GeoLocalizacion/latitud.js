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
        navigator.geolocation.getCurrentPosition(localizacion);

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
function errores(){
    output.innerHTML="<p>Tu Navegador No pudo recuperar la  localización</p>"
    
}
window.addEventListener("load",comenzar,false)