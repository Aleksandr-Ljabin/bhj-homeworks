"use strict"
let rotator = document.getElementsByClassName("rotator");
const output = function (){
	for (let i = 0; i < rotator.length; i++){
		let item = Array.from(rotator[i].getElementsByClassName("rotator__case"));
		for(let i = 0; i < item.length; i++){
			item[i].classList.toggle("rotator__case_active");
			let q = item[i].nextElementSibling;
			q.classList.toggle("rotator__case_active");
		}
		
	}
}


setInterval(output, 1000);	










/*let rotatorChildren = Array.from(rotator[0].children);
const output = function(){
	for(let i = 0; i < rotatorChildren.length; i++){
		if(rotatorChildren[i].classList.contains("rotator__case_active") == true){
			rotatorChildren[i].classList.remove("rotator__case_active");
			rotatorChildren[i].nextElementSibling.className = "rotator__case rotator__case_active";
		}
	}
};

setInterval(output, 1000);	*/