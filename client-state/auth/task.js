"use strict";

let form = document.forms["signin__form"];
let welcome = document.getElementById("welcome");
let welcomeId = document.getElementById("user_id");
let signin = document.getElementById("signin");
let userId = [];
let ls = JSON.parse(localStorage.user);
if(ls.length > 0){
	signin.classList.remove("signin_active");
	welcome.classList.add("welcome_active");
	welcomeId.textContent = answer.user_id;
}



form.onsubmit = function(e){
	e.preventDefault();

	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");

	xhr.send(formData);
	xhr.addEventListener('readystatechange', function() {
		 
	    if(xhr.readyState === 4){
	    	let answer = JSON.parse(xhr.responseText);
	    	console.log(answer);
	    	if(answer.success === true){
	    		userId.push(answer.user_id);
	    		localStorage.user = JSON.stringify(userId);
	    		console.log(localStorage.user);
	    		
	    		
	    							
	    	}
	        
	        
	    };
	})



}
