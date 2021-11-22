const timer = document.getElementById("timer");
const output = function (){
	timer.textContent -= 1;
	if (timer.textContent == 0){
		alert ("Вы победили в конкурсе!")
	}
}	
setInterval(output, 1000);	
