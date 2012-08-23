$(document).mousemove(function(e){
if(e.pageY < 5) {
   $('div#ucid_bar').addClass('ka');
   }
   else {
   $('div#ucid_bar').removeClass('ka');
   }
});
var topBar = $('div#ucid_bar');
topBar.mouseenter(function(){
	this.addClass('dla');
})
topBar.mouseleave(function(){
	this.removeClass('dla');
})