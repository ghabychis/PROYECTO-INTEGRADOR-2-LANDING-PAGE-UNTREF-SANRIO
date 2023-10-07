document.addEventListener("DOMContentLoaded", () => {
  // Obtén el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");
  
  // Obtiene los datos de productos del almacenamiento local
  const products = JSON.parse(localStorage.getItem("productos"));
  
  // Busca el producto por ID
  const producto = products.find(producto => producto.id == idProducto);

  if (producto) {
    // Muestra los detalles del producto en la página
    const productoContenedor = document.querySelector(".producto_contenedor");
    productoContenedor.innerHTML = `
        <h2>${producto.name}</h2>
        <img src="${producto.image[0]}" alt="${producto.name}">
        <p><strong>Precio: $${producto.price.toFixed(3)}</strong></p>
        <p><strong>Envío Gratis</strong></p>
        <p><strong>Calificación: ${producto.score}</strong></p>
        <p><strong>${producto.detail}</strong></p>
    `;
} else {
    console.log("El producto con ese ID no fue encontrado");
}
});
  

/* Dark Mode */
// Obtén una referencia al botón "Modo Oscuro"
var boton = document.getElementById('boton');

// Obtén una referencia al cuerpo de la página
var body = document.body;

// Agrega un listener al botón para cambiar el modo
boton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');// Muestra una confirmación
})

function cambioDeModo() {
    const boton = document.getElementById('boton');
    const body = document.body;
  
    if (body.classList.contains('modo-oscuro')) {
      // Cambia a modo claro
      body.classList.remove('modo-oscuro');
      boton.innerText = 'Modo Oscuro';
    } else {
      // Cambia a modo oscuro
      body.classList.add('modo-oscuro');
      boton.innerText = 'Modo Claro';
    }
  }

//boton hacia arriba
const btn_scrolltop = document.getElementById("btn_scrolltop")

btn_scrolltop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
})

window.onscroll= function(){
var scroll = document.documentElement.scrollTop;

if (scroll > 100){
 btn_scrolltop.style.transform = "scale(1)";
}else if (scroll < 100){
  btn_scrolltop.style.transform = "scale(0)";
}
}
