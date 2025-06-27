const productosDestacados = [
    {
        id: "Alfajor",
        img: "productos_img/alfajor.webp",
        titulo: "Alfajor Artesanal",
        descripcion: `Suave y delicado, relleno con el más cremoso manjar y cubierto con una fina capa de azúcar glas. 
        Nuestro alfajor artesanal es el bocado perfecto que combina tradición, cariño casero y ese toque especial que derrite corazones. 
        Ideal para consentirte o compartir un dulce momento uwu.`,
        link: "#",
    },
    {
        id: "Turron",
        img: "productos_img/turron.webp",
        titulo: "Turrón de la Casa",
        descripcion: `Un turrón irresistible que combina lo mejor de la tradición con un toque único de sabor. 
        Perfecto para quienes buscan un dulce que transforme cada momento en un destino lleno de placer y felicidad.`,
        link: "#",
    },
    {
        id: "Mousse",
        img: "productos_img/mousse-de-lucuma.webp",
        titulo: "Mousse de Lúcuma con Salsa de Chocolate",
        descripcion: `Cremoso Mousse de Lúcuma que se derrite en la boca, coronado con una intensa y sedosa salsa de chocolate. 
        Un postre elegante y cautivador que celebra el sabor del Perú en cada cucharada.`,
        link: "#",
    },
    {
        id: "Brownie",
        img: "productos_img/magic.webp",
        titulo: "Magic Brownie",
        descripcion: `Un bocado de otro mundo. Textura húmeda, explosivo sabor a chocolate. 
        Una experiencia sensorial intensa, casi mágica, que te eleva a una dimensión de dulzura y tentación. 
        Para quienes buscan más que un postre: una experiencia inolvidable.`,
        link: "#",
    },
];

const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

const producto = productosDestacados.find((p) => p.id === idProducto);
const contenedor = document.getElementById("detalle_producto");

if (producto) {
    contenedor.innerHTML = `
    <div class="producto_detalle">
        <h2>${producto.titulo}</h2>
        <img src="${producto.img}" alt="${producto.titulo}">
        <p>${producto.descripcion}</p>
        <a href="comprar.html?id=${producto.id}" class="boton_destacado">Finalizar Compra</a>
    </div>
`;
} else {
    contenedor.innerHTML = `<p>Producto no encontrado 😢</p>`;
}
