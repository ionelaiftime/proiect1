
class Produs
{
  constructor(id,numeprodus,cantitate)
  {
    this.id=id;
    this.numeprodus=numeprodus;
    this.cantitate=cantitate;
  
  }

}

function info()
{
  getDate1();
  setInterval(getDate1, 1000);

}

function getDate1(){
    var dt=new Date();
    document.getElementById("datetime").innerHTML = dt;
}




function getLocation() {
  var x=navigator;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x=position;
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
    var loto1 = document.getElementById("loto1").getElementsByTagName("input");
    var c = 0;
    for(var i = 0;i < 8; ++i)
    {
        if(map[loto1[i].value] == 1)
        {
            c++;
        }
    }
    text1 += "<p> ai nimerit " + c + " numere</p>";
    document.getElementById("numere").innerHTML = text1;
    
}
function reset1() {
  document.getElementById("loto1").reset();
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

}

  

function v1(nr){

  document.getElementById("content1").setAttribute("class","stil"+nr);

}


function linie1(){
  var color=document.getElementById("favcolor3").value;
    var table = document.getElementById('tabledis');
    var x = table.insertRow(0);
  var e =table.rows.length-1;
  var l =table.rows[e].cells.length;
  for (var c =0,  m=l; c < m; c++) {
    table.rows[0].insertCell(c);
    table.rows[0].cells[c].innerHTML  = "&nbsp;&nbsp;";
    table.rows[0].cells[c].style.background=color;
  }
}


function coloana1(){
  var color=document.getElementById("favcolor3").value;
  var table = document.getElementById('tabledis');
  for (var r = 0, n = table.rows.length; r < n; r++) {
        table.rows[r].insertCell(0);
        table.rows[r].cells[0].innerHTML =  "&nbsp;&nbsp;" ;
        table.rows[r].cells[0].style.background=color;
        }
}




function schimbaContinut(res,jsFisier,jsFunctie)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("continut").innerHTML = this.responseText;
     if (jsFisier) 
      {
        var elementScript = document.createElement('script');
        elementScript.onload = function () 
        {
          console.log("hello");
          if (jsFunctie) 
          {
            window[jsFunctie]();
          }
        };
      elementScript.src = jsFisier;
      document.head.appendChild(elementScript);
      } 
      else 
      {
        if (jsFunctie) 
        {
          window[jsFunctie]();
        }
      }
     
    }
  };
  xhttp.open("GET", res+'.html', true);
  xhttp.send();


};

function Run1()
{

  {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
      if(this.readyState == 4 && this.status == 200)
      { 
        var text1 = document.getElementById("txt1").value;
        var text2 = document.getElementById("txt2").value;
        var obiect = JSON.parse(this.responseText);
        if(text1==obiect[0].utilizator && text2==obiect[0].parola)
          document.getElementById("demo").innerHTML = "Valorile exista";
          else
          document.getElementById("demo").innerHTML = "Valorile nu exista";
      }
    };

    xmlhttp.open("GET","resurse/utilizatori.json",true);
    xmlhttp.send();

  
  }
}  