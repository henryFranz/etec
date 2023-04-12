function showTime() {
    var date = new Date();
    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    var time = hora + ":" + min + ":" + seg;
    document.getElementById("clock").innerHTML = time;
  }

  setInterval(showTime,1000);