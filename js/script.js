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