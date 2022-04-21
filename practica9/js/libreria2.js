var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getLocation2() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition2);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  


function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


function showPosition2(position) {
    
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAwRJldNmJpfQpLUc_95KADUpTfpunI6zg";
    
    document.getElementById("mapa").innerHTML = "<img src='"+img_url+"'>";
  }