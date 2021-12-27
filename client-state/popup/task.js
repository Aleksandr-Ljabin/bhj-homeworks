let modalClose = document.getElementsByClassName("modal__close");
let modal = document.getElementById("subscribe-modal");
if(document.cookie == "closeInfo=true"){
	modal.classList.remove("modal_active");
}
modalClose[0].onclick = function(){
	modal.classList.remove("modal_active");
	document.cookie = "closeInfo=true";
	console.log(document.cookie)
}