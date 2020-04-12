function incarcaPersoane()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "resurse/persoane.xml", true);
    xhttp.send();
  }

  function myFunction(xml) {


    var i;
    var xmlDoc = xml.responseXML;

    var table="<table class ='pers'><tr><th>Nume</th><th>Prenume</th><th>Vârsta</th><th>Telefon</th><th>Email</th><th>Adresă</th></tr>";
    var x = xmlDoc.getElementsByTagName("persoana");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("telefon")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("strada")[0].childNodes[0].nodeValue + " "+ 
      x[i].getElementsByTagName("numar")[0].childNodes[0].nodeValue + " "+ 
      x[i].getElementsByTagName("localitate")[0].childNodes[0].nodeValue + " "+ 
      x[i].getElementsByTagName("judet")[0].childNodes[0].nodeValue + " "+ 
      x[i].getElementsByTagName("tara")[0].childNodes[0].nodeValue + " "+ 
      "</td></tr>";
   
    }
    table+="</table>"
    document.getElementById("demo1").innerHTML = table;
  }