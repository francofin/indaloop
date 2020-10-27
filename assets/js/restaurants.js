/****************************************************************** JAVASCRIPT FOR RESTAURANTS.HTML *****************************************************************/

/************************************************************************* VARIABLES  *******************************************************************************/

/*__________________________________________________________________ User Input Variables __________________________________________________________________________*/
var search = document.querySelector('#cuisine-search');
var searchBtnEl = document.querySelector('#search-form');
var SelectCity = document.querySelector('#select-city');
var citySrchBtn = document.querySelector("#city-search");
/*________________________________________________________________ Restaurant Info Variables _______________________________________________________________________*/
var restName1 = document.querySelector("#rest-name1");
var userRate1 = document.querySelector("#user-rate1");
var featImg1 = document.querySelector('#feat-img1');
var restAddy1 = document.querySelector("#rest-addy1");
var restPhone1 = document.querySelector("#rest-phone1");
var url1 = document.querySelector("#url1");

var restName2 = document.querySelector("#rest-name2");
var userRate2 = document.querySelector("#user-rate2");
var featImg2 = document.querySelector('#feat-img2');
var restAddy2 = document.querySelector("#rest-addy2");
var restPhone2 = document.querySelector("#rest-phone2");
var url2 = document.querySelector("#url2");

var restName3 = document.querySelector("#rest-name3");
var userRate3 = document.querySelector("#user-rate3");
var featImg3 = document.querySelector('#feat-img3');
var restAddy3 = document.querySelector("#rest-addy3");
var restPhone3 = document.querySelector("#rest-phone3");
var url3 = document.querySelector("#url3");

var restName4 = document.querySelector("#rest-name4");
var userRate4 = document.querySelector("#user-rate4");
var featImg4 = document.querySelector('#feat-img4');
var restAddy4 = document.querySelector("#rest-addy4");
var restPhone4 = document.querySelector("#rest-phone4");
var url4 = document.querySelector("#url4");

var restName5 = document.querySelector("#rest-name5");
var userRate5 = document.querySelector("#user-rate5");
var featImg5 = document.querySelector('#feat-img5');
var restAddy5 = document.querySelector("#rest-addy5");
var restPhone5 = document.querySelector("#rest-phone5");
var url5 = document.querySelector("#url5");

var restName6 = document.querySelector("#rest-name6");
var userRate6 = document.querySelector("#user-rate6");
var featImg6 = document.querySelector('#feat-img6');
var restAddy6 = document.querySelector("#rest-addy6");
var restPhone6 = document.querySelector("#rest-phone6");
var url6 = document.querySelector("#url6");

var restName7 = document.querySelector("#rest-name7");
var userRate7 = document.querySelector("#user-rate7");
var featImg7 = document.querySelector('#feat-img7');
var restAddy7 = document.querySelector("#rest-addy7");
var restPhone7 = document.querySelector("#rest-phone7");
var url7 = document.querySelector("#url7");

var restName8 = document.querySelector("#rest-name8");
var userRate8 = document.querySelector("#user-rate8");
var featImg8 = document.querySelector('#feat-img8');
var restAddy8 = document.querySelector("#rest-addy8");
var restPhone8 = document.querySelector("#rest-phone8");
var url8 = document.querySelector("#url8");

/*________________________________________________________________________ City ID Variable ______________________________________________________________________*/
var city= document.querySelector("select[name='cityid']")

/****************************************************************** THIS IS THE OWL CAROUSEL FUNCTION *************************************************************/

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    slideTransition:"linear",
    loop:true,
    autoplay:true,
    center:true,
    stagePadding: 10,
    margin:10,
    nav:false,
    items:3,
    merge:true,
    pullDrag:true,
    mergeFit:true,
    videoHeight:60,
    videoWidth:100,

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
});

/************************************************** THE displayCuisines FUNCTION FETCHES DATA FROM THE ZOMATO API ARRAY ***********************************************/

var displayCuisines = function(searchTerm, nameSelector,rateSelector, imgSelector, addySelector, phoneSelector, urlSelector, i){
    if (searchTerm) {
        nameSelector.textContent = searchTerm.restaurants[i].restaurant.name;
        rateSelector.textContent = searchTerm.restaurants[i].restaurant.user_rating.rating_text;
        imgSelector.setAttribute("src",searchTerm.restaurants[i].restaurant.featured_image);
        addySelector.textContent = searchTerm.restaurants[i].restaurant.location.address;
        phoneSelector.textContent = searchTerm.restaurants[i].restaurant.phone_numbers;
        urlSelector.setAttribute("href", searchTerm.restaurants[i].restaurant.url);
        urlSelector.setAttribute("target", "_blank");
    }
};


/*************************************************** THE loadCuisines FUNCTION LOADS CUISINES aka RESTAURANT INFO ***************************************************/
var loadCuisines = function(searchTerm, cityid, nameSelector,rateSelector, imgSelector, addySelector, phoneSelector, urlSelector, i) {
    var api= fetch("https://developers.zomato.com/api/v2.1/search?entity_id="+cityid+"&entity_type=city&cuisines="+searchTerm,{
        "method": "GET",
        "headers": {
            "user-key": "211a37c27d46db44c2e65076d081b87b"}
        });
    

    api.then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                displayCuisines(data, nameSelector,rateSelector, imgSelector, addySelector, phoneSelector, urlSelector, i);
            })
        }
    })  
}

/***************************************************** THE Loadcontent FUNCTION PULLS RESTAURANT INFO FROM THE API ARRAY ************************************************/
var Loadcontent = function(event){
     event.preventDefault();
    var searchCuisine = search.value.trim();
    var cityid = city.value;
        console.log(cityid);


    loadCuisines(searchCuisine, cityid, restName1, userRate1, featImg1, restAddy1, restPhone1,url1,0);
    loadCuisines(searchCuisine, cityid, restName2, userRate2, featImg2, restAddy2, restPhone2,url2,1);
    loadCuisines(searchCuisine, cityid, restName3, userRate3, featImg3, restAddy3, restPhone3,url3,2);
    loadCuisines(searchCuisine, cityid, restName4, userRate4, featImg4, restAddy4, restPhone4,url4,3);
    loadCuisines(searchCuisine, cityid, restName5, userRate5, featImg5, restAddy5, restPhone5,url5,4);
    loadCuisines(searchCuisine, cityid, restName6, userRate6, featImg6, restAddy6, restPhone6,url6,5);
    loadCuisines(searchCuisine, cityid, restName7, userRate7, featImg7, restAddy7, restPhone7,url7,6);
    loadCuisines(searchCuisine, cityid, restName8, userRate8, featImg8, restAddy8, restPhone8,url8,7);
     
 };

 citySrchBtn.onclick = function() {
    var cityid = city.value;
    if (cityid === "89") {
        SelectCity.textContent = "Toronto";
    } 
    else if (cityid === "294") {
        SelectCity.textContent = "Montreal";
    }
    else if (cityid === "256") {
        SelectCity.textContent = "Vancouver";
    }
    else if (cityid === "3594") {
        SelectCity.textContent = "La Ronge";
    }
    else if (cityid === "280") {
        SelectCity.textContent = "New York";
    }
    else if (cityid === "281") {
        SelectCity.textContent = "Los Angeles";
    }
    else if (cityid === "291") {
        SelectCity.textContent = "Miami";
    }
    else if (cityid === "61") {
        SelectCity.textContent = "London, UK";
    }
 };
     


searchBtnEl.addEventListener("submit", Loadcontent);



