function comenzar(){
    var bot=document.getElementById("grabar");
    // var del=document.getElementById("borrar");
    bot.addEventListener("click",itemNuevo,false)
    // del.addEventListener("click",itemNuevo,false)

}
function itemNuevo(){
    var clav=document.getElementById("clave").value;
    var val=document.getElementById("valor").value;
    // sessionStorage.setItem(clav,val);
    sessionStorage[clav]=val;  
    console.log("Clave: "+clav+" valor: "+val);
    leerMost(clav);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
    
}
function leerMost(clav){
    var datos=document.getElementById("zonaDatos");
    // var elValor=sessionStorage.getItem(clav);
    // var elValor=sessionStorage[clav];
    datos.innerHTML="<button onclick='eliminarTod()'>Elimina Todo</button>";
    datos.innerHTML+=" <button onclick='eliminarReg2()'>Elimina uno</button>";
    // datos.innerHTML="";
    for(var i=0;i<sessionStorage.length;i++){
        var clav01=sessionStorage.key(i);
        var elval=sessionStorage.getItem(clav01);
        datos.innerHTML+="<div> clave: "+clav01+" Valor: " +elval+
        "&nbsp <button onclick='eliminarReg(\""+clav01+ "\")'>Elimina</button></div>";
    }

}    
function eliminarTod(){
    if(confirm("estas seguro?")){
        sessionStorage.clear();
        leerMost();
    }
}    
function eliminarReg(clav01){
    if(confirm("estas seguro?")){
        sessionStorage.removeItem(clav01);
        // sessionStorage.clear();
        leerMost();
    }
}    
function eliminarReg2(){
    var clav1=document.getElementById("clave").value;
    if(confirm("estas seguro?")){
        
        var elval4=sessionStorage.getItem(clav1);
        if(elval4==null){
            alert("No se encuentra la clave");
        }else{
            sessionStorage.removeItem(clav1);
            leerMost();
        }
        
        
        // sessionStorage.removeItem(clav01);
        // // sessionStorage.clear();
        // leerMost();
    }
}
window.addEventListener("load",comenzar,false);