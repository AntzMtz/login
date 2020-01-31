var miCodigoQR = new QRCode("codigoQR");
var cadena = document.getElementById("item_txt");
var Codicade = btoa("");
var DesCodicade = atob("");
var encrypted = CryptoJS.AES.encrypt("", "");
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
    encrypted = CryptoJS.AES.encrypt(CadEnc, "");

    console.log("code2: " + encrypted);
    Codicade = btoa(encrypted);
    console.log("Boat code" + Codicade);


    // Codicade = btoa(CadEnc);
    // var decrypted = CryptoJS.AES.decrypt(encrypted, "");
    // console.log("code3: " + decrypted.toString(CryptoJS.enc.Utf8));
    // var myString = "https://www.titanesmedellin.com/";
    // var myPassword = "myPassword";
    // // PROCESS
    // var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
    // var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
    // console.log("encrypted: " + encrypted);
    // console.log("decrypted: " + decrypted.toString(CryptoJS.enc.Utf8));
}

function desEncripar() {
    var desEnc = Codicade;
    DesCodicade = atob(desEnc);
    var decrypted = CryptoJS.AES.decrypt(encrypted, "");
    console.log("Descode: " + decrypted.toString(CryptoJS.enc.Utf8));
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
        // var conm=encrypted+"";        
        var conm = Codicade;
        miCodigoQR.makeCode(conm);
        desEncripar();
    }

}

function decaQR() {
    var base64 = $("#codigoQR img").attr('src');
    $("#descargarCodigo").attr('href', base64);
    $("#descargarCodigo").attr('download', "codigoQR");
    $("#descargarCodigo").trigger("click");


}