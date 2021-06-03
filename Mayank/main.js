// Array 1
var url = [
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Jerry.jpg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Kareem.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Magic.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Shaq.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Kobe.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Lebron.jpeg",
];
// Array 2
var title = [
    "Jerry West",
    "Kareem Abdul-Jabbar",
    "Magic Johnson",
    "Shaquille O'Neal",
    "Kobe Bryant",
    "LeBron James",
];
// Array 3
var sentences = [
    "Jerry West was a phenomenal basketball player. He brought Los Angeles Lakers their first title in 1972. Eventually, he became famously known as the NBA Logo.",
    "Kareem Abdul-Jabbar was one of the best centers in the game. He came to the Lakers in 1975 and guided them to 5 championships. He is currently first on the all time scoring list.",
    "Magic Johnson is the greatest point guard in NBA history. He brought 5 NBA Championships to Los Angeles. He currently advises the Lakers and owns a part of the Dodgers.",
    "Shaquille O'Neal was a dominant force in the NBA. When he joined the Lakers in 1996 he brought 3 Championships during his tenure. Shaq is now an entrepreneur who owns multiple businessess.",
    "Kobe Bryant is the greatest Laker player who ever played. Kobe has given the Lakers 5 championships and won many accolades. May Kobe Bryant's soul rest in peace for being an amazing athlete and person.",
    "Lebron James is currently the best player in the NBA. Ever since he has arrived to Los Angeles, he has only thing in mind. Now that he has won the 2020 NBA Championship for the Lakers his mission has been fulfilled."
]

// Functions for cookies
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

// ==================== Image 1==================== //
// Add to cookie on click
favButton.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketJerry=JerryWest";

    favButton.style.display = "none";

    imgContainer1.prepend(unfavButton);

    imgContainer1.appendChild(icon1);
    imgContainer1.appendChild(unfavButton);
})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketJerry")){
    favButton.style.display = "none";

    imgContainer1.prepend(unfavButton);

    imgContainer1.appendChild(icon1);
    imgContainer1.appendChild(unfavButton);
} 
// Remove cookie
unfavButton.addEventListener('click', ()=> {
    document.cookie="basketJerry=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton.style.display = 'block';
    favButton.style.transform = 'translate(5%, 0%)';
    imgContainer1.prepend(icon1);
    icon1.style.display = "none";
})

// ==================== Image 2==================== //
// Add to cookie on click
favButton2.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketKareem=Kareem-Abdul-Jabbar";

    favButton2.style.display = "none";

    imgContainer2.prepend(unfavButton2);

    imgContainer2.appendChild(icon2);
    imgContainer2.appendChild(unfavButton2);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketKareem")){
    favButton2.style.display = "none";

    imgContainer2.prepend(unfavButton2);

    imgContainer2.appendChild(icon2);
    imgContainer2.appendChild(unfavButton2);
} 
// Remove cookie
unfavButton2.addEventListener('click', ()=> {
    document.cookie="basketKareem=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton2.style.display = 'block';
    favButton2.style.transform = 'translate(5%, 0%)';
    imgContainer2.prepend(icon2);
    icon2.style.display = "none";
})

// ==================== Image 3==================== //
// Add to cookie on click
favButton3.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketMagic=Magic-Johnson";

    favButton3.style.display = "none";

    imgContainer3.prepend(unfavButton3);

    imgContainer3.appendChild(icon3);
    imgContainer3.appendChild(unfavButton3);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketMagic")){
    favButton3.style.display = "none";

    imgContainer3.prepend(unfavButton3);

    imgContainer3.appendChild(icon3);
    imgContainer3.appendChild(unfavButton3);
} 
// Remove cookie
unfavButton3.addEventListener('click', ()=> {
    document.cookie="basketMagic=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton3.style.display = 'block';
    favButton3.style.transform = 'translate(5%, 0%)';
    imgContainer3.prepend(icon3);
    icon3.style.display = "none";
})

// ==================== Image 4==================== //
// Add to cookie on click
favButton4.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketShaquille=Shaquille-O'Neal";

    favButton4.style.display = "none";

    imgContainer4.prepend(unfavButton4);

    imgContainer4.appendChild(icon4);
    imgContainer4.appendChild(unfavButton4);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketShaquille")){
    favButton4.style.display = "none";

    imgContainer4.prepend(unfavButton4);

    imgContainer4.appendChild(icon4);
    imgContainer4.appendChild(unfavButton4);
} 
// Remove cookie
unfavButton4.addEventListener('click', ()=> {
    document.cookie="basketShaquille=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton4.style.display = 'block';
    favButton4.style.transform = 'translate(5%, 0%)';
    imgContainer4.prepend(icon4);
    icon4.style.display = "none";
})

// ==================== Image 5==================== //
// Add to cookie on click
favButton5.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketKobe=Kobe Bryant";

    favButton5.style.display = "none";

    imgContainer5.prepend(unfavButton5);

    imgContainer5.appendChild(icon5);
    imgContainer5.appendChild(unfavButton5);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketKobe")){
    favButton5.style.display = "none";

    imgContainer5.prepend(unfavButton5);

    imgContainer5.appendChild(icon5);
    imgContainer5.appendChild(unfavButton5);
} 
// Remove cookie
unfavButton5.addEventListener('click', ()=> {
    document.cookie="basketKobe=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton5.style.display = 'block';
    favButton5.style.transform = 'translate(5%, 0%)';
    imgContainer5.prepend(icon5);
    icon5.style.display = "none";
})

// ==================== Image 6==================== //
// Add to cookie on click
favButton6.addEventListener('click', (e)=> {
    e.preventDefault();

    document.cookie = "basketLebron=Lebron James";

    favButton6.style.display = "none";

    imgContainer6.prepend(unfavButton6);

    imgContainer6.appendChild(icon6);
    imgContainer6.appendChild(unfavButton6);

})
// If cookie exist, show icon and hide favorite button
if (getCookie("basketLebron")){
    favButton6.style.display = "none";

    imgContainer6.prepend(unfavButton6);

    imgContainer6.appendChild(icon6);
    imgContainer6.appendChild(unfavButton6);
} 
// Remove cookie
unfavButton6.addEventListener('click', ()=> {
    document.cookie="basketLebron=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    favButton6.style.display = 'block';
    favButton6.style.transform = 'translate(5%, 0%)';
    imgContainer6.prepend(icon6);
    icon6.style.display = "none";
})

