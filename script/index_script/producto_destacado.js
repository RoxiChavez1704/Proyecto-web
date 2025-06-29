document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("destacado_contenedor");

    fetch("productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el JSON.");
            }
            return response.json();
        })
        .then((productos) => {
            const productosDestacados = productos.filter(
                (producto) => producto.destacado
            );

            productosDestacados.forEach((producto) => {
                const productoHTML = `
                    <div class="producto_destacado">
                        <div class="img_destacado">
                            <img src="${producto.img}" alt="${producto.titulo}" />
                        </div>
                        <div class="contenido">
                            <h3 class="text_destacado">${producto.titulo}</h3>
                            <p class="txt_infodestacado">${producto.descripcion}</p>
                            <a href="producto.html?id=${producto.id}" class="boton_destacado">Comprar</a>
                        </div>
                    </div>
                `;
                contenedor.innerHTML += productoHTML;
            });
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
            contenedor.innerHTML =
                "<p>Error al cargar productos destacados 😓</p>";
        });
});
