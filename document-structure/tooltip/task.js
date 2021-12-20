let hasTooltip = document.getElementsByClassName("has-tooltip");
let tooltip = document.getElementsByClassName("tooltip")

for(let i = 0; i < hasTooltip.length; i++){
	hasTooltip[i].onclick = function(){
		let topPosit = hasTooltip[i].getBoundingClientRect().top;
		let leftPosit = hasTooltip[i].getBoundingClientRect().left;
		tooltip[0].innerText = hasTooltip[i].title;
		tooltip[0].classList.toggle("tooltip_active");
		tooltip[0].setAttribute("style", `left: ${leftPosit}; top: ${topPosit}`);
		
		return false;
	}
}