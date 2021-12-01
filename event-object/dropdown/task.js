let dropdown = Array.from(document.getElementsByClassName("dropdown__value"));
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownItem = Array.from(document.getElementsByClassName("dropdown__item"));
for (let i = 0; i < dropdown.length; i++){
	dropdown[i].onclick = function(){
	dropdown[i].parentElement.querySelector("ul").className = "dropdown__list dropdown__list_active";
	return false;
	}
};


for(let i = 0; i < dropdownItem.length; i++){
	dropdownItem[i].onclick = function(){
		dropdownItem[i].closest("ul").className = "dropdown__list";
		dropdownItem[i].parentElement.parentElement.querySelector("div").textContent = dropdownItem[i].querySelector("a").textContent;
		return false;
	}
}


// Почему такой код не работает?
/*
let dropdown = document.getElementsByClassName("dropdown__value");
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownItem = Array.from(document.getElementsByClassName("dropdown__item"));
dropdown[0].addEventListener("click", function(){
		dropdownList[0].className = "dropdown__list dropdown__list_active";
		return false;
	}
)
for(let i = 0; i < dropdownItem.length; i++){
		dropdownItem[i].addEventListener("click", function(){
			dropdownList[0].className = "dropdown__list";
			dropdown[0].textContent = dropdownItem[i].querySelector("a").textContent;
			return false;
		}
	)
}*/







/*
for(let i = 0; i < dropdown.length; i++){
	dropdown[i].onclick = function(){
	dropdownList[0].className = "dropdown__list dropdown__list_active";

	return false;
	}
}

for(let i = 0; i < dropdownItem.length; i++){
	dropdownItem[i].onclick = function(){
		dropdownItem[i].closest("ul").className = "dropdown__list";
		dropdown[0].textContent = dropdownItem[i].querySelector("a").textContent;
		return false;
	}
}

*/