/* var i=0;
var image =[];
var time = 0.8;
//liste des images
images[0]='images/photo2jumia.jpg';
images[1]= 'images/photo3sliderjpeg';
images[2]= 'images/photo4slider.jpg';
images[3]= 'images/photo5slider.gif';
images[4]='images/photo6slider.jpg';
images[5]= 'images/photo7sliderjpeg';
images[6]='images/photo8sliderjpg';

//changer image
function changeImage(){
    document.slider.src= images[i];
    if (i<images.length -1) {
        i++;
    }
    else{
        i=0;
    }
  setTimeout("changeImage()",time)

}
window.onload= changeImage; */
var slide = new Array("images/photo2jumia.jpg", "images/photo4slider.jpg", "images/photo5slider.gif", "images/photo6slider.jpg","images/photo9slider.jpeg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 4000);