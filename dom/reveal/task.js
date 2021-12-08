let reveal = document.getElementsByClassName("reveal");

const trackScroll = function(){
	let vph = window.innerHeight;
	for(let i = 0; i < reveal.length; i++){
		if(vph > reveal[i].getBoundingClientRect().top){
			reveal[i].classList.toggle("reveal_active");

		}
		
	}
}
window.addEventListener('scroll', trackScroll);

