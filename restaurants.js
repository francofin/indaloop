// Bing Api Keys //
// Key 1: e6c90e01716f4732990ada5d1d36135f //
// Key 2: 83053145b30b47758e84cf33f79ec254 //

// ZOMATO API KEY //
const api= {
  key: "211a37c27d46db44c2e65076d081b87b",
  base: "https://cors-anywhere.herokuapp.com/"+"https://developers.zomato.com/api/v2.1/",
  crossOrigin: null
}

//GOOGLE MAPS API KEY //
//const api2= {
//   key: "AIzaSyDHWqTqHS4iUxPTAddHwqSOOHJ4XDGO0qc",
//   base:" ",
//   crossOrigin: null
//}

// This is the Owl Carousel Function //

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  slideTransition:"linear",
  loop:true,
  autoplay:true,
  center:true,
  stagePadding: 10,
  margin:10,
  nav:false,
  items:1,
  merge:true,
  pullDrag:true,
  mergeFit:true,
  videoHeight:60,
  videoWidth:100,
  animateIn: true,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

// THIS IS THE INPUT BOX CLICK FUNCTION //
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

//ACTION ON PRESSING ENTER BUTTON//
function setQuery(evt) {
  if (evt.keyCode === 13) {
      getResults(searchbox.value);
      //console.log(searchbox.value);
  }
}

//FUNCTION TO FETCH ZOMATO API //
function getResults (query) {
  fetch(`${api.base}/cuisine?q=${query}&APPID=${api.key}`)
  .then(cuisine => {
      return cuisine.json();
      }).then (displayResults);  
  }
//DISPLAY ZOMATO API RESULTS //
function displayResults (cuisine) {
  console.log(cuisine);
}

//FUNCTION FOR GEOLOCATION BUTTTON //

//if (navigator.geolocation) {
  // geolocation is available
//} 
//else {
  // geolocation is not supported
//}

// THIS FUNCTION IS THE GEOLOCATOR FOR RESTAURANTS (RESTOS) NEAREST YOU //
  var x = document.getElementById("searchBtn");

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

//Display Result on a map //
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

// THIS FUNCTION DISPLAYS THE MAP //
function initMap() {
var myMapCenter = {lat: 40.785091, lng: -73.968285};

// Create a map object and specify the DOM element for display.
var map = new google.maps.Map(document.getElementById('map'), {
  center: myMapCenter,
  zoom: 14
});

  // THIS FUNCTION DISPLAYS THE MAP //
function markResto(restoInfo){

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: restoInfo.location,
    title: restoInfo.name
  });

  // show store info when marker is clicked
  marker.addListener('click', function(){
    showStoreInfo(restoInfo);
  });
}

// show store info in text box
function showRestoInfo(restoInfo){
  var info_div = document.getElementById('info_div');
  info_div.innerHTML = 'Restaurant name: '
    + restoInfo.name
    + '<br>Hours: ' + restoInfo.hours;
}

var restos = [
  {
    name: 'Resto 1',
    location: {lat: 40.785091, lng: -73.968285},
    hours: '8AM to 10PM'
  },
  {
    name: 'Resto 2',
    location: {lat: 40.790091, lng: -73.968285},
    hours: '9AM to 9PM'
  }
];

restos.forEach(function(resto){
  markStore(resto);
});

}

});
