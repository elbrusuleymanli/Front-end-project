$(document).ready(function () {

$(".left").click(function(){
    $(".sign-up-content").hide();
    $(".active-content-area").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".right").removeAttr('style');
    


});
$(".right").click(function(){
    $(".active-content-area").hide();
    $(".left").removeAttr('style');
    $(".sign-up-content").show();
    $(this).css({"background":"blue","color":"white","font-weight":"bold"});
    $(".left").css({"background":"none","color":"black"});
   
    })
    $(".categories-slider").owlCarousel({
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

      $(".lastes-news-slider").owlCarousel({
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

      $("select").niceSelect();

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
        }, 500);
        return false;
      });
      
			
			
});
