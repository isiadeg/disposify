let togglesearch = document.getElementById("togglesearch");
let searcharea = document.getElementById("searcharea");

const showsearch = ()=>{
  document.getElementById("searcharea").style.display ="flex";
document.getElementById("togglesearch").style.display ="none";
}
const hidesearch = ()=>{
  document.getElementById("searcharea").style.display ="none";
  document.getElementById("togglesearch").style.display ="block";
}
 let d= new Date();
 let e = d.getDay();
 let f;
 switch (e){
case 6:
f= "Saturday"
break;
case 5:
f= "Friday"
break;
case 4:
f= "Thursday"
break;
case 3:
f= "Wednesday"
break;
case 2:
f= "Tuesday"
break;
case 1:
f= "Monday"
break;
case 0:
f= "Sunday"
break;
default:
f = "Sunday"
break;
 }

 let g = d.getMonth();
 let h;
 switch (g){
case 0:
h= "Jan"
break;
case 1:
h= "Feb"
break;
case 2:
h= "Mar"
break;
case 3:
h= "Apr"
break;
case 4:
h= "May"
break;
case 5:
h= "Jun"
break;
case 6:
f= "Jul"
break;
case 7:
  h= "Aug"
break;
case 8:
  h= "Sep"
break;
case 9:
  h= "Oct"
break;
case 10:
  h= "Nov"
break;
case 11:
  h= "Dec"
break;
default:
h="Jan"
break;
 }
 console.log(h);

let towrite = f + " "+d.getDate()+" "+h+" "+d.getFullYear();
console.log(towrite);

 document.getElementById("dati").innerHTML = towrite;
var xmlhttp = xmlhttp();
function xmlhttp(){
  if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
  }else{
    xmlhttp = new ActiveXObject('Micorsoft.XMLHTTP');

  }
  return xmlhttp;
}

if(xmlhttp.readyState == 0 || xmlhttp.readyState == 4){
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=604265f3ff46aab089c45d56747d0110', true);
xmlhttp.onreadystatechange = handlereceivingmessage;
xmlhttp.send();

}
function handlereceivingmessage(){
  if(xmlhttp.readyState == 4){
      if (xmlhttp.status == 200){
        alert(xmlhttp.responseText());
      }
  }
}
