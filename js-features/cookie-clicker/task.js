const clicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const output = function (){
	clicker.textContent = Number(clicker.textContent) + 1;
	if (clicker.textContent % 2 != 0){
		image.width = "150";		
	} else if (clicker.textContent % 2 == 0){
			image.width = "200";
			
	  }
	
}

image.onclick = output;	