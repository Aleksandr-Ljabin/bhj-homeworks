"use strict"
let book = document.getElementsByClassName("book")
let fontSize = Array.from(document.getElementsByClassName("font-size"));

	for(let i = 0; i < fontSize.length; i++){
		fontSize[i].onclick = function(){
			let fontActive = fontSize.findIndex(item => item.className.includes("font-size_active"));
			fontSize[fontActive].classList.toggle("font-size_active");
			fontSize[i].classList.toggle("font-size_active");
			if(fontSize[i].className == "font-size font-size_small font-size_active"){
				book[0].className = "book book_fs-small";
			} else if(fontSize[i].className == "font-size font-size_big font-size_active"){
				book[0].className = "book book_fs-big"
			} else {
				book[0].className = "book"
			}
			console.log(fontSize[0].className);
			console.log(fontSize[1].className);
			console.log(fontSize[2].className);
			return false
		}
			
}

