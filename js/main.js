// NAVIGACIJA

var nazivMeni = new Array("About", "Services", "Team", "Gallery", "Contact", "Author", "Documentation");
var hrefMeni = new Array("#about", "#services","#team", "#gallery", "#contact", "autor", "documentation");

    // logo
var logoIspis = document.createElement("a");
logoIspis.setAttribute("class", "navbar-brand");
logoIspis.setAttribute("href", "index.html");
// <i class="fas fa-camera-retro"></i>
var sadrzajLogoIkonica = "<i class='fas fa-camera-retro pr-3'></i>";
var sadrzajLogoText = document.createTextNode("PHOTOVEL");
logoIspis.innerHTML = sadrzajLogoIkonica;
logoIspis.appendChild(sadrzajLogoText);
document.querySelector("#logo").appendChild(logoIspis);

    // ul li
var ulMeni = document.createElement("ul");
ulMeni.setAttribute("class", "list-inline");
ulMeni.setAttribute("class", "ml-auto");
//var meni = "<ul class='navbar-nav ml-auto'>";
for(let i=0; i<nazivMeni.length; i++){
    var liMeni = document.createElement("li");
    liMeni.setAttribute("class", "nav-item");
    liMeni.setAttribute("class", "list-inline-item");
    var aMeni = document.createElement("a");
    aMeni.setAttribute("class", "nav-link");
    aMeni.setAttribute("href", hrefMeni[i]);
    aMeni.textContent = nazivMeni[i];
    liMeni.appendChild(aMeni);
    ulMeni.appendChild(liMeni);
}
document.querySelector("#meni_ul_li").appendChild(ulMeni);

// burger
/*
const meniBurger = document.querySelector(".burger");
let meniOtvoreno = false;
meniBurger.addEventListener("click", function(){
    if(!meniOtvoreno){
        meniBurger.classList.add("otvoreno");
        meniOtvoreno = true;
        document.getElementById("sideNav").style.width = "100%";
    }
    else{
        meniBurger.classList.remove("otvoreno");
        meniOtvoreno = false;
        document.getElementById("sideNav").style.width = "0";
    }
});
*/

// Dinamicki ispis naslova

var naslovi = document.querySelectorAll(".naslovIspis");

function ispisKlasaNaslova(){
    h1Tag.classList.add("text-uppercase");
    h1Tag.classList.add("text-center");
    h1Tag.classList.add("display-4");
}

function hrTagKlase(){
    hrTag.classList.add("mx-auto");
    hrTag.classList.add("borderNaslov");  
}

for(let i=0; i < naslovi.length; i++){
    if(i == 5) break;

    var h1Tag = document.createElement("h1");
    h1Tag.setAttribute("href", hrefMeni[i]);
    ispisKlasaNaslova();
    h1Tag.innerHTML = nazivMeni[i];
    naslovi[i].appendChild(h1Tag);

    var hrTag = document.createElement("hr");
    hrTagKlase();
    naslovi[i].appendChild(hrTag);
}

// Dinamicki ispis slika

var slikeSrcNiz = new Array("../img/cc749ededc077309f29421d3cb727927 (1).png", "../img/941035643.png", "../img/23-video-camera-png-image.png");
var kamera = document.querySelector(".slikaKamera");
for(let i=0; i < 3; i++){
    var imgTag = document.createElement("img");
    imgTag.classList.add("img-fluid");
    imgTag.classList.add("efekat");
    imgTag.setAttribute("src", slikeSrcNiz[i]);
    kamera.appendChild(imgTag);
}



