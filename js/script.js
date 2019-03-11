
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
    checkTimeOfDay(h);

    
 
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}


function checkTimeOfDay(h){
    var bericht;
    if(h == 0){
        bericht = "Het is nacht!";
    }
    else if(h == 6){
        bericht = "Het is ochtend!";

    }
    else if(h == 12){
        bericht = "Het is middag!";

    }
    else if (h == 18){

        bericht = "Het is avond!";
    }   
    
    else{
        return alert("error");
    }
    document.getElementById("button").innerHTML = bericht;
 }
