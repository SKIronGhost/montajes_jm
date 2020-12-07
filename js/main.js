$(document).ready(function(){
  $(window).resize(function() {
  var width = $(window).width();
  if (width < 1200){
    $(".list-group").addClass("text-center");
    $(".exp img").addClass("mx-auto");
  }
})
    
})