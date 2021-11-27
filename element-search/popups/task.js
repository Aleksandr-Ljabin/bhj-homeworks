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




