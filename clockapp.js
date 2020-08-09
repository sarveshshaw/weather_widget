function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

   
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("month").innerHTML = months[today.getMonth()];

    document.getElementById("day").innerHTML = today.getDate();
}
  function checkTime(i) 
  {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  