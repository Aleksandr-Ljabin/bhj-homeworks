"use strict";
let editor = document.getElementById("editor");
editor.value = localStorage.getItem("content");

editor.oninput = function(){
	localStorage.setItem("content", `${editor.value}`);	
};

