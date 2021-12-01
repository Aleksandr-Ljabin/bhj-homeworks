let tab = Array.from(document.getElementsByClassName("tab"));
let tabContent = Array.from(document.getElementsByClassName("tab__content"));
for(let i = 0; i<tab.length; i++){
	tab[i].onclick = function(){
		let tabActive = tab.findIndex(item => item.className == "tab tab_active");
		tabContent[tabActive].className = "tab__content";
		tab[tabActive].className = "tab";
		let ind = tab.indexOf(tab[i]);
		tab[ind].className = "tab tab_active";
		tabContent[ind].className = "tab__content tab__content_active";
	}
}