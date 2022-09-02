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


/* const bas1 = [...document.getElementsByClassName("bas1")[0];
     let bntleft = document.getElementsByClassName("btnleft")[0];
     let btnright =document.getElementsByClassName("btnright")[0];

     function defilerImages(defil){
        bas1.scrollBy({top:0 , left:defil ,behavior:"smooth" })
     }

     btnright.addEventListener('click', function(){
        defilerImages(700)

     })
     bntleft.addEventListener('click' ,function(){
        defilerImages(-700)

     }) */ 


const/*  productContainers */ bas1 = [...document.querySelectorAll('.derniere')];
const btnleft = [...document.querySelectorAll('.btnleft')];
const preBtn = [...document.querySelectorAll('.btnright')];

bas1.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        item.scrollBy({top:0,left:containerWidth, behavior: "smooth"})
    })

    btnleft[i].addEventListener('click', () => {
        item.scrollBy({top:0,left:-containerWidth, behavior: "smooth"})
    })
})