"use strict"
let form = document.forms["tasks__form"];
let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");
let tasksAdd = document.getElementById("tasks__add");

const output = function(){
	if(event.code === 'Enter' && taskInput.value != ''){
		let result = taskInput.value;
		tasksList.insertAdjacentHTML("beforeEnd", `<div class="task"> <div class="task__title"> ${result} </div> <a href="#" class="task__remove">&times;</a> </div>`);
		form.reset();
		return false;
	}
}

taskInput.onkeydown = output;
tasksAdd.onclick = function(){
	if(taskInput.value != ''){
		let result = taskInput.value;
		tasksList.insertAdjacentHTML("beforeEnd", `<div class="task"> <div class="task__title"> ${result} </div> <a href="#" class="task__remove">&times;</a> </div>`);
		form.reset();
		return false;
	}
}
let taskRemove = document.getElementsByClassName("task__remove");

for(let i = 0; i < taskRemove.length; i++){
	taskRemove[i].onclick = function(){
		taskRemove[i].parentElement.remove();
		return false;
	}

}
