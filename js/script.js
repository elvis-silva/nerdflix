$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $("#navbar").css({"background-color":"#141414"});   
        }
        else{
            $("#navbar").css({"background-color":""});
        }

    })
})