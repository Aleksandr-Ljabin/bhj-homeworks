"use strict"
const menuLink = document.getElementsByClassName('menu__link');
for(let i = 0; i < menuLink.length; i++){
	menuLink[i].onclick = function (){
		menuLink[i].parentElement.querySelector("ul").className = "menu menu_sub menu_active";
		return false;
	}
}
	 

