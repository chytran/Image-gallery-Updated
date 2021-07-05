// variables
var imageReplace = document.querySelector("#fitBg");
var imageReplace2 = document.querySelector("#fitBg-2");
var imageReplace3 = document.querySelector("#fitBg-3");
var imageReplace4 = document.querySelector("#fitBg-4");
var imageReplace5 = document.querySelector("#fitBg-5");
var imageReplace6 = document.querySelector("#fitBg-6");

var htmlChanger = document.querySelector(".html-changer");
var htmlChanger2 = document.querySelector(".html-changer-2");
var htmlChanger3 = document.querySelector(".html-changer-3");
var htmlChanger4 = document.querySelector(".html-changer-4");
var htmlChanger5 = document.querySelector(".html-changer-5");
var htmlChanger6 = document.querySelector(".html-changer-6");

// array 1: images for 1st container of image
var imageGallery = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg"
]

// array 1: images for 2nd container of image
var imageGallery2 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg"
]

// array 1: images for 3rd container of image
var imageGallery3 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg"
]

// array 1: images for 4th container of image
var imageGallery4 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg"
]

// array 1: images for 5th container of image
var imageGallery5 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg"
]

// array 1: images for 6th container of image
var imageGallery6 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg"
]

// array 2: title
var titles = [
    // titles (3)
    "",
    "Waterfall",
    "Pyramids",
    "Skyscraper",
    "Tokyo Tower",
    "Snow Mountain",
    "Eiffel Tower"
]

// array 3: sentences
var sentences = [
    // sentences (3)
    "",
    "Waterfalls are the signs of nature and beauty. Wherever you go, you will sense the art the feeling of peace and freedom. One should explore the secrets of the waterfall",
    "Pyramids are the sign of culture and spirituality. The pyramids contain a big history of events that many people strive the know about. There tends to be a lot of mystery behind the pyramid as well",
    "The skyscraper is a magnificent building that has a lot of innovation to it. Skyscrapers are great for businesses. Working in a nice skyscraper helps people's health and mentality",
    "Tokyo Tower is a great building to visit for vacation. It contains a lot of history based on its culture. It shows peace and harmony in the world",
    "The Snow mountain is a great place for skiing. The weather is extremely cold. People often love to snowboard here",
    "The Eiffel tower represents peace and love. The structure was created as the symbolism of France. Love is mostly sparked around this building",
]

// addition array 4: link to detailed pages for 2nd image container
var pages = [
    // pages
    "",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html"
]

// addition array 4: link to detailed pages for 2nd image container
var pages2 = [
    "",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html"
]

// addition array 4: link to detailed pages for 3rd image container
var pages3 = [
    "",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html"
]

// addition array 4: link to detailed pages for 4th image container
var pages4 = [
    "",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
]

// addition array 4: link to detailed pages for 6th image container
var pages5 = [
    "",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html"
]

// addition array 4: link to detailed pages for 6th image container
var pages6 = [
    "",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
]

// //function to change image, title, and sentences in a time frame
// function change (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace.src = image[i];
//             htmlChanger.href = pages[i];
//         }, i * 6000);
//     }
// }

// function change2 (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace2.src = image[i];
//             htmlChanger2.href = pages[i];
//         }, i * 6000);
//     }
// }

// function change3 (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace3.src = image[i];
//             htmlChanger3.href = pages[i];
//         }, i * 6000);
//     }
// }

// function change4 (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace4.src = image[i];
//             htmlChanger4.href = pages[i];
//         }, i * 6000);
//     }
// }

// function change5 (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace5.src = image[i];
//             htmlChanger5.href = pages[i];
//         }, i * 6000);
//     }
// }

// function change6 (image, pages) {
//     for (let i = 1; i < image.length; i++){
//         setInterval(function timer() {
//             imageReplace6.src = image[i];
//             htmlChanger6.href = pages[i];
//         }, i * 6000);
//     }
// }

// function consoleURL (url, title) {
//     for (i = 0; i < url.length; i++) {
//         console.log(title[i] + ": " + url[i]);
//     }
// }

// //call the changing function
// change(imageGallery,  pages);
// change2(imageGallery2, pages2);
// change3(imageGallery3, pages3);
// change4(imageGallery4, pages4);
// change5(imageGallery5, pages5);
// change6(imageGallery6, pages6);

// // show URL in console
// consoleURL (imageGallery, titles);

/* ======================= ADDING FAVORITE AND UNFAVORITE BUTTONS ======================== */
// Creating favorite buttons
let favButton = document.createElement("button")
let unfavButton = document.createElement("button");

let favButton2 = document.createElement("button")
let unfavButton2 = document.createElement("button");

let favButton3 = document.createElement("button")
let unfavButton3 = document.createElement("button");

let favButton4 = document.createElement("button")
let unfavButton4 = document.createElement("button");

let favButton5 = document.createElement("button")
let unfavButton5 = document.createElement("button");

let favButton6 = document.createElement("button")
let unfavButton6 = document.createElement("button");

// specify classes for buttons
// favorite button specified
favButton.className = "fav-button-1";
favButton2.className = "fav-button-2";
favButton3.className = "fav-button-3";
favButton4.className = "fav-button-4";
favButton5.className = "fav-button-5";
favButton6.className = "fav-button-6";

// unfavorite button specified
unfavButton.className = "unfav-button-1";
unfavButton2.className = "unfav-button-2";
unfavButton3.className = "unfav-button-3";
unfavButton4.className = "unfav-button-4";
unfavButton5.className = "unfav-button-5";
unfavButton6.className = "unfav-button-6";

// specify text for buttons
favButton.textContent = "Make Favorite";
unfavButton.textContent = "Unfavorite";

favButton2.textContent = "Make Favorite";
unfavButton2.textContent = "Unfavorite";

favButton3.textContent = "Make Favorite";
unfavButton3.textContent = "Unfavorite";

favButton4.textContent = "Make Favorite";
unfavButton4.textContent = "Unfavorite";

favButton5.textContent = "Make Favorite";
unfavButton5.textContent = "Unfavorite";

favButton6.textContent = "Make Favorite";
unfavButton6.textContent = "Unfavorite";


// append buttons with appendChild()
const imgContainer1 = document.querySelector(".img-1");
const imgContainer2 = document.querySelector(".img-2");
const imgContainer3 = document.querySelector(".img-3");
const imgContainer4 = document.querySelector(".img-4");
const imgContainer5 = document.querySelector(".img-5");
const imgContainer6 = document.querySelector(".img-6");

// appending child to all 6 pictures
imgContainer1.appendChild(favButton);
imgContainer1.appendChild(unfavButton);

imgContainer2.appendChild(favButton2);
imgContainer2.appendChild(unfavButton2);

imgContainer3.appendChild(favButton3);
imgContainer3.appendChild(unfavButton3);

imgContainer4.appendChild(favButton4);
imgContainer4.appendChild(unfavButton4);

imgContainer5.appendChild(favButton5);
imgContainer5.appendChild(unfavButton5);

imgContainer6.appendChild(favButton6);
imgContainer6.appendChild(unfavButton6);


// inserting icons
let icon1 = document.createElement("i");
icon1.className = "bx bxs-check-circle";

let icon2 = document.createElement("i");
icon2.className = "bx bxs-check-circle";

let icon3 = document.createElement("i");
icon3.className = "bx bxs-check-circle";

let icon4 = document.createElement("i");
icon4.className = "bx bxs-check-circle";

let icon5 = document.createElement("i");
icon5.className = "bx bxs-check-circle";

let icon6 = document.createElement("i");
icon6.className = "bx bxs-check-circle";

/* ================================================== COOKIES =============================================== */
/* ================== IMAGE 1 ===================== */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// Add to cookie on click
favButton.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "waterTime=WaterFall";

    favButton.style.display = "none";

    imgContainer1.prepend(unfavButton);

    imgContainer1.appendChild(icon1);
    imgContainer1.appendChild(unfavButton);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("waterTime")){
    favButton.style.display = "none";

    imgContainer1.prepend(unfavButton);

    imgContainer1.appendChild(icon1);
    imgContainer1.appendChild(unfavButton);
} 
// Remove cookie
unfavButton.addEventListener('click', ()=> {
    document.cookie="waterTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton.style.display = 'block';
    favButton.style.transform = 'translate(50%, 85%)';
    imgContainer1.prepend(icon1);
    icon1.style.display = "none";
})

/* ================== IMAGE 2 ===================== */
// Add to cookie on click
favButton2.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "pyramidTime=Pyramid";

    favButton2.style.display = "none";

    imgContainer2.prepend(unfavButton2);

    imgContainer2.appendChild(icon2);
    imgContainer2.appendChild(unfavButton2);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("pyramidTime")){
    favButton2.style.display = "none";

    imgContainer2.prepend(unfavButton2);

    imgContainer2.appendChild(icon2);
    imgContainer2.appendChild(unfavButton2);
} 

// Remove cookie
unfavButton2.addEventListener('click', ()=> {
    document.cookie="pyramidTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton2.style.display = 'block';
    favButton2.style.transform = 'translate(50%, 85%)';
    imgContainer2.prepend(icon2);
    icon2.style.display = "none";
})

/* ================== IMAGE 3 ===================== */
// Add to cookie on click
favButton3.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "skyscraperTime=Skyscraper";

    favButton3.style.display = "none";

    imgContainer3.prepend(unfavButton3);

    imgContainer3.appendChild(icon3);
    imgContainer3.appendChild(unfavButton3);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("skyscraperTime")){
    favButton3.style.display = "none";

    imgContainer3.prepend(unfavButton3);

    imgContainer3.appendChild(icon3);
    imgContainer3.appendChild(unfavButton3);
} 

// Remove cookie
unfavButton3.addEventListener('click', ()=> {
    document.cookie="skyscraperTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton3.style.display = 'block';
    favButton3.style.transform = 'translate(50%, 85%)';
    imgContainer3.prepend(icon3);
    icon3.style.display = "none";
})

/* ================== IMAGE 4 ===================== */
// Add to cookie on click
favButton4.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "tokyoTime=tokyo";

    favButton4.style.display = "none";

    imgContainer4.prepend(unfavButton4);

    imgContainer4.appendChild(icon4);
    imgContainer4.appendChild(unfavButton4);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("tokyoTime")){
    favButton4.style.display = "none";

    imgContainer4.prepend(unfavButton4);

    imgContainer4.appendChild(icon4);
    imgContainer4.appendChild(unfavButton4);
} 

// Remove cookie
unfavButton4.addEventListener('click', ()=> {
    document.cookie="tokyoTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton4.style.display = 'block';
    favButton4.style.transform = 'translate(50%, 85%)';
    imgContainer4.prepend(icon4);
    icon4.style.display = "none";
})

/* ================== IMAGE 5 ===================== */
// Add to cookie on click
favButton5.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "snowTime=snow";

    favButton5.style.display = "none";

    imgContainer5.prepend(unfavButton5);

    imgContainer5.appendChild(icon5);
    imgContainer5.appendChild(unfavButton5);

})

// If cookie exist, show icon and hide favorite button
if (getCookie("snowTime")){
    favButton5.style.display = "none";

    imgContainer5.prepend(unfavButton5);

    imgContainer5.appendChild(icon5);
    imgContainer5.appendChild(unfavButton5);
} 

// Remove cookie
unfavButton5.addEventListener('click', ()=> {
    document.cookie="snowTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton5.style.display = 'block';
    favButton5.style.transform = 'translate(50%, 85%)';
    imgContainer5.prepend(icon5);
    icon5.style.display = "none";
})

/* ================== IMAGE 6 ===================== */
// Add to cookie on click
favButton6.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "eiffelTime=eiffelTower";

    favButton6.style.display = "none";

    imgContainer6.prepend(unfavButton6);

    imgContainer6.appendChild(icon6);
    imgContainer6.appendChild(unfavButton6);
})

// If cookie exist, show icon and hide favorite button
if (getCookie("eiffelTime")){
    favButton6.style.display = "none";

    imgContainer6.prepend(unfavButton6);

    imgContainer6.appendChild(icon6);
    imgContainer6.appendChild(unfavButton6);
} 

// Remove cookie
unfavButton6.addEventListener('click', ()=> {
    document.cookie="eiffelTime=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton6.style.display = 'block';
    favButton6.style.transform = 'translate(50%, 85%)';
    imgContainer6.prepend(icon6);
    icon6.style.display = "none";
})

 


