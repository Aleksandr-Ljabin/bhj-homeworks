"use strict"
let form = document.forms["tasks__form"];
let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");
let tasksAdd = document.getElementById("tasks__add");

form.onsubmit = function(evt){
	evt.preventDefault();
	let result = taskInput.value.trim();
	if(result === ''){
		form.reset();
		return false;
	} else if(result != ''){

		tasksList.insertAdjacentHTML("beforeEnd", `<div class="task"> <div class="task__title"> ${result} </div> <a href="#" class="task__remove">&times;</a> </div>`);
		
let remove = document.querySelector("a.task__remove");
console.log(remove)
		for(let i = 0; i < remove.length; i++){
			remove[i].onclick = function(){
				remove[i].parentElement.remove();
			}
		}
		form.reset();
		return false;
	  };
};





/*

let remove = tasksList.querySelector("a.task__remove");
		for(let i = 0; i < remove.length; i++){
			remove[i].onclick = function(){
				remove.parentElement.remove();
			}
		}

const output = function(){
	if(event.code === 'Enter' && taskInput.value != ''){
		
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


tasksList.querySelector("a.task__remove").onclick = function(){
tasksList.parentElement.remove(); }


}
*/