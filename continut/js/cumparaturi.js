

var prod=[]
var nr;
var html='';

function init()
{
  nr=localStorage.getItem('nrproduse');
  console.log(nr);
  if(nr===null)
  {
    localStorage.setItem('nrproduse','0');
    nr=0;
  }
  nr=parseInt(nr);
  for(let i=1;i<=nr;i++)
  {
    var obj=JSON.parse(localStorage.getItem('produs'+i));
    obj=Object.assign(new Produs,obj);
    prod.push(obj);

    html += '<tr><td>' + obj.id + '</td>';
		html += '<td>' + obj.numeprodus + '</td>';
		html += '<td>' + obj.cantitate + '</td></tr>';
  }
  document.getElementById('prod').innerHTML = html;

  
}

function add()
{
  var inp=document.getElementById("cumparaturi").getElementsByTagName("input");
  if(inp[0].value==='' || inp[1].value==='')
    return
  nr++;
  var obj= new Produs(nr,inp[0].value,inp[1].value);
  prod.push(obj);
  localStorage.setItem('produs'+nr,JSON.stringify(prod[prod.length-1]));
  localStorage.setItem('nrproduse',nr.toString());
  console.log(prod);  
  var x=document.getElementById('prod').innerHTML;
  x+='<tr><td>' + obj.id + '</td>';
  x += '<td>' + obj.numeprodus + '</td>';
  x += '<td>' + obj.cantitate + '</td></tr>';

  document.getElementById('prod').innerHTML=x;


}