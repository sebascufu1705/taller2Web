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

window.addEventListener('load', function () {

    console.log(location.search);
  
    // partimos el location con el separador -
    const parts = location.search.split('-');
    // usamos la primer parte y la limpiamos
    const uid = parts[0].replace('?', '');

    var newProduct = {

    };
    
    // referencia a la base de datos
    const db = firebase.firestore();
    
    // referencia a la coleción productos
    const productosRef = db.collection('productos');



    var userData = JSON.parse(localStorage.getItem("userId"));

    if(userData!=null){
      var userId = userData.id;

    }

    

    console.log(userId)

    if(userId!=null){

      var carritoUser = db.collection('users').doc(userId).collection('carrito');
    }

    var storageRef = firebase.storage().ref();
  
    //referencia al producto con el uid específico
    productosRef.doc(uid)
    .get() // traer info de ese producto
    .then(function (snapshot) {
  
      const product = snapshot.data();
  
      const title = document.querySelector('h1');
      title.innerText = product.title;

      storageRef.child(product.storageImg).getDownloadURL().then(function(url) {
        // Or inserted into an <img> element:
        document.querySelector('.details__img').setAttribute('src', url);
      }).catch(function(error) {
        // Handle any errors
      });


      document.querySelector('h2 span').innerText = product.price;

      document.querySelector('.details__genero').innerText = product.genero;
      document.querySelector('.details__material').innerText = product.material;
      document.querySelector('.details__movimiento').innerText = product.movimiento;
      document.querySelector('.details__data').innerText = product.details;
  
      document.querySelector('.details').classList.remove('hidden');

       newProduct = {
        title: product.title,
       // img: form.image.value,
        price: product.price,
        //details :product.details,
        storageImg: product.storageImg
      };
  
     /* titlep = product.title;
       pricep= product.list;
*/
    })
  
    console.log("");

    const btn = document.querySelector('.btn');

    productosRef.doc(uid)
      .get() // traer info de ese producto
      .then(function (snapshot) {
    
        const product = snapshot.data();

        //console.log(newProduct)


    /*
        const title = document.querySelector('h1');
        title.innerText = product.title;
  
        storageRef.child(product.storageImg).getDownloadURL().then(function(url) {
          // Or inserted into an <img> element:
          document.querySelector('img').setAttribute('src', url);
          */

        }).catch(function(error) {
          // Handle any errors
        });

    btn.addEventListener('click',function(){
      if(userId==null){
        alert("Debes registrarte e ingresar para poder agregar productos al carrito")
      }  
      carritoUser.add(newProduct).then(function(docRef) {
          alert("Producto agregado al carrito")
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);

      });
    }) 
  });




