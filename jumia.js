
// cration d'un slider qui permet de d'aficher plusieurs photo chaque 4s
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

// defillement des photos en bas aves deux bouttons bntlef et btnright  
  const derniere = document.getElementsByClassName("derniere")[0];
     let bntleft = document.getElementsByClassName("btnleft")[0];
     let btnright =document.getElementsByClassName("btnright")[0];

     function defilerImages(defil){
        derniere.scrollBy({top:0 , left:defil ,behavior:"smooth" })
     }

     btnright.addEventListener('click', function(){
        defilerImages(2000)

     })
     bntleft.addEventListener('click' ,function(){
        defilerImages(-2000)

     })  


