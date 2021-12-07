let reveal = document.getElementsByClassName("reveal");

const trackScroll = function(){
	let vph = window.innerHeight;
	for(let i = 0; i < reveal.length; i++){
		if(reveal[i].getBoundingClientRect().top <= vph){
			reveal[i].classList.toggle("reveal_active");

		}
		
	}
}
window.addEventListener('scroll', trackScroll);

