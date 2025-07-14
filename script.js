const productos = [
  { nombre: "Laptop", descripcion: "Portátil con procesador i7", precio: "$850" },
  { nombre: "Mouse inalámbrico", descripcion: "Ergonómico y recargable", precio: "$20" },
  { nombre: "Teclado mecánico", descripcion: "Retroiluminado con switches azules", precio: "$45" }
];

const lista = document.getElementById("lista-productos");
const plantilla = document.getElementById("plantilla-producto");
const botonAgregar = document.getElementById("btn-agregar");

function renderizarProducto(producto) {
  const clon = plantilla.content.cloneNode(true);
  clon.querySelector(".nombre").textContent = producto.nombre;
  clon.querySelector(".descripcion").textContent = producto.descripcion;
  clon.querySelector(".precio").textContent = producto.precio;
  lista.appendChild(clon);
}

// Renderiza todos los productos al cargar la página
productos.forEach(renderizarProducto);

// Al hacer clic en el botón, agrega un nuevo producto
botonAgregar.addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Producto nuevo",
    descripcion: "Descripción del producto",
    precio: "$0.00"
  };
  renderizarProducto(nuevoProducto);
});
