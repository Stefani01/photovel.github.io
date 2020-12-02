
window.addEventListener("scroll", effects);
function effects(){
    var klaseEfekti = document.querySelectorAll(".effect");
    for(let i=0; i < klaseEfekti.length; i++){
        var position = klaseEfekti[i].getBoundingClientRect();
        var screenPosition = window.innerHeight[i] / 1.3;
        if(position < screenPosition){
            klaseEfekti.classList.add("appear");
        }
    }
}


// meni
var nazivMeni = new Array("About", "Services", "Team", "Gallery", "Contact", "Author", "Documentation");
var hrefMeni = new Array("#about", "#services","#team", "#gallery", "#contact", "autor", "documentation");


                /* LOGO */

var logoIspis = document.createElement("a");
logoIspis.setAttribute("class", "navbar-brand");
logoIspis.setAttribute("href", "index.html");
// <i class="fas fa-camera-retro"></i>
var sadrzajLogoIkonica = `<img src="https://img.icons8.com/nolan/70/compact-camera.png"/>`;
//var sadrzajLogoText = document.createTextNode("PHOTOVEL");
logoIspis.innerHTML = sadrzajLogoIkonica;
//logoIspis.appendChild(sadrzajLogoText);
document.querySelector("#logo").appendChild(logoIspis);

                /* MENI */

var ulMeni = document.querySelector("#ulMeni");
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

                /* DINAMICKI ISPIS NASLOVA */

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

            /* SOCIJALNE MREZE */

var socMrezeIkonice = new Array("<img src='https://img.icons8.com/nolan/35/facebook-new.png'/>","<img src='https://img.icons8.com/nolan/35/instagram-new.png'/>", "<img src='https://img.icons8.com/nolan/35/pinterest.png'/>", "<img src='https://img.icons8.com/nolan/35/phone.png'/>", "<img src='https://img.icons8.com/nolan/35/apple-mail.png'/>" );
var socMrezeLink = new Array("https://www.facebook.com/", "https://www.instagram.com/", "https://www.pinterest.com/", "tel:123-456-7890", "mailto: photovel@google.com");

var socMreze = document.querySelector("#ulSocMreze");
for(let i=0; i < socMrezeIkonice.length; i++){
    var liMeni = document.createElement("li");
    liMeni.classList.add("list-group-item");
    var aMeni = document.createElement("a");
    aMeni.setAttribute("href", socMrezeLink[i]);
    aMeni.innerHTML = socMrezeIkonice[i];
    liMeni.appendChild(aMeni);
    socMreze.appendChild(liMeni);
}

            /* DINAMICKI ISPIS KAMERE */

var kamereSrc = new Array("assets/img/cc749ededc077309f29421d3cb727927-(1).png", "assets/img/941035643.png", "assets/img/23-video-camera-png-image.png");
var kamereNaziv = new Array("Canon EOS 30D", "Nikon Z7", "Sony 4K");
var kameraDeoStrane = document.querySelector("#kamere");
for(let i=0; i < kamereSrc.length; i++){
    var kamera = document.createElement("div");
    kamera.classList.add("col-md-4","boxKamera", "shadow-lg",  "p-4","m-2", "mx-auto");

    var kameraImg = document.createElement("img");
    kameraImg.setAttribute("src", kamereSrc[i]);
    kameraImg.classList.add("img-fluid");
    kamera.appendChild(kameraImg);
    var kameraIme = document.createElement("h5");
    kameraImg.classList.add("nazivKamera");
    kameraIme.textContent = kamereNaziv[i];
    kamera.appendChild(kameraIme);

    kameraDeoStrane.appendChild(kamera);
}

            /* DINAMICKI ISPIS TEAM */

var imgTimSrc = new Array("assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" , "assets/img/almos-bechtold-3402kvtHhOo-unsplash.jpg", "assets/img/austin-wade-X6Uj51n5CE8-unsplash.jpg");
var timImena = new Array("Seth Zavala", "Ema Hancock", "Kavan Kay");

var timDeoStrane = document.querySelector("#timIspis");
for(let i=0; i < imgTimSrc.length; i++){

    var clanTim = document.createElement("div");
    clanTim.classList.add("col-sm-3", "col-md-2", "teamMember", "shadow-lg");

    var slikaTim = document.createElement("div");
    slikaTim.classList.add("imgMember");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", imgTimSrc[i]);
    imgTag.classList.add("img-fluid","pt-3");
    slikaTim.appendChild(imgTag);
    clanTim.appendChild(slikaTim);

    var imeTim = document.createElement("div");
    imeTim.classList.add("nameMember","text-center");
    var h2Tag = document.createElement("h2");
    h2Tag.textContent = timImena[i];
    imeTim.appendChild(h2Tag);
    clanTim.appendChild(imeTim);

    timDeoStrane.appendChild(clanTim);
}
