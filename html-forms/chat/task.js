"use strict";

let chatWidget = document.getElementsByClassName("chat-widget");
chatWidget[0].onclick = function(){
	chatWidget[0].classList.add("chat-widget_active");
}