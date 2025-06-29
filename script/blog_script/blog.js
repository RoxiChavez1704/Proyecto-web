document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("postres_peru");

    // Add a check to ensure the container exists
    if (!contenedor) {
        console.error(
            "El contenedor con id 'postres_peru' no existe en el HTML."
        );
        return; // Stop execution if the container is not found
    }

    fetch("blog.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el JSON.");
            }
            return response.json();
        })
        .then((postres) => {
            // Renamed 'productos' to 'postres' for clarity as per your JSON structure
            // Iterate over each 'postre' object in the 'postres' array
            postres.forEach((postre) => {
                const article = document.createElement("article");
                article.classList.add("postre");

                article.innerHTML = `
                    <div class="img_blog">
                        <img src="${postre.imagen}" alt="${postre.alt}">
                    </div>
                    <div class="blog_txt">
                        <h3 class="title_blog">${postre.titulo}</h3>
                        <h4 class="sub_title_blog">Descripción:</h4>
                        <p class="txt_blog">${postre.descripcion}</p>
                        <h4 class="sub_title_blog">Ingredientes:</h4>
                        <ul class="list_ingredientes">
                            ${postre.ingredientes
                                .map((ing) => `<li>${ing}</li>`)
                                .join("")}
                        </ul>
                        <h4 class="sub_title_blog">Preparación:</h4>
                        <ol class="list_preparacion">
                            ${postre.preparacion
                                .map((paso) => `<li>${paso}</li>`)
                                .join("")}
                        </ol>
                    </div>
                `;
                // Append the created article element to the container
                contenedor.appendChild(article);
            });
        })
        .catch((error) => {
            console.error("Error al cargar los postres:", error); // Changed message to reflect 'postres'
            contenedor.innerHTML =
                "<p style='color: red;'>No se pudieron cargar los postres. 😢</p>"; // Added a more user-friendly error message
        });
});
