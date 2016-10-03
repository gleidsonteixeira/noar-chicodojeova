$(document).ready(function(){
	$(".button-collapse").sideNav({
		menuWidth: 300,
		closeOnClick: true
	});
	$('.tooltipped').tooltip({
		delay: 10
	});
	$('.materialboxed').materialbox();
	audioC();

});

$(window).resize(function(){

})
$(window).scroll(function(){

})
var vid = document.getElementById("candidatoaudio"); 
function playVid() { 
    vid.play(); 
}
function pauseVid() { 
    vid.pause(); 
}
function audioC(){
	$(".fala").click(function(){
		var a = $(".fala").attr("data-set");
		if(a == 0){
			playVid();
			$(".fala").attr("data-set","1");
		}else{
			pauseVid();
			$(".fala").attr("data-set","0");
		}
		
	})
}





















