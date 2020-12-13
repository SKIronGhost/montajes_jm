$(document).ready(function () {
  const up1 = $("#up1").html()
  const down1 = $("#down1").html()
  const up2 = $("#up2").html()
  const down2 = $("#down2").html()
  var width = $(window).width();

  function services() {
    width = $(window).width();
    if (width > 991) {
      $(".sc1").addClass("card-div")
      $(".sc2").addClass("card-body-service")
      $(".card-service").addClass("h-card")
      $("#up1").html(down1)
      $("#down1").html(up1)
      $("#up2").html(down2)
      $("#down2").html(up2)

    }
    if (width < 991) {
      $(".sc1").removeClass("card-div")
      $(".sc2").removeClass("card-body-service")
      $(".card-service").removeClass("h-card")
      $("#up1").html(up1)
      $("#down1").html(down1)
      $("#up2").html(up2)
      $("#down2").html(down2)
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
    
})