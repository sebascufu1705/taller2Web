const burguer =document.querySelector('.header__burger')
const menuBurguer =document.querySelector('.burguer')
let number = 0;


burguer.addEventListener('click', function(){

    if(number==0){
        menuBurguer.classList.remove("hidden"); 
        number++;
    }else{
        menuBurguer.classList.add("hidden");
        number=0;
    }
    

} )
const login = document.querySelector('.login');

login.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = login.email.value;
  const password = login.password.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function () {

    window.location.href = 'store.html';

  })
  .catch(function(error) {
    // Handle Errors here.
    console.log(error)

    login.querySelector('.form__error').classList.remove('hidden');
    // ...
  });
});