// Toggle Menu Code
var navLinks = document.getElementById("navLinks")

function showMenu()
{
  navLinks.style.right = "0";
}

function hideMenu()
{
  navLinks.style.right = "-200px";
}

/*function initMap()
{
  let mapOptions = 
  {
    center: new google.maps.LatLng("30.2672", "-97.7431"),
    zoom: 8
  }
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let markerOptions = 
  {
      position: new google.maps.LatLng("0", "0"),
      map: map
  }
  let marker =  new google.maps.Marker(markerOptions);

  map.data.loadGeoJson("fixedlocations.geojson")
}*/