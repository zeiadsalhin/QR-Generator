let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let inputtext = document.getElementById("input");

function generateQR() {
  qrimage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputtext.value;
}
