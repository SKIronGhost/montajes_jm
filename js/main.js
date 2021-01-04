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


  function services() {
    width = $(window).width();
    if (width > 991) {
      $(".card-div").css({"position":"relative","height":"auto"})
      $(".cb").addClass("card-body-service")
      $(".card-service").removeClass("h-card")
      $(".card-service").addClass("h-md-card")
      for (k in service) {
        f = 1+Number(k)
        $("#down"+f).html(service[k].up)
        $("#up" + f).html(service[k].down)
        
      }
    }

    if (width < 991) {
      for (k in service) {
        f = 1 + Number(k)
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

  $("#contact-form").submit(function(event){
    event.preventDefault();

    console.log($(this).serializeArray())

    // $.ajax({
		// 	type: 'POST',
		// 	url: 'php/contact.php',
		// 	data: $(this).serialize(),
		// 	success: function(data){
    //     document.getElementById('contact-form').reset();
		// 	}
		// });

    return false;
  });

  // var alertList = document.querySelectorAll('.alert')
  //   alertList.forEach(function (alert) {
  //   new bootstrap.Alert(alert)
  //   })
  
  function alertOk() {
    $("#response").append('<div class="alert alert-warning alert-dismissible fade show "role="alert"><strong>Su mensaje ha sido enviado exitosamente!</strong><button type="button" class="close" data-dismiss="alert" aria-label="close">&times;</button></div>')
  }

  function alertError() {
    $("#response").append('<div class="alert alert-warning alert-dismissible fade show "role="alert"><strong>Error, favor inténtelo más tarde</strong><button type="button" class="close" data-dismiss="alert" aria-label="close">&times;</button></div>')
  }
})