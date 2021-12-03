"use strict"
let elementsModal = document.getElementsByClassName('modal');
let close = document.getElementsByClassName("modal__close modal__close_times")
elementsModal[0].className = "modal modal_active";

for(let i = 0; i < close.length; i++){
	close[i].onclick = function(){
		elementsModal[i].className = "modal";
	}
}


const modalShowOpen = function(){
	if(elementsModal[0].className == "modal modal_active"){
		elementsModal[0].className = "modal";
		elementsModal[1].className = "modal modal_active";
	}
	
}

elementsModal[0].getElementsByTagName("a")[0].onclick = modalShowOpen;





/*
let elementsModal = document.getElementsByClassName('modal');
elementsModal[0].className = "modal modal_active";
const modalClose = function () {
	if(elementsModal[0].className == "modal modal_active" || elementsModal[1].className == "modal modal_active"){
		elementsModal[0].className = "modal";
		elementsModal[1].className = "modal";
	}
}

elementsModal[0].getElementsByTagName("div")[1].onclick = modalClose;
elementsModal[1].getElementsByTagName("div")[1].onclick = modalClose;

const modalShowOpen = function(){
	if(elementsModal[0].className == "modal modal_active"){
		elementsModal[0].className = "modal";
		elementsModal[1].className = "modal modal_active";
	}
	
}

elementsModal[0].getElementsByTagName("a")[0].onclick = modalShowOpen;
*/
