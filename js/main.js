$(document).ready(function () {

  var width = $(window).width()

  var service = []
  for (i = 0; i < 4; i++) {
    t = 1+i
      service.push(
        {
          up: $("#up"+t).html(),
          down: $("#down"+t).html()
        })
    }
    console.log(service)

  function services() {
    width = $(window).width();
    if (width > 991) {
      $(".card-div").css({"position":"relative","height":"auto"})
      $(".cb").addClass("card-body-service")
      $(".card-service").removeClass("h-card")
      $(".card-service").addClass("h-md-card")
      for (k in service) {
        console.log(k)
        f = 1+Number(k)
        console.log(f)
        $("#down"+f).html(service[k].up)
        $("#up"+f).html(service[k].down)
      }
      }

    if (width < 991) {
      for (k in service) {
        console.log(k)
        f = 1 + Number(k)
        console.log(f)
        $("#up"+f).html(service[k].up)
        $("#down"+f).html(service[k].down)
      }
      $(".card-div").css({"position":"static","height":"22em"})
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
  
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }

    $('.navbar-toggler').addClass("collapsed")
    $('.navbar-collapse').removeClass("show")
    $('nav button').attr("aria-expanded","false")
    $('html, body').animate({ scrollTop: destino.offset().top }, 1500);
    return false;
    });
})