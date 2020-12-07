
$(document).ready(function(){

    /* HAMBURGER */

    $("#hamburger img").click(function(){
       $("#meniHamburger").find("ul").slideToggle(1200);
       var linkoviAnimacija = $("#meniHamburger ul li a");
       $.each(linkoviAnimacija, function(index,value){
           $(value).addClass("animacija");
       })
    });
    $("#meniHamburger ul li").click(function(){
        $("#meniHamburger").find("ul").hide();
    })
   
    /* NASLOV POCETNA */

    $(window).ready(function(){
        $("#logoNaslov h2").animate({
            fontSize: "+=3.5rem"
        }, 1000)
    })
    
    /* KAMERE */
    

    $(".karticaKamera").hover(function(){
        $(this).find(".card-body").stop(true,true).slideToggle('slow');
    })

    /* TIM */

    
    $(".karticaTim").hover(function(){
        $(this).find(".card-body").stop(true,true).slideDown('slow');
        $(this).find(".card-img-top").stop(true, true);
        $(this).find(".card-img-top").animate({
            width: "+=40px"
        }, 1000);
        

    }, function(){
        $(this).find(".card-body").stop(true,true).slideUp('slow');
        $(this).find(".card-img-top").stop(true, true);
        $(this).find(".card-img-top").animate({
            width: "-=20px"
        }, 1000);
    })

    /* TABS GALERIJA */
    $("#slikeGalerija .sadrzajTab").hide();
    $("#slikeGalerija .sadrzajTab:first").show();
    $("#slikeGalerija li:first").addClass("aktivan");

    $("#slikeGalerija li").click(function(e){
        var index = $(this).index();
        $("#slikeGalerija li").removeClass("aktivan");
        $(this).addClass("aktivan");
        $(".sadrzajTab").hide();
        $(".sadrzajTab").eq(index).fadeIn("slow").show();
    })

    // modal

    $(".modalOtvori").click(function(){
        $("#modal-bg").addClass("modal_active");
    });
    $("#btnZatvori").click(function(){
        $("#modal-bg").removeClass("modal_active");
    });


    //forma
    $("#btnSend").click(function(e){
        e.preventDefault();
    })
});

    
