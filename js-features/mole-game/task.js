const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const getHole = index => document.getElementById(`hole${index}`);
for (let i = 0; i < 10; i++){
	getHole(i).onclick = function(){
		if (getHole(i).className.includes( 'hole_has-mole' )){
			dead.textContent = Number(dead.textContent) + 1;
		} else {
			lost.textContent = Number(lost.textContent) + 1;
		}
	
	}
}

