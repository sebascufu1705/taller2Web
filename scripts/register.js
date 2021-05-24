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


const db = firebase.firestore();
const usersRef = db.collection('users');

const register = document.querySelector('.register');


register.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = register.email.value;
    const password = register.password.value;
    
    const firstname = register.firstname.value;
    const lastname = register.lastname.value;
    const direction = register.direction.value;
    const credit = register.credit.value;




 firebase.auth().createUserWithEmailAndPassword(email, password)
 
 
 .then(function (credentials) {

    const uid = credentials.user.uid;

    usersRef.doc(uid).set({
      firstname: firstname,
      lastname: lastname,
      direction: direction,
      credit: credit,
      email: email,
    })
    .then(function () {
        alert("Registrado exitosamente")
       window.location.href = 'store.html';
      });
})
 
 
 .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;



        register.querySelector('.form__error').classList.remove('hidden');
        // ...
      });
    });
  
  