'use strict'
function seeSamples(){
	$(".here").click(event=>{
	$(".flex").toggle(450);
})}

seeSamples();

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 450, function(){
   
     
        window.location.hash = hash;
      });
    } 
  });
});
