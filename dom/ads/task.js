"use strict"
let rotator = Array.from(document.getElementsByClassName("rotator__case"));
const output = function(){
	let rotatorActive = rotator.findIndex(item => item.className == "rotator__case rotator__case_active");
	if(rotatorActive == rotator.length - 1){
		rotator[rotatorActive].classList.toggle("rotator__case_active");
		rotator[0].classList.toggle("rotator__case_active");
	} else{
		rotator[rotatorActive].classList.toggle("rotator__case_active");
		rotator[rotatorActive].nextElementSibling.classList.toggle("rotator__case_active");
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