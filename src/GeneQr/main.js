var miCodigoQR = new QRCode("codigoQR");
var cadena = document.getElementById("item_txt");
var Codicade = btoa("");
var DesCodicade = atob("");
var encrypted = CryptoJS.AES.encrypt("", "");;
$(document).ready(function() {
    var BtGenera = document.getElementById("generarCodigo");
    BtGenera.addEventListener("click", genera, false);

    var BtDescarga = document.getElementById("descargarCodigo");
    BtDescarga.addEventListener("click", decaQR, false);



    // $("#generarCodigo").on("click", function() {
    //     var cadena = $("#item_txt").val();
    //     if (cadena == "") {
    //         alert("Ingresa un texto");
    //         $("#item_txt").focus();
    //     } else {
    //         $("#descargarCodigo").css("display", "inline-block");
    //         miCodigoQR.makeCode(cadena);
    //     }
    // });
    // $("#descargarCodigo").on("click", function() {
    //     var base64 = $("#codigoQR img").attr('src');
    //     $("#descargarCodigo").attr('href', base64);
    //     $("#descargarCodigo").attr('download', "codigoQR");
    //     $("#descargarCodigo").trigger("click");
    // });
});

function encriptar() {
    var CadEnc = cadena.value;
    Codicade = btoa(CadEnc);
    // var encrypted = CryptoJS.AES.encrypt(Codicade);
    console.log(Codicade);

    var encrypted = CryptoJS.AES.encrypt(CadEnc, "");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "");


    console.log("code2: " + encrypted);
    console.log("code3: " + decrypted);

}

function desEncripar() {
    var desEnc = Codicade;
    DesCodicade = atob(desEnc);
    console.log(DesCodicade);

}

function genera() {

    var descarga = document.getElementById("descargarCodigo");
    console.log("cadena:" + cadena.value);
    if (cadena.value == "") {
        alert("ingresa la secundaria y el Numero del alumno");
        cadena.focus();
    } else {
        encriptar();
        descarga.style.display = "inline-block";
        miCodigoQR.makeCode(encrypted);
        desEncripar();
    }

}

function decaQR() {
    var base64 = $("#codigoQR img").attr('src');
    $("#descargarCodigo").attr('href', base64);
    $("#descargarCodigo").attr('download', "codigoQR");
    $("#descargarCodigo").trigger("click");


}