"use strict";

// It is always helpful to use comments in your code!


//boiling temps
var boilingtemp = document.getElementById("boiling-temp");

var boiling = function boiling() {
    return boilingtemp.innerHTML = "212";
};

boiling();

//freezing temps

var freezingtemp = document.getElementById("freezing-temp");

freezingtemp.innerHTML = "32";

//water temps

var watertemp = document.getElementById("water-temp");

watertemp.innerHTML = "75";

//set time out

var boilingid = document.getElementById("boiling");

var frozenid = document.getElementById("frozen");

var goodid = document.getElementById("good-temp");

setTimeout(function () {

    if (watertemp > 212) {
        boilingid.classList.remove("hide").add("show");
    } else if (watertemp < 32) {
        frozenid.classList.remove("hide").add("show");
    } else {
        goodid.classList.remove("hide").add("show");
    }
}, 3000);