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
        $("#up" + f).html(service[k].down)
        
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
      $(".card-div").css({"position":"static","height":"auto"})
      $(".card-service").removeClass("h-md-card")
      $(".card-service").addClass("h-card")
      $(".cb").removeClass("card-body-service")
      $('a[href^="#n"]').click(function () {
        $('.navbar-collapse').removeClass("collapse")
        $('.navbar-collapse').removeClass("show")
        $('.navbar-collapse').addClass("collapsing")
        setTimeout(function () {
          $('.navbar-toggler').addClass("collapsed")
          $('.navbar-collapse').removeClass("collapsing")
          $('.navbar-collapse').addClass("collapse")
          $('nav button').attr("aria-expanded","false")
        }, 500) 
      })
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
  
  $('a[href^="#n"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    
    $('html, body').animate({ scrollTop: destino.offset().top - $("nav").height()}, 1500);
    return false;
    });
})