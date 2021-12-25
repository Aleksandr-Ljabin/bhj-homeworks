"use strict"
const progress = document.getElementById( 'progress' );
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
xhr.upload.onprogress = function(event) {
    progress.value = event.loaded;
  };

xhr.send();



