"use strict"
let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
function slideInActive(item){
	sliderItem[item].className = "slider__item";
	sliderDot[item].className = "slider__dot";
}
function slideActive(item){
	sliderItem[item].className = "slider__item slider__item_active";
	sliderDot[item].className = "slider__dot slider__dot_active";
};

let prevSlide = document.getElementsByClassName('slider__arrow slider__arrow_prev');
prevSlide[0].onclick = function(){
	let ind = sliderItem.findIndex(item => item.className == "slider__item slider__item_active");
	slideInActive(ind);
	if(ind == 0){
		ind = sliderItem.length - 1;
	} else{
		ind--
	}
	slideActive(ind);
};

let nextSlide = document.getElementsByClassName('slider__arrow slider__arrow_next');
nextSlide[0].onclick = function(){
	let ind = sliderItem.findIndex(item => item.className == "slider__item slider__item_active");
	slideInActive(ind);
	if(ind == sliderItem.length - 1){
		ind = 0;
	} else{
		ind++;
	}
	slideActive(ind);
};

for (let i = 0; i < sliderDot.length; i++){
	sliderDot[i].onclick = function() {
		let ind = sliderItem.findIndex(item => item.className == "slider__item slider__item_active");
		slideInActive(ind);
		sliderDot[i].className = "slider__dot slider__dot_active";
		sliderItem[i].className = "slider__item slider__item_active";
		
	}
}

/*let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
let ind = sliderItem.findIndex(item => item.className == "slider__item slider__item_active");
sliderDot[ind].className = "slider__dot slider__dot_active";
let prevSlide = document.getElementsByClassName('slider__arrow slider__arrow_prev');
prevSlide[0].onclick = function(){
	sliderItem[ind].className = "slider__item";
	sliderDot[ind].className = "slider__dot";
	if(ind == 0){
		ind = sliderItem.length - 1;
	} else{
		ind--
	}
	sliderItem[ind].className = "slider__item slider__item_active";
	sliderDot[ind].className = "slider__dot slider__dot_active";
};

let nextSlide = document.getElementsByClassName('slider__arrow slider__arrow_next');
nextSlide[0].onclick = function(){
	sliderItem[ind].className = "slider__item";
	sliderDot[ind].className = "slider__dot";
	if(ind == sliderItem.length - 1){
		ind = 0;
	} else{
		ind++;
	}
	sliderItem[ind].className = "slider__item slider__item_active";
	sliderDot[ind].className = "slider__dot slider__dot_active";
};


for (let i = 0; i < sliderDot.length; i++){
	sliderDot[i].onclick = function() {
		sliderItem[ind].className = "slider__item";
		sliderDot[ind].className = "slider__dot";
		sliderDot[i].className = "slider__dot slider__dot_active";
		sliderItem[i].className = "slider__item slider__item_active";
		
	}
	
}
ind = sliderItem[ind].findIndex(item => item.className = "slider__dot slider__dot_active")*/