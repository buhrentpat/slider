sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

function startSlider(){

	//sets the two vars, count (to repeat it), and loop

	count = $("#slider > img").length;

	loop = setInterval(function(){

		//if statement to ensure it goes back to 1

		if(sliderNext > count){
			sliderNext = 1;
			sliderInt = 1;
		}

		//statements to fade in and out, and to go onto the next image

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);

		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;



	}, 3000);


};

//prev and next are the functions which operate the previous
// and next buttons in the html

function prev(){
	newSlide=sliderInt - 1;
	showSlide(newSlide);
}


function next(){
	newSlide=sliderInt + 1;
	showSlide(newSlide);
}

//stopLoop makes the count reset each time the next or prev
// button is hit

function stopLoop(){
	clearInterval(loop);
}

function showSlide(id){

		stopLoop();

		//if statement to ensure it goes from 4 to 1 and 1 to 4

		if(id > count){
			id = 1;
		}
		else if (id < 1){
			id = count;
		}

		//statements to fade in and out, and to go onto the next image

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + id).fadeIn(300);

		sliderInt = id;
		sliderNext = id + 1;
		startSlider();

};

//when mouse hovers over image (to read txt etc) the loop
// stops then restarts

$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}

);