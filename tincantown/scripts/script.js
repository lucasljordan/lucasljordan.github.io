$(document).ready( function(){

  $(".responsive-menu").on("click", function( event ){

    var $nav = $(this).closest("nav").find("ul");
    if ( $nav.attr("data-expanded") == "false"  ) {
      $(this).closest("nav").find("ul").attr("data-expanded", "true")

    } else if ( $nav.attr("data-expanded") == "true" ) {
      $(this).closest("nav").find("ul").attr("data-expanded", "false")

    }
  })

  /*

  

  */

});
