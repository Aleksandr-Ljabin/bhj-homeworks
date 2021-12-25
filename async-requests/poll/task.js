"use strict"

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
	if(xhr.readyState === xhr.DONE){
		let pollTitle = JSON.parse(xhr.response).data.title;
		let pollAnswer = JSON.parse(xhr.response).data.answers;

		document.querySelector("div.poll__title").append(pollTitle);

		for(let i = 0; i < pollAnswer.length; i++){
			let ansver = document.createElement("button");
			ansver.className = "poll__answer";
			ansver.innerText = pollAnswer[i];
            document.querySelector("div.poll__answers").append(ansver);
		};

		const button = document.getElementsByClassName("poll__answer");
		for(let i = 0; i < button.length; i++){
			button[i].onclick = function(){
				alert("Спасибо, ваш голос засчитан!");
			};
		};

	};
});
