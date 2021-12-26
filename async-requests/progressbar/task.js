"use strict"
let form = document.forms["form"];


form.onsubmit = function(evt){
let formData = new FormData(form);
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
xhr.upload.onprogress = function(event) {
    let progres = 1 * event.loaded / event.total;
    progress.value = progres.toFixed(1);
  };

xhr.send(formData);
evt.preventDefault();

//return false
}




