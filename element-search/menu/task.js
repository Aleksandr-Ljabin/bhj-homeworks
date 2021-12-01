"use strict"
const menuLink = document.getElementsByClassName('menu__link');
for(let i = 0; i < menuLink.length; i++){
	menuLink[i].onclick = function (){
		if(menuLink[i].parentElement.querySelector("ul") != null){
			if(menuLink[i].parentElement.querySelector("ul").className == "menu menu_sub"){
				menuLink[i].parentElement.querySelector("ul").className = "menu menu_sub menu_active";
			} else if(menuLink[i].parentElement.querySelector("ul").className == "menu menu_sub menu_active"){
				menuLink[i].parentElement.querySelector("ul").className = "menu menu_sub";
			  } 
			return false;
		}
	}
};
	 

