// NAVIGACIJA

var nazivMeni = new Array("About", "Services", "Gallery", "Contact");
var hrefMeni = new Array("#oNama", "#usluge", "#galerija", "#kontakt");

    // logo
var logoIspis = document.createElement("a");
logoIspis.setAttribute("class", "navbar-brand");
logoIspis.setAttribute("href", "index.html");
console.log(logoIspis);
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
    console.log(liMeni);
    ulMeni.appendChild(liMeni);
}
document.querySelector("#meni_ul_li").appendChild(ulMeni);
