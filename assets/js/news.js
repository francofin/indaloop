var defaultCity = document.querySelector("#default-load");
var newsArticle1 = document.querySelector("#news-article1");
var newsTitle1 = document.querySelector("#news-title1");
var newsContent1 = document.querySelector("#news-content1");
var url1 = document.querySelector("#url1");
var image1 = document.querySelector("#image1");


var newsArticle2 = document.querySelector("#news-article2");
var newsTitle2 = document.querySelector("#news-title2");
var newsContent2 = document.querySelector("#news-content2");
var url2 = document.querySelector("#url2");
var image2 = document.querySelector("#image2");

var newsArticle3 = document.querySelector("#news-article3");
var newsTitle3 = document.querySelector("#news-title3");
var newsContent3 = document.querySelector("#news-content3");
var url3 = document.querySelector("#url3");
var image3 = document.querySelector("#image3");

var newsArticle4 = document.querySelector("#news-article4");
var newsTitle4 = document.querySelector("#news-title4");
var newsContent4 = document.querySelector("#news-content4");
var url4 = document.querySelector("#url4");
var image4 = document.querySelector("#image4");

var newsArticle5 = document.querySelector("#news-article5");
var newsTitle5 = document.querySelector("#news-title5");
var newsContent5 = document.querySelector("#news-content5");
var url5 = document.querySelector("#url5");
var image5 = document.querySelector("#image5");

var newsArticle6 = document.querySelector("#news-article6");
var newsTitle6 = document.querySelector("#news-title6");
var newsContent6 = document.querySelector("#news-content6");
var url6 = document.querySelector("#url6");
var image6 = document.querySelector("#image6");

var highlight1 = document.querySelector("#news-highlight1");
var highlight2 = document.querySelector("#news-highlight2");
var highlight3 = document.querySelector("#news-highlight3");
var highlight4 = document.querySelector("#news-highlight4");
var api =  "feec356023msh7d505f582747ea5p199c91jsnd5a1909fc40a";
var ticketMasterApi = "EI6xvZtsgVpRYLMPIJKeFhxH3ma5tsgl";


var displayArticle = function(search_term, articleSelector, titleSelector, contentSelector, urlSelector, imageSelector) {
    if (search_term) {
        //news box 1
        articleSelector.textContent = search_term.value[0].category;
        titleSelector.textContent = search_term.value[0].name;
        contentSelector.textContent = search_term.value[0].description.slice(0,100) + ".....";
        urlSelector.setAttribute("href", search_term.value[0].url);
        urlSelector.setAttribute("target", "_blank");
        
        if (search_term.value[0].category) {
        getImages(imageSelector, search_term.value[0].category);
        console.log(search_term.value[0]);
        }

        else {
            getImages(imageSelector, search_term.value[0].about[0].name);   
        }
        
    }
};


var displayHighlight = function(search_term) {
    if (search_term) {
        highlight1.textContent = search_term[0].title;
        highlight1.setAttribute("href", search_term[0].source_url);
        highlight1.setAttribute("target", "_blank");

        highlight2.textContent = search_term[1].title;
        highlight2.setAttribute("href", search_term[1].source_url);
        highlight2.setAttribute("target", "_blank");
        console.log(highlight2);

        highlight3.textContent = search_term[2].title;
        highlight3.setAttribute("href", search_term[2].source_url);
        highlight3.setAttribute("target", "_blank");
        console.log(highlight3.textContent);

        highlight4.textContent = search_term[3].title;
        highlight4.setAttribute("href", search_term[3].source_url);
        highlight4.setAttribute("target", "_blank");
    }
};

var displayImages = function(imageLoc, search_term) {
    if (search_term) {
    
        imageLoc.setAttribute("src", search_term.value[0].thumbnailUrl);
        

    }
};

var getImages = function(imageVar, search_term) {
    var apiImages = fetch("https://rapidapi.p.rapidapi.com/images/search?q="+search_term, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
            "x-rapidapi-key": "feec356023msh7d505f582747ea5p199c91jsnd5a1909fc40a"
        }
    })

    apiImages.then(function(response) {
        if(response.ok) {
           response.json().then(function(data) {
               displayImages(imageVar, data);
           })
        }
    })
   
};

var getHighlights = function(search_term) {
    var apiUrl2 = fetch("https://rapidapi.p.rapidapi.com/apirapid/news/?q="+search_term, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "newscafapi.p.rapidapi.com",
            "x-rapidapi-key": api
        }
    })

    apiUrl2.then(function(response) {
        if(response.ok) {
           response.json().then(function(data) {
               displayHighlight(data);
           })
        }
    })
};

var getNews = function(search_term1, articleSelector, titleSelector, contentSelector, urlSelector, imageSelector) {
    var apiUrl = fetch("https://rapidapi.p.rapidapi.com/search?q="+search_term1, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "feec356023msh7d505f582747ea5p199c91jsnd5a1909fc40a"
        }
    })

    apiUrl.then(function(response) {
        if(response.ok) {
           response.json().then(function(data) {
               console.log("news", data);
               displayArticle(data, articleSelector, titleSelector, contentSelector, urlSelector, imageSelector);
           })
        }
    })

};

// fetch("https://developers.zomato.com/api/v2.1/categories", {
//     "method": "GET",
//         "headers": {
//             "user-key": "4726b7bb9adff2236c9285afdf21b5e2"}
//         }).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data)
//     })
// });

getHighlights("US elections");

getNews("covid", newsArticle1, newsTitle1, newsContent1, url1, image1);
getNews("politics", newsArticle2, newsTitle2, newsContent2, url2, image2);
getNews("economy", newsArticle3, newsTitle3, newsContent3, url3, image3);
getNews("Sports", newsArticle4, newsTitle4, newsContent4, url4, image4);
getNews("China", newsArticle5, newsTitle5, newsContent5, url5, image5);
getNews("Health", newsArticle6, newsTitle6, newsContent6, url6, image6);


