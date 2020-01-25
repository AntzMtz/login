// import '../file-system/file-system.js';
// var fs = require('fs');
// import 'file-system/file-system';

function comenzar() {

    var doc = new jsPDF('p', 'mm', 'letter');

    var fs = require('file-system');

    var logo = new Image();
    doc.text('Hello world!', 20, 20);
    logo.src = '../HTML/Imagenes/2.jpg';
    doc.addImage(logo, 'JPEG', 10, 40, 200, 100);
    var filname = "/home/antz/Descargas/login/src/Prueba.pdf";

    // doc.writeFileSync(filname, fileContentModified, 'utf8')
    doc.output('save', filname);
    // var pdfOutput = doc.output();
    // console.log("pdfOutput:" + pdfOutput);
    // doc.writeFileSync('./document.pdf', pdfOutput)



}
window.addEventListener("load", comenzar, false);