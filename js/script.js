function getDate1(){
    var dt=new Date();
      document.getElementById("showdate").innerHTML= dt.toLocaleDateString();
}


var myVar = setInterval(getTime1, 1000);

function getTime1(){
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}




function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


function Browser1() {
    var x =  navigator.appCodeName;
    document.getElementById("browser").innerHTML = x;
  }

function versiunebrowser() {
    var x =  navigator.appVersion;
    document.getElementById("ver").innerHTML = x;
  }

  function geturl() {

     var x =window.location.href;
    
    document.getElementById("url1").innerHTML = x;
  }

  function sistoperare() {  
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
    
    document.getElementById("os").innerHTML = OSName;
  }  


  function loto()
{
    var text1 = "Numerele castigatoare: ";
    var map = new Map();
    for(var i = 0;i < 8; ++i)
    {
        var numar = Math.floor(Math.random()*255).toString(16);
        map[numar] = 1;
        text1 += numar + " ";
    }
    var guess = document.getElementById("guess").getElementsByTagName("input");
    var c = 0;
    for(var i = 0;i < 8; ++i)
    {
        if(map[guess[i].value] == 1)
        {
            c++;
        }
    }
    text1 += "<p> ai nimerit " + c + " numere</p>";
    document.getElementById("numere").innerHTML = text1;
    
}
function reset1() {
  document.getElementById("guess").reset();
}



function desen1() {


  var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  rect={ },
  drag=false;

  function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
  }

  function mouseDown(e) {
    rect.startX = e.pageX - this.offsetLeft;
    rect.startY = e.pageY - this.offsetTop;
    click = true;
  }

  function mouseUp() {
    click = false;
  }

  function mouseMove(e) {
    if (click) {
      rect.w = (e.pageX - this.offsetLeft) - rect.startX;
      rect.h = (e.pageY - this.offsetTop) - rect.startY ;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      draw1();
      draw();
      
      
      
    }
  }


  function draw() {
     var color=document.getElementById("favcolor").value;
    ctx.fillStyle=color;
  
    ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
    
  }

  function draw1() {

    var color2=document.getElementById("favcolor2").value;
    ctx.strokeStyle=color2;
    ctx.lineWidth = 10;
    ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);

  }

 
  
  init();

};




function v1(){


 
  
}

function v2(){

  

  document.getElementsByClassName("stil0")[0].setAttribute("class", "stil1");  


}

function v3(){


  document.getElementsByClassName("stil1")[0].setAttribute("class", "stil3");

 
}

function coloana1(){
  var table = document.getElementById("tab1");
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell();
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
}

