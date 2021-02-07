$(document).ready(function () {
// login modal login
$(".left").click(function(){
    $(".sign-up-content").hide();
    $(".active-content-area").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".right").removeAttr('style');
    
});
// login modal sign up
$(".right").click(function(){
    $(".active-content-area").hide();
    $(".left").removeAttr('style');
    $(".sign-up-content").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".left").css({"background":"none","color":"black"});
   
    });
       //faq
    $(".nav-item").click(function(){
      
      $(this).css({"background":"blue"});
      $('a').attr("color","white");
    })


    // owl carousel plugin for part of categories
    $(".categories-slider").owlCarousel({
        loop: true,
        items: 3,
        dots: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          768: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    // owl carousel plugin for part of testimonials
      $(".owl-card-body ").owlCarousel({
        loop: true,
        // items: 4,
        dots: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          705: {
            items: 2,
          },
          1200: {
            items: 4,
          },
        },
      });
    
    // owl carousel plugin for part of about
      $(".about-owl-card").owlCarousel({
        loop: true,
       
        dots: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          705: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
      // owl carousel plugin for part of latest news 
      $(".lates-news-slider").owlCarousel({
        loop: true,
        items: 3,
        dots: true,
        margin: 30,
        responsive: {
          0: { items: 1 },
          705: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
           //plagun for select options in banner page of index
      $("select").niceSelect();
          
      //scroll to up
      $(window).on("scroll", function() {
        if ($(this).scrollTop() > 70) {
          $('.scroll-up').fadeIn();
        } else {
          $('.scroll-up').fadeOut();
        }
      });
   

      $('.scroll-up').on("click", function()  {
        $("html, body").animate({
          scrollTop: 0
        }, 100,"swing");
        return false;
      });
     
     
      //navbar fixed
     
      $(window).scroll(function (e){

        if($(this).scrollTop()>84){
          $(".header-main").addClass("header-fixed");
        }
        else{
          $(".header-main").removeClass("header-fixed");
        }
      })
			
});
