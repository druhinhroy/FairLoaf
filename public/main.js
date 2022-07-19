let historicalOverlay;
let map;

const imageBounds = {
  north: 60.0002781,
  south: 14.0900000,
  east: -52.1000000,
  west: -164.9256434,
};

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


function getAllergen(option)
{
  var url = "https://austinallergyalert.info/images/overlays/"

  historicalOverlay.setMap(null);

  
  if (option == 0) {
    url += "grass.png"
  } else if (option == 1) {
    url += "mold.png"
  } else if (option == 2) {
    url += "cedar.png"
  } else if (option == 3) {
    url += "ash.png"
  } else if (option == 4) {
    url += "elm.png"
  } else if (option == 5) {
    url += "mulberry.png"
  } else if (option == 6) {
    url += "pecan.png"
  } else if (option == 7) {
    url += "oak.png"
  } 

  historicalOverlay = new google.maps.GroundOverlay(
    url,
    imageBounds
  );

  historicalOverlay.setMap(map);
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 30.2672, lng: -97.7431 },
  });
  

  historicalOverlay = new google.maps.GroundOverlay(
    "https://austinallergyalert.info/images/overlays/grass.png",
    imageBounds
  );
  
  historicalOverlay.setMap(map);
}

window.initMap = initMap;

// https://model.pollensense.com/api/region?key=w8MfCeHXS1xrONGlXSBtgjkkes1mgmMMoPkeEZjiQi42Ui7HKTcDMigr3pbyHTfBLLrmZZswauyky7RVkEne&starting=2020-06-01&region=NA&category=POL&agg=A&format=tiff&unit=PPM3

// https://model.pollensense.com/api/region?key=w8MfCeHXS1xrONGlXSBtgjkkes1mgmMMoPkeEZjiQi42Ui7HKTcDMigr3pbyHTfBLLrmZZswauyky7RVkEne&starting=2020-06-01&region=NA&category=POL&agg=A&format=tiff&unit=PPM3