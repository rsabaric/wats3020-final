/*WATS 3020 Final*/
/* Rosie Sabaric */

/* image event listener */

//Browse through the image gallery and select the image to see destination information
var galleryYes = document.getElementById("images");
var galleryNo = document.getElementById("images2");
var images = document.querySelectorAll('#theImg');
var modalImage= document.querySelector('#theModal');
var yesButton= document.querySelector('#Yes');
var noButton= document.querySelector('#No');
var h3Text = document.querySelector('h3');
var pDirections = document.querySelector('#Directions');
console.log(pDirections);
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
    modalImage.style.display = "block";
    clickModal.src = images[clicky].src;
    captionText.innerHTML = images[clicky].alt;
}

modalImage.addEventListener('click', hideModal);

function hideModal(){
    modalImage.style.display = "none"; 
}

yesButton.addEventListener("click", showGalleryYes);
noButton.addEventListener("click", showGalleryNo);

function showGalleryYes(){
    galleryYes.style.display = "unset";
    galleryNo.style.display = "none";
    h3Text.innerHTML= 'I thought so!';
    pDirections.innerHTML= 'Browse through the image gallery and select the image to begin planning!';
}

function showGalleryNo(){
    galleryNo.style.display = "unset";
    galleryYes.style.display = "none";
    h3Text.innerHTML= 'Really!!?!';
    pDirections.innerHTML= 'This is what you are looking forward to...';
}









