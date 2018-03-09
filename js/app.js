// función que pinta los productos disponibles en home
function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

// función que crea la tarjeta con el producto
function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="addToCart(${product.id})"
      class='btn btn-primary add'>
        Agregar a carrito
      </button>
      <button data-product-id=${product.id}
        onclick="removeFromCart(${product.id})"
        class='btn btn-primary remove'>
          Eliminar de carrito
        </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

const elementCounter = document.getElementById('counterItems');
const checkoutArray = [];
let counterCart = 0;


function addToCart() {
  // cuando agrego a carrito, tengo que:
  // 1) Incrementar en uno mi contador del menu
  counterCart += 1;
  increaseCounter(localStorage.setItem('counter',counterCart));
  // 2) Guardar mi producto en algun lugar
  let productElement = parseInt(event.target.dataset.productId);
  console.log(productElement);
  let selectedProduct = data.products.find(product => {
    // return checkoutArray.push(product)
    return product.id === productElement;
  })
  console.log(selectedProduct);
  checkoutArray.push(selectedProduct);
  localStorage.setItem('checkout', JSON.stringify(checkoutArray));
  // 3) Cambiar el boton de agregar a carrito por quitar del carrito
  event.target.style.display = "none";
  event.target.nextElementSibling.style.display = "inline-block"
}

function removeFromCart() {
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {
  elementCounter.innerText = localStorage.getItem('counter');

  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button) {
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
