window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("promeniIzgled");
      } 
      else {
        document.getElementById("header").classList.remove("promeniIzgled");
      }
})

// meni
var nazivMeni = new Array("About", "Services", "Team", "Gallery", "Contact", "Author", "Documentation");
var hrefMeni = new Array("#about", "#services","#team", "#gallery", "#contact", "autor", "documentation");


                /* LOGO */

var logoIspis = document.createElement("a");
logoIspis.setAttribute("class", "navbar-brand");
logoIspis.setAttribute("href", "index.html");
var sadrzajLogoIkonica = `<img src="https://img.icons8.com/ios-filled/40/000000/compact-camera.png"/>`;
logoIspis.innerHTML = sadrzajLogoIkonica;
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

var ulHamburger = document.createElement("ul");
ulHamburger.classList.add("list-group", "linkovi");
for(let i=0; i < nazivMeni.length; i++){
    var liHamburger = document.createElement("li");
    liHamburger.classList.add("list-group-item");

    var aHamburger = document.createElement("a");
    aHamburger.classList.add("nav-link");
    aHamburger.href = hrefMeni[i];
    aHamburger.textContent = nazivMeni[i];

    liHamburger.appendChild(aHamburger);
    ulHamburger.appendChild(liHamburger);
    
}
document.querySelector("#meniHamburger").appendChild(ulHamburger);

                /* DINAMICKI ISPIS NASLOVA */

var naslovi = document.querySelectorAll(".naslovIspis");

function ispisKlasaNaslova(){
    h1Tag.classList.add("text-uppercase", "text-center", "display-4");
}

function hrTagKlase(){
    hrTag.classList.add("mx-auto", "borderNaslov");
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
var kamereNaziv = new Array("Canon EOS 600D", "Nikon Z7", "Canon XF 200");
var kamere_deoStrane = document.querySelector("#kamere");

for(let i=0; i < kamereSrc.length; i++){
    var divCard = document.createElement("div");
    divCard.classList.add("card", "shadow", "d-flex", "justify-content", "align-items-center", "mb-2", "karticaKamera");
    divCard.style.width = "10rem";

    var slikaKamera = document.createElement("img");
    slikaKamera.src = kamereSrc[i];
    slikaKamera.classList.add("card-img-top", "img-fluid");

    divCard.appendChild(slikaKamera);

    var divBody = document.createElement("div");
    divBody.classList.add("card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("cart-title", "text-center");
    cardTitle.textContent = kamereNaziv[i];

    if(i==2){
        divCard.classList.remove("mb-2")
        divCard.classList.add("p-2");
        divBody.classList.add("mt-4");
    }

    divBody.appendChild(cardTitle);
    divCard.appendChild(divBody);
    kamere_deoStrane.appendChild(divCard);
}

            /* DINAMICKI ISPIS TEAM */

var imgTimSrc = new Array("assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" , "assets/img/almos-bechtold-3402kvtHhOo-unsplash.jpg", "assets/img/austin-wade-X6Uj51n5CE8-unsplash.jpg");
var timImena = new Array("Seth Zavala", "Ema Hancock", "Kavan Kay");
var timDeoStrane = document.querySelector("#tim");

for(let i=0; i < imgTimSrc.length; i++){
    var divCardTim = document.createElement("div");
    divCardTim.classList.add("card", "shadow-lg", "d-flex", "align-items-center", "p-3", "karticaTim");
    divCardTim.style.width = "17rem";

    var slikaTim = document.createElement("img");
    slikaTim.src = imgTimSrc[i];
    slikaTim.classList.add("card-img-top", "img-fluid");

    divCardTim.appendChild(slikaTim);

    var divBodyTim = document.createElement("div");
    divBodyTim.classList.add("card-body");

    var cardTitleTim = document.createElement("h5");
    cardTitleTim.classList.add("cart-title", "text-center");
    cardTitleTim.textContent = timImena[i];

    divBodyTim.appendChild(cardTitleTim);
    divCardTim.appendChild(divBodyTim);
    timDeoStrane.appendChild(divCardTim);
}

/* DINAMICKI ISPIS P TAGOVA */

var pTagovi = new Array();
pTagovi[0] = "You need professional photography? You are in the right place!";
pTagovi[1] = `PHOTOVEL company exists since 2000. All photograps are taken by
professional artists and photographers who have years of professional 
experience as well as excellent knowledge of post-production programs 
guarantee that photography will be at the highest level.
`;
pTagovi[2] = `What sets PHOTOVEL from others is good portfolio and quality, which shows the wide range of services we provide.
Taking photos of the most important moments of your life is what we do best.`

for(let i = 0; i < 3; i++){
    var pTag = document.createElement("p");
    pTag.textContent = pTagovi[i];
    document.querySelector("#textAbout").appendChild(pTag);
}
