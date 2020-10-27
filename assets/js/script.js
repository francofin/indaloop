var searchFormEl = $("#searchform")
var searchInputEl = $("#movie-search");
//var mapContainerEl = $("#map");

//var apiKey = hrt8j7mezsyzdh6ezyn3bn2t

var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "timeout": 0,
    "datatype": "JSON",
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
    "client": "SCHO_28 ",
    "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
    "device-datetime": "2020-10-26T09:50:57.296Z",
    "territory": "XX",
    "geolocation": "-22.0;14.0", 
    },
   };
    
    $.ajax(settings).done(function (response) {
        var films = response.films;
        var content = $("#content");
        for (var i = 0; i < films.length; ++i) {

            var film = films[i];
           
            content.append('<li onclick = "clickmovie(this.id)" id = '+film.film_id + '>'  + film['film_name'] + '</li>');
        }


    console.log(response);
   
    });

    function clickmovie(id){
        var showTimes = {
            "url": "https://api-gate2.movieglu.com/filmShowTimes/?film_id=" + id + "&date=2020-10-26&n=5",
            "method": "GET",
            "timeout": 0,
            "datatype": "JSON",
            "headers": {
            "api-version": "v200",
            "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
            "client": "SCHO_28 ",
            "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
            "device-datetime": "2020-10-26T10:20:57.296Z",
            "territory": "XX",
            "geolocation": "-22.0;14.0", 
            },
           };
    
          
          
           $.ajax(showTimes).done(function(response){
    
            
            var cinemas = response.cinemas;
            var filmShowTime = $("#showtimes");

           
            for(i = 0; i < cinemas.length; ++i) {

              
                filmShowTime.append("<li>"+cinemas[i].showings.Standard.times[0].start_time+"</li>");
            }
            console.log(response);
            
           });
        console.log(id)
    }





    // var locations = getLatlon;
    var nearBy = {
        "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
        "method": "GET",
        "timeout": 0,
        "datatype": "JSON",
        "headers": {
        "api-version": "v200",
        "Authorization": "Basic U0NIT18yOF9YWDo3eUZMS3pTdklQcmg=",
        "client": "SCHO_28 ",
        "x-api-key": "iEgMtXm1Gc8WHC1cP0KMC5Qi7hTY1xuY21MRlNM7",
        "device-datetime": "2020-10-26T10:20:57.296Z",
        "territory": "XX",
        "geolocation":"-22.0;14.0",
        },
       };


       $.ajax(nearBy).done(function (response) {

        var cinemas = response.cinemas;
        var cinemasNear = $("#cinemas");

        for (var i = 0; i < cinemas.length; ++i) {
           var cinema = cinemas[i];
            cinemasNear.append('<li>' + cinema['cinema_name'] + '</li>');
       }
           console.log(response);
       });



       //location trys

     
    





//       var x = document.querySelector("#map2");
//        var getLatlon = function(position){
//         var lon = position.coords.longitude;
//         var lat = position.coords.latitude;
//         return[lon, lat]
//        }


//        var showPosition = function(position) {
//         var x = "Latitude: " + position.coords.latitude + 
//         "<br>Longitude: " + position.coords.longitude;
       
//         var lon = position.coords.longitude;
//         var lat = position.coords.latitude;
//         var y = document.querySelector("#latlng");
//         y.setAttribute("value", [lat, lon])
//         console.log(x);
//         return(lon, lat)
//       };
// var getLocation = function() {
//   if (navigator.geolocation) {
//     var navigate = navigator.geolocation.getCurrentPosition(showPosition);
//     console.log(navigate)
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }

// };




     
//    function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 8,
//         center: { lat: 40.731, lng: -73.997 },
//       });
  
//    const geocoder = new google.maps.Geocoder();
//    const infowindow = new google.maps.InfoWindow();
//    document.getElementById("submit").addEventListener("click", () => {
//      geocodeLatLng(geocoder, map, infowindow);
//      const input = document.getElementById("latlng").value;
//      const latlngStr = input.split(",", 2);
//     var longitude = parseInt(latlngStr[1]);
//     var latitude = parseInt(latlngStr[0])
//      var mapDetails = document.createElement("iframe");
//      mapDetails.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290127792!2d"+ longitude +"!3d"+ latitude +"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1600294752827!5m2!1sen!2sca")
//     });
//  }

//  //<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290127792!2d-79.51814281859359!3d43.718155660880214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1600294752827!5m2!1sen!2sca" width="600" height="650" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
//   function geocodeLatLng(geocoder, map, infowindow) {
//     const input = document.getElementById("latlng").value;
//     const latlngStr = input.split(",", 2);
//     const latlng = {
//       lat: parseFloat(latlngStr[0]),
//       lng: parseFloat(latlngStr[1]),
//     };
//     geocoder.geocode({ location: latlng }, (results, status) => {
//       if (status === "OK") {
//         if (results[0]) {
//         console.log(results[0]);
//           map.setZoom(11);
//           const marker = new google.maps.Marker({
//             position: latlng,
//             map: map,
//           });
//           infowindow.setContent(results[0].formatted_address);
//           infowindow.open(map, marker);
//         } else {
//           window.alert("No results found");
//         }
//       } else {
//         window.alert("Geocoder failed due to: " + status);
//       }
//     });
//   }
//   getLocation();



//   var nearBy = {
//     "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
//     "method": "GET",
//     "timeout": 0,
//     "datatype": "JSON",
//     "headers": {
//     "api-version": "v200",
//     "Authorization": "Basic VU5JVl80MDo1SjNtZlB4anJvcXk=",
//     "client": "UNIV_40",
//     "x-api-key": "fDnSacE7QrB71GqeFfyTdMaBzK8afIpPx8JwP0s5i",
//     "device-datetime": "2020-10-25T07:47:57.360z",
//     "territory": "CA",
//     "geolocation":"-79.3800139;43.654773",
   


    
//     },
//    };


//    $.ajax(nearBy).done(function (response) {
//     console.log(response);
//     var cinemas = response.cinemas;
//     var cinemasNear = $("#cinemas");

//     for (var i = 0; i < cinemas.length; ++i) {
//        var cinema = cinemas[i];
//         cinemasNear.append('<li>' + cinema['cinema_name'] + '</li>');
//    }
       
//    });




      // searchInputEl.addEventListener("submit", formSubmitHandler);