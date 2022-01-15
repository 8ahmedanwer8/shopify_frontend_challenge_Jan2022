var body = document.getElementById("body");
var gui = document.getElementById("gui");



async function getPics(){
	carouselDiv = $(".carousel-inner")
	$(".loading-bg").show()
	let KEY = "k7sAgi51exUYKYqiFSIRxYMi28Ppy0agK6oBrDcO"
	url = ""
	url = url.concat("https://api.nasa.gov/planetary/apod?api_key="+KEY+"&count=10")
	let response = await fetch(url)
	console.log(response)
	let data = await response.json()
	console.log(data)
	$(".loading-bg").hide()
	usePics(data)
}     
function pulse() {
    $('.heart').animate({
        fontSize: '30px', 
    }, 80, function() {
        $('.heart').animate({
            fontSize: '20px', 
        }, 120, function() {
            console.log("animation finished")
        });
    }); 
};


function usePics(data){
	element = ""
	carouselDiv = $(".carousel-inner")
	for (i = 0; i < data.length; i++){
		const src = data[i].url
		const title = data[i].title
		const date = data[i].date
		const explanation = data[i].explanation
		$(carouselDiv.children()[i].firstElementChild).attr('src', src)
		$(carouselDiv.children().eq(i).children().eq(1).children())[1].textContent = title
		$(carouselDiv.children().eq(i).children().eq(1).children())[2].textContent = date
		$(carouselDiv.children().eq(i).children().eq(1).children())[3].textContent = explanation

	}
}

(function ($) {

	$(document).ready(function() {
		getPics()	
	});
	$(".heart").click(function(){
		if ($(this).hasClass("like")){
			$(this).removeClass("like")
		}
		else{
			pulse();
			$(this).addClass("like")
		}
	})
})(jQuery);

