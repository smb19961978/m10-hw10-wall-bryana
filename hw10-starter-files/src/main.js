// It is always helpful to use comments in your code!


//boiling temps
const boilingtemp = document.getElementById("boiling-temp");

const boiling = () => boilingtemp.innerHTML = "212";

boiling();

//freezing temps

const freezingtemp = document.getElementById("freezing-temp");

freezingtemp.innerHTML = "32";

//water temps

const watertemp = document.getElementById("water-temp");

watertemp.innerHTML = "75";

//set time out

const boilingid = document.getElementById("boiling");

const frozenid = document.getElementById("frozen");

const goodid = document.getElementById("good-temp");

setTimeout(function(){
    
    if (watertemp > 212){
    boilingid.classList.remove("hide").add("show");
    }
    
    else if (watertemp< 32){
        frozenid.classList.remove("hide").add("show");
    }
        
    else {
        goodid.classList.remove("hide").add("show");
    }
    

    
}, 3000);