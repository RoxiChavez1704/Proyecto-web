document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const idProducto = params.get("id");

    const contenedor = document.getElementById("detalle_producto");

    if (!contenedor) {
        console.error("No se encontró el contenedor con id 'detalle_producto'");
        return;
    }

    fetch("productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo productos.json");
            }
            return response.json();
        })
        .then((productos) => {
            const producto = productos.find((p) => p.id === idProducto);

            if (producto) {
                contenedor.innerHTML = `
                    <div class="producto_detalle">
                        <h2>${producto.titulo}</h2>
                        <img src="${producto.img}" alt="${producto.titulo}">
                        <p>${producto.descripcion}</p>
                        <p class="precio">Precio: S/. ${producto.precio}</p>
                        <a href="comprar.html?id=${producto.id}" class="boton_destacado">Finalizar Compra</a>
                    </div>
                `;
            } else {
                contenedor.innerHTML = `<p>Producto no encontrado 😢</p>`;
            }
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
            contenedor.innerHTML = `<p style="color:red;">Error al mostrar el producto. 😓</p>`;
        });
});
