/*WATS 3020 Final*/
/* Rosie Sabaric */

/* image event listener */
var images = document.querySelectorAll('#theImg');
var modalImage= document.querySelector ('#theModal');
//console.log(modalImage);
var i;
for (i = 0; i < images.length; i++) {
    let click = i;
   images[i].addEventListener("click", function(){
       displayModal(click);
   });
}

function displayModal(clicky) {
 //console.log(clicky);
    //console.log(images[clicky].src);
    let clickModal = document.getElementById("selectedImage");
    //console.log(clickModal);
    let captionText = document.getElementById("caption");
    console.log(captionText);
    modalImage.style.display = "block";
    clickModal.src = images[clicky].src;
    captionText.innerHTML = images[clicky].alt;
}

modalImage.addEventListener('click', hideModal);

function hideModal(){
    modalImage.style.display = "none"; 
}














