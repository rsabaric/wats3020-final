/*WATS 3020 Final*/
/* Rosie Sabaric */

/* image event listener */
var images = document.querySelectorAll('#theImg');
var modalImage= document.querySelector ('#theModal');
console.log(modalImage);
//document.getElementById('theImg').addEventListener("click", displayModal);
var i;
for (i = 0; i < images.length; i++) {
    let click = i;
   images[i].addEventListener("click", function(){
       displayModal(click);
   });
}


function displayModal(clicky) {
 console.log(clicky);
 //document.querySelector(".images").style.backgroundColor = "red";
 console.log(images[clicky].src);
}














