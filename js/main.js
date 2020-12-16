$(document).ready(function () {
  const up1 = $("#up1").html();
  const down1 = $("#down1").html()
  const up2 = $("#up2").html()
  const down2 = $("#down2").html()
  const up3 = $("#up3").html()
  const down3 = $("#down3").html()
  const up4 = $("#up4").html()
  const down4 = $("#down4").html()
  var width = $(window).width();

  function services() {
    width = $(window).width();
    if (width > 991) {
      $(".card-div").css({"position":"relative","height":"auto"})
      $(".cb").addClass("card-body-service")
      $(".card-service").removeClass("h-card")
      $(".card-service").addClass("h-md-card")
      for (i = 1; i < 5; i++){
        h = up + i
        l = down + i
        console.log(up1)
        $("#up"+i+"").html(l)
        $("#down" + i + "").html(h)
      }
    }
    if (width < 991) {
      for (i = 1; i < 5; i++){
        console.log(up+i)
        $("#up"+i+"").html("up"+i)
        $("#down"+i+"").html("down"+i)
      }
      $(".card-div").css({"position":"static","height":"13em"})
      $(".card-service").removeClass("h-md-card")
      $(".card-service").addClass("h-card")
      $(".cb").removeClass("card-body-service")
    }  
  }
  
  services()
  $(window).resize(function () {
  if(width < 1200){
    $(".list-group").addClass("text-center");
    $(".exp img").addClass("mx-auto");
  }
  services()
  })
  
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-$('#header').height()
            }, 1000);
            return false;
        }
    }
  });

  
})