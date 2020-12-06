window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("promeniIzgled");
      } 
      else {
        document.getElementById("header").classList.remove("promeniIzgled");
      }
})

// meni
var nazivMeni = new Array("About", "Services", "Team", "Gallery", "Contact");
var hrefMeni = new Array("#about", "#services","#team", "#gallery", "#contact");


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

var socMrezeIkonice = new Array("<img src='https://img.icons8.com/nolan/30/facebook-new.png'/>","<img src='https://img.icons8.com/nolan/30/instagram-new.png'/>", "<img src='https://img.icons8.com/nolan/30/pinterest.png'/>", "<img src='https://img.icons8.com/nolan/30/phone.png'/>", "<img src='https://img.icons8.com/nolan/30/apple-mail.png'/>" );
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


 /* ISPIS GALERIJA */


var liNizGalerija = new Array("Celebration", "City", "Family", "Food", "Interior", "Nature", "People");
var liNizKlasaBoja = new Array("primary", "secondary", "success", "danger", "warning", "info", "dark");

var slikeCelebration = new Array("assets/img/celebration/stephen-leonardi-dYgv-1JnPTA-unsplash.jpg","assets/img/celebration/juan-encalada-x-otqcCinQk-unsplash.jpg","assets/img/celebration/nick-fewings-kmLUcvhqhSo-unsplash.jpg","assets/img/celebration/jed-villejo-4SByp8kIoOE-unsplash.jpg");
var slikeCity = new Array("assets/img/city/pexels-pixabay-356830.jpg","assets/img/city/pexels-paweł-l-1121782.jpg","assets/img/city/pexels-tatiana-fet-1105766.jpg","assets/img/city/pexels-adrianna-calvo-17682.jpg");
var slikeFamily = new Array("assets/img/family/pexels-andreza-vasconcelos-3330714.jpg","assets/img/family/pexels-andreas-wohlfahrt-2456327.jpg","assets/img/family/pexels-singkham-1116050.jpg","assets/img/family/pexels-daria-obymaha-1683975.jpg","assets/img/family/jessica-rockowitz-6c4Uhhe68yQ-unsplash.jpg","assets/img/family/liv-bruce-odIhQypCuUk-unsplash.jpg");
var slikeFood = new Array("assets/img/food/jill-heyer-toxlLueLNDs-unsplash.jpg","assets/img/food/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg","assets/img/food/alex-munsell-Yr4n8O_3UPc-unsplash.jpg","assets/img/food/brooke-lark-W9OKrxBqiZA-unsplash.jpg");
var slikeInterior = new Array("assets/img/interior/pexels-jean-van-der-meulen-1457842.jpg","assets/img/interior/pexels-pixabay-279719 (1).jpg","assets/img/interior/pexels-tiff-ng-3700245.jpg");
var slikeNature = new Array("assets/img/nature/pexels-johannes-rapprich-2283757.jpg","assets/img/nature/pexels-goran-vrakela-245121.jpg","assets/img/nature/pexels-tobias-bjørkli-2113566 (1).jpg","assets/img/nature/pexels-michael-block-3225517.jpg","assets/img/nature/pexels-alex-azabache-3757141.jpg","assets/img/nature/pexels-ruvim-miksanskiy-1438761.jpg");
var slikePeople = new Array("assets/img/people/pexels-nappy-935985.jpg","assets/img/people/pexels-pixabay-458766.jpg","assets/img/people/pexels-dazzle-jam-2710063.jpg","assets/img/people/pexels-tuấn-kiệt-jr-1382731.jpg","assets/img/people/pexels-dazzle-jam-2689401.jpg","assets/img/people/pexels-kourosh-qaffari-1921168.jpg");

var ulGalerija = document.createElement("ul");
ulGalerija.classList.add("list-group", "text-center", "d-flex", "justify-content-around", "flex-column", "flex-md-row");

for(let i = 0; i < liNizGalerija.length; i++){
    var liGalerija = document.createElement("li");
    liGalerija.classList.add("list-group-item", "border-0", "shadow-sm", "list-group-item-"+ liNizKlasaBoja[i]);
    liGalerija.innerHTML = liNizGalerija[i];
   
    ulGalerija.appendChild(liGalerija);
}
document.querySelector("#slikeGalerija").appendChild(ulGalerija);

// tab celebration
for(let i = 0; i < slikeCelebration.length; i++){
    var sadrzajTab = document.createElement("div");
    sadrzajTab.classList.add("sadrzajTab");

    var drzac = document.createElement("div");
    drzac.classList.add("container");
    
    var slikeSadrzaj = document.createElement("div");
    slikeSadrzaj.classList.add("slikeSadrzaj","row","mt-2");

    for(let j=0; j < 3; j++){
        var kolona = document.createElement("div");
        kolona.classList.add("col");
        if(j==0){
            var slikuUbaci = document.createElement("img");
            slikuUbaci.classList.add("img-fluid", "pb-2");
            slikuUbaci.src = slikeCelebration[j];
            kolona.appendChild(slikuUbaci);
            
        }
        if(j==1){
            for(let k=0; k<2; k++){
                var slikuUbaci = document.createElement("img");
                slikuUbaci.classList.add("img-fluid", "pb-2");
                slikuUbaci.src = slikeCelebration[k+1];
                kolona.appendChild(slikuUbaci);
                
            }
        }
        if(j==2){
            var slikuUbaci = document.createElement("img");
            slikuUbaci.classList.add("img-fluid", "pb-2");
            slikuUbaci.src = slikeCelebration[j+1];
            kolona.appendChild(slikuUbaci);
            
        }
        slikeSadrzaj.appendChild(kolona);
    }   
}
drzac.appendChild(slikeSadrzaj);
sadrzajTab.appendChild(drzac);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab);

// tab City
for(let i = 0; i < slikeCity.length; i++){
    var sadrzajTab1 = document.createElement("div");
    sadrzajTab1.classList.add("sadrzajTab");

    var drzac1 = document.createElement("div");
    drzac1.classList.add("container");
    
    var slikeSadrzaj1 = document.createElement("div");
    slikeSadrzaj1.classList.add("slikeSadrzaj","row","mt-2");

    for(let j = 0; j < 2; j++){
        var kolona1 = document.createElement("div");
        kolona1.classList.add("col");
        for(let k = 0; k < 2; k++){
            var slikuUbaci1 = document.createElement("img");
            slikuUbaci1.classList.add("img-fluid", "pb-2");
            if(j==1){
                slikuUbaci1.src = slikeCity[k+j+1];
            }
            else{
                slikuUbaci1.src = slikeCity[k+j];
            }
            
            kolona1.appendChild(slikuUbaci1);
        }
        slikeSadrzaj1.appendChild(kolona1);
    }
}
drzac1.appendChild(slikeSadrzaj1);
sadrzajTab1.appendChild(drzac1);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab1);

// tab family
for(let i = 0; i < slikeFamily.length; i++){
    var sadrzajTab2 = document.createElement("div");
    sadrzajTab2.classList.add("sadrzajTab");

    var drzac2 = document.createElement("div");
    drzac2.classList.add("container");
    
    var slikeSadrzaj2 = document.createElement("div");
    slikeSadrzaj2.classList.add("slikeSadrzaj","row","mt-2");

    for(let j=0; j < 3; j++){
        var kolona2 = document.createElement("div");
        kolona2.classList.add("col");
        if(j==0){
            var slikuUbaci2 = document.createElement("img");
            slikuUbaci2.classList.add("img-fluid", "pb-2");
            slikuUbaci2.src = slikeFamily[j];
            kolona2.appendChild(slikuUbaci2);
            
        }
        if(j==1){
            for(let k=0; k<3; k++){
                var slikuUbaci2 = document.createElement("img");
                slikuUbaci2.classList.add("img-fluid", "pb-2");
                slikuUbaci2.src = slikeFamily[k+j];
                kolona2.appendChild(slikuUbaci2);
            }
        }
        if(j==2){
            for(let k=0; k < 2; k++){
                var slikuUbaci2 = document.createElement("img");
                slikuUbaci2.classList.add("img-fluid", "pb-2");
                slikuUbaci2.src = slikeFamily[slikeFamily.length-j+k];
                kolona2.appendChild(slikuUbaci2);
            }
        }
        slikeSadrzaj2.appendChild(kolona2);
    }   
}   

drzac2.appendChild(slikeSadrzaj2);
sadrzajTab2.appendChild(drzac2);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab2);

// tab Food
for(let i = 0; i < slikeFamily.length; i++){
    var sadrzajTab3 = document.createElement("div");
    sadrzajTab3.classList.add("sadrzajTab");

    var drzac3 = document.createElement("div");
    drzac3.classList.add("container");
    
    var slikeSadrzaj3 = document.createElement("div");
    slikeSadrzaj3.classList.add("slikeSadrzaj","row","mt-2");

    for(let j=0; j < 3; j++){
        var kolona3 = document.createElement("div");
        kolona3.classList.add("col");
        if(j==0){
            var slikuUbaci3 = document.createElement("img");
            slikuUbaci3.classList.add("img-fluid", "pb-2");
            slikuUbaci3.src = slikeFood[j];
            kolona3.appendChild(slikuUbaci3);
            
        }
        if(j==1){
            var slikuUbaci3 = document.createElement("img");
            slikuUbaci3.classList.add("img-fluid", "pb-2");
            slikuUbaci3.src = slikeFood[j];
            kolona3.appendChild(slikuUbaci3);
        }
        if(j==2){
            for(let k=0; k < 2; k++){
                var slikuUbaci3 = document.createElement("img");
                slikuUbaci3.classList.add("img-fluid", "pb-2");
                slikuUbaci3.src = slikeFood[j+k];
                kolona3.appendChild(slikuUbaci3);
            }
        }
        slikeSadrzaj3.appendChild(kolona3);
    }   
}   
drzac3.appendChild(slikeSadrzaj3);
sadrzajTab3.appendChild(drzac3);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab3);

// tab interior

for(let i = 0; i < slikeInterior.length; i++){
    var sadrzajTab4 = document.createElement("div");
    sadrzajTab4.classList.add("sadrzajTab");

    var drzac4 = document.createElement("div");
    drzac4.classList.add("container");
    
    var slikeSadrzaj4 = document.createElement("div");
    slikeSadrzaj4.classList.add("slikeSadrzaj","row","mt-2");

    for(let j = 0; j < 2; j++){
        var kolona4 = document.createElement("div");
        kolona4.classList.add("col");
        if(j==0){
            for(let k=0; k < 2; k++){
                var slikuUbaci4 = document.createElement("img");
                slikuUbaci4.classList.add("img-fluid", "pb-2");
                slikuUbaci4.src = slikeInterior[j+k];
                kolona4.appendChild(slikuUbaci4);
            }
        }
        else{
            var slikuUbaci4 = document.createElement("img");
            slikuUbaci4.classList.add("img-fluid", "pb-2");
            slikuUbaci4.src = slikeInterior[j+1];
            kolona4.appendChild(slikuUbaci4);
        }
        slikeSadrzaj4.appendChild(kolona4);
    }
}
drzac4.appendChild(slikeSadrzaj4);
sadrzajTab4.appendChild(drzac4);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab4);

// tab nature
for(let i = 0; i < slikeNature.length; i++){
    var sadrzajTab5 = document.createElement("div");
    sadrzajTab5.classList.add("sadrzajTab");

    var drzac5 = document.createElement("div");
    drzac5.classList.add("container");
    
    var slikeSadrzaj5 = document.createElement("div");
    slikeSadrzaj5.classList.add("slikeSadrzaj","row","mt-2");

    for(let j=0; j < 3; j++){
        var kolona5 = document.createElement("div");
        kolona5.classList.add("col");
        if(j==0){
            for(let k=0; k < 3; k++){
                var slikuUbaci5 = document.createElement("img");
                slikuUbaci5.classList.add("img-fluid", "pb-2");
                slikuUbaci5.src = slikeNature[j+k];
                kolona5.appendChild(slikuUbaci5);
            }
        }
        if(j==1){
            var slikuUbaci5 = document.createElement("img");
            slikuUbaci5.classList.add("img-fluid", "pb-2");
            slikuUbaci5.src = slikeNature[slikeNature.length-j-2];
            kolona5.appendChild(slikuUbaci5);
        }
        if(j==2){
            for(let k=0; k < 2; k++){
                var slikuUbaci5 = document.createElement("img");
                slikuUbaci5.classList.add("img-fluid", "pb-2");
                slikuUbaci5.src = slikeNature[slikeNature.length-j+k];
                kolona5.appendChild(slikuUbaci5);
            }
        }
        slikeSadrzaj5.appendChild(kolona5);
    }   
}   
drzac5.appendChild(slikeSadrzaj5);
sadrzajTab5.appendChild(drzac5);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab5);

// tab People
for(let i = 0; i < slikePeople.length; i++){
    var sadrzajTab6 = document.createElement("div");
    sadrzajTab6.classList.add("sadrzajTab");

    var drzac6 = document.createElement("div");
    drzac6.classList.add("container");
    
    var slikeSadrzaj6 = document.createElement("div");
    slikeSadrzaj6.classList.add("slikeSadrzaj","row","mt-2");

    for(let j=0; j < 3; j++){
        var kolona6 = document.createElement("div");
        kolona6.classList.add("col");
        if(j==0){
            for(let k=0; k < 3; k++){
                var slikuUbaci6 = document.createElement("img");
                slikuUbaci6.classList.add("img-fluid", "pb-2");
                slikuUbaci6.src = slikePeople[j+k];
                kolona6.appendChild(slikuUbaci6);
            }
        }
        if(j==1){
            var slikuUbaci6 = document.createElement("img");
            slikuUbaci6.classList.add("img-fluid", "pb-2");
            slikuUbaci6.src = slikePeople[slikePeople.length-j-2];
            kolona6.appendChild(slikuUbaci6);
        }
        if(j==2){
            for(let k=0; k < 2; k++){
                var slikuUbaci6 = document.createElement("img");
                slikuUbaci6.classList.add("img-fluid", "pb-2");
                slikuUbaci6.src = slikePeople[slikePeople.length-j+k];
                kolona6.appendChild(slikuUbaci6);
            }
        }
        slikeSadrzaj6.appendChild(kolona6);
    }   
}   
drzac6.appendChild(slikeSadrzaj6);
sadrzajTab6.appendChild(drzac6);
document.querySelector("#slikeGalerija").appendChild(sadrzajTab6);


/* CONTACT */

    
var imgInfo = new Array("https://img.icons8.com/nolan/30/worldwide-location.png", "https://img.icons8.com/nolan/30/apple-mail.png", "https://img.icons8.com/nolan/30/phone.png");
var aInfo = new Array("photovel@gmail.com", "123-456-789");
var ahrefInfo = new Array("mailto:photovel@gmail.com", "tel:123-456-789");

var ulInfo = document.createElement("ul");
ulInfo.classList.add("list-group");

for(let i=0; i < imgInfo.length; i++){
    var liInfo = document.createElement("li");
    liInfo.classList.add("list-group-item");

    var infoSlika = document.createElement("img");
    infoSlika.src = imgInfo[i];

    liInfo.appendChild(infoSlika);
    
    if(i == 0){
        liInfo.textContent = "New York, NY 10001 SAD";
    }
    else if(i > 0){
        for(let j=0; j < 1; j++){
            var linkInfo = document.createElement("a");
            linkInfo.href = ahrefInfo[j];
            linkInfo.textContent = aInfo[j];

            liInfo.appendChild(linkInfo);
        } 
    }
    ulInfo.appendChild(liInfo);
}
document.querySelector("#listaInfo").appendChild(ulInfo);

var ulSocInfo = document.createElement("ul");
ulSocInfo.classList.add("list-group","list-group-horizontal");
for(let i=0; i < (socMrezeIkonice.length - 2); i++){
    var liSocInfo = document.createElement("li");
    liSocInfo.classList.add("list-group-item");

    var aSocInfo = document.createElement("a");
    aSocInfo.href = socMrezeLink[i];
    aSocInfo.innerHTML = socMrezeIkonice[i];

    liSocInfo.appendChild(aSocInfo);
    ulSocInfo.appendChild(liSocInfo);
}
document.querySelector("#socInfo").appendChild(ulSocInfo);


    /* FORMA*/

var nizId = new Array("tbFirstName","tbLastName", "tbEmail", "tbNumber", "textPoruka");
var nizName = new Array("firstName", "lastName", "email", "number", "poruka");
var nizLabel = new Array("*First name", "*Last name", "*Email", "*Phone number", "*Message");

var deo_strane_forma = document.querySelector("#ispisForma");
var k = 0;

for(let i=0; i < 3; i++){
    var redForma = document.createElement("div");
    redForma.classList.add("row");

    var j = 0;
    for(j, k; j < 2 && k < nizId.length; j++, k++){
        
        var kolonaForma = document.createElement("div");
        kolonaForma.classList.add("col");

        var divForma = document.createElement("div");
        divForma.classList.add("form-group");

        var labelForma = document.createElement("label");
        labelForma.innerHTML = nizLabel[k];
        divForma.appendChild(labelForma);
        if(i == 2){
            var poljeForma = document.createElement("textarea");
            poljeForma.classList.add("form-control");
            poljeForma.setAttribute("id", nizId[k]);
            poljeForma.setAttribute("name", nizName[k]);
            divForma.appendChild(poljeForma);
        }
        else{
            var inputForma = document.createElement("input");
            inputForma.setAttribute("type", "text");
            inputForma.setAttribute("id", nizId[k]);
            inputForma.classList.add("form-control")
            inputForma.setAttribute("name", nizName[k]);
            divForma.appendChild(inputForma);
        }
        var ispisProvera = document.createElement("span");
        divForma.appendChild(ispisProvera);

        kolonaForma.appendChild(divForma);
        redForma.appendChild(kolonaForma);
    }
    deo_strane_forma.appendChild(redForma);

}
var dugme = document.querySelector("#btnSend");
document.querySelector("#forma").insertBefore(deo_strane_forma, dugme);


// regularni izrazi

document.querySelector("#textPoruka").addEventListener("keyup", function(){
    var poljePoruka = document.querySelector("#textPoruka");
    var duzinaPoruke = poljePoruka.value.length;
    var sadrzajPoruka = poljePoruka.value;
    console.log(duzinaPoruke);

    if(duzinaPoruke <= 200){
        var ostaloJe = 200 - duzinaPoruke;
        poljePoruka.nextElementSibling.innerHTML = "Characters left: " + ostaloJe;
    }
    else{
        poljePoruka = sadrzajPoruka.substring(0,200);
    }
})

document.querySelector("#btnSend").addEventListener("click", function(){
    var ime = document.querySelector("#tbFirstName");
    var prezime = document.querySelector("#tbLastName");
    var email = document.querySelector("#tbEmail");
    var brojTelefona = document.querySelector("#tbNumber");
    var porukaPolje = document.querySelector("#textPoruka");

    var regIme = /^[A-Z][a-z]{1,10}(\s[A-Z][a-z]{2,10})*$/
    var regPrezime = /^[A-Z][a-z]{1,15}(\s[A-Z][a-z]{1,15})*$/
    var regEmail = /^([a-z]{3,15})([\._-]?[a-z]{3,20}([\d]{1,3}))*@([a-z]{3,20})(\.[a-z]{2,3})+$/
    /*
    +XXX XXX XXXXXXX
    +XXX XXX XXX-XXXX
    +XXX XXX XXX XXXX
    XXX XXXXXXX
    XXX XXX-XXXX
    XXX XXX XXXX
    */
    var regBrTelefona = /^([+][(]?[0-9]{1,4}[)]?\s)?[0-9]{2,3}[\s-]?[0-9]{3}[-\s]{0,1}[0-9]{4}$/
    var regPorukaPolje = /[^\s]/
    
    if(!regIme.test(ime.value)){
        ime.nextElementSibling.classList.add("greska");
        ime.nextElementSibling.innerHTML = "- First letter must be capitalized <br/>- First name must have at least two letters";
    }
    else{
        ime.nextElementSibling.classList.add("ispravno");
        ime.nextElementSibling.innerHTML = "✓";
    }

    if(!regPrezime.test(prezime.value)){
        prezime.nextElementSibling.classList.add("greska");
        prezime.nextElementSibling.innerHTML = "- First letter must be capitalized <br/>- Last name must have at least two letters";
    }
    else{
        prezime.nextElementSibling.classList.add("ispravno");
        prezime.nextElementSibling.innerHTML = "✓";
    }

    if(!regEmail.test(email.value)){
        email.nextElementSibling.classList.add("greska");
        email.nextElementSibling.innerHTML = "- Please enter a valid email address (example: name@gmail.com)";
    }
    else{
        email.nextElementSibling.classList.add("ispravno");
        email.nextElementSibling.innerHTML = "✓";
    }

    if(!regBrTelefona.test(brojTelefona.value)){
        brojTelefona.nextElementSibling.classList.add("greska");
        brojTelefona.nextElementSibling.innerHTML = "- Please enter your phone number in the format +123 45 67890 or 123 4567890";
    }
    else{
        brojTelefona.nextElementSibling.classList.add("ispravno");
        brojTelefona.nextElementSibling.innerHTML = "✓";
    }
    
    if(!regPorukaPolje.test(porukaPolje.value)){
        porukaPolje.nextElementSibling.classList.add("greska");
        porukaPolje.nextElementSibling.innerHTML = "- You must write a message";
    }
    else{
        porukaPolje.nextElementSibling.classList.add("ispravno");
        porukaPolje.nextElementSibling.innerHTML = "✓";
    }
})


// slajder

var slideBroj = 1;
prikaziSlajd(slideBroj);

function sledeci(x){
    prikaziSlajd(slideBroj += x);
}
    
document.querySelector("#next").addEventListener("click",function(){
        sledeci(1);
});
document.querySelector("#prev").addEventListener("click",function(){
    sledeci(-1);
});

function prikaziSlajd(x){
    var slajder = document.querySelectorAll(".slider");

    if(x > slajder.length){
        slideBroj = 1;
    }
    if(x < 1){
        slideBroj = slajder.length;
    }

    for(var i = 0; i < slajder.length; i++){
        slajder[i].style.display = "none";
    }
    slajder[slideBroj-1].style.display = "block";
}
