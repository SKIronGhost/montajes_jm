$(document).ready(function(){
  const up1 = $("#up1").html()
  const down1 = $("#down1").html()
  const up2 = $("#up2").html()
  const down2 = $("#down2").html()

  $(window).resize(function () {
  var width = $(window).width();
  if(width < 1200){
    $(".list-group").addClass("text-center");
    $(".exp img").addClass("mx-auto");
  }
    if (width > 991) {
      $(".card-service").addClass("h-card")
      $("#up1").html(down1)
      $("#down1").html(up1)
      $("#up2").html(down2)
      $("#down2").html(up2)

    }
    else {
      $(".card-service").removeClass("h-card")
      $("#up1").html(up1)
      $("#down1").html(down1)
      $("#up2").html(up2)
      $("#down2").html(down2)
    }  
})
    
})