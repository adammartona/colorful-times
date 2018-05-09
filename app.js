var clock = document.getElementById('ido');
var hexColor = document.getElementById('hexszin');

function hexido() {
  var ido = new Date();
  var ora = (ido.getHours() % 12).toString();
  var perc = ido.getMinutes().toString();
  var seconds = ido.getSeconds().toString();

  if (ora.length < 2) {
    ora = '0' + ora;
  }

  if (perc.length < 2) {
    perc = '0' + perc;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var oraStr = ora + ' : ' + perc + ' : ' + seconds;
  var hexszinStr = '#' + ora + perc + seconds;

  clock.textContent = oraStr;
  hexColor.textContent = hexszinStr;
  document.body.style.backgroundColor = hexszinStr;
}
hexido();
setInterval(hexido, 1000);

