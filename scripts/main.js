const slider = document.querySelector('.compare__input');
const img = document.querySelector('.compare__images img:last-child');
const burguer =document.querySelector('.header__burger')
const menuBurguer =document.querySelector('.burguer')
let number = 0;

function handleSlider(){
    console.log('hola', slider.value);
    img.style.width =(slider.value*100)+'%';

}
slider.addEventListener('input', handleSlider);

burguer.addEventListener('click', function(){

    if(number==0){
        menuBurguer.classList.remove("hidden"); 
        number++;
    }else{
        menuBurguer.classList.add("hidden");
        number=0;
    }
    

} )