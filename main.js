/*WATS 3020 Final*/
/* Rosie Sabaric */

/*Defined variables */
var galleryYes = document.getElementById("images");
var galleryNo = document.getElementById("images2");
var images = document.querySelectorAll('#theImg');
var modalImage= document.querySelector('#theModal');
var yesButton= document.querySelector('#Yes');
var noButton= document.querySelector('#No');
var h3Text = document.querySelector('h3');
var pDirections = document.querySelector('#Directions');
var fundsButton= document.getElementById("Go");
var totalValue;
var text;
/*Set Modal Event Listeners*/;
var i;
for (i = 0; i < images.length; i++) {
    let click = i;
   images[i].addEventListener("click", function(){
       displayModal(click);
   });
}
/* Function to unhide Modal and display with caption */
function displayModal(clicky) { 
    let clickModal = document.getElementById("selectedImage");
    let captionText = document.getElementById("caption");
    modalImage.style.display = "block";
    clickModal.src = images[clicky].src;
    captionText.innerHTML = images[clicky].alt;
}
    modalImage.addEventListener('click', hideModal);

/* Hide Modal upon Click */
function hideModal(){
    modalImage.style.display = "none"; 
}
/* Set button event listeners for vacation yes or no */
    yesButton.addEventListener("click", showGalleryYes);
    noButton.addEventListener("click", showGalleryNo);
/* Displays gallery for yes click */
function showGalleryYes(){
    galleryYes.style.display = "unset";
    galleryNo.style.display = "none";
    h3Text.innerHTML= 'I thought so!';
    pDirections.innerHTML= 'Browse through the image gallery and select the image to get some ideas!';
    document.getElementById("tripfund").style.display = "unset";
}
/*Displays gallery for no click */
function showGalleryNo(){
    galleryNo.style.display = "unset";
    galleryYes.style.display = "none";
    h3Text.innerHTML= 'Really!!?!';
    pDirections.innerHTML= 'This is what you are looking forward to...';
    document.getElementById("tripfund").style.display = "unset";
}
/* Event listener and function for vacation fund calculater */
fundsButton.addEventListener("click", fundsCalc);
function fundsCalc (){
    totalValue = document.getElementById("vacationfund").value;
    if (isNaN(totalValue)){
        text = "You need to enter a valid number! I cannot help you if I do not know how much you have or do not have. Thank You!";
    } else if (totalValue===""){
        text = "Please fill out the form with a valid number.";
    } else if (totalValue<0){
        text = "You are in debt, so please pay off your credit card.";
    } else if (totalValue>=0 && totalValue<200){
        text = "$" + totalValue + " is not quite enough for a big vacation, but your parents or grandparents would be happy to see you :)";
    } else if (totalValue>=200 && totalValue<1000){
        text = "$" + totalValue + " is enough to consider somewhere local or in the off season.";
    } else {
        text = "$" + totalValue + " is enough to go anywhere!";
    }
    document.getElementById("fund").innerHTML = text;
}








