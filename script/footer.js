document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div class="footer_left">
            </div>
            <div class="footer_box">
                <div class="box1">
                    <div class="footer_info">
                        <p class="footer_title">Locales</p>
                        <p class="footer_txt">
                            Calle Dulce Encanto 123, Urb. Repostería Fina,
                            Miraflores - Lima, Perú
                        </p>
                        <p class="footer_txt">
                            Av. Sabor Artesanal 456, Plaza del Azúcar, San Borja
                            - Lima, Perú
                        </p>
                    </div>
                </div>
                <div class="box2">
                    <p class="footer_title">Información</p>
                    <a href="" class="footer_txt">Política de privacidad</a>
                    <a href="" class="footer_txt">Términos y Condiciones</a>
                    <a href="" class="footer_txt">Libro de Reclamaciones</a>
                </div>
                <div class="box3">
                    <p class="footer_title">Suscríbete a nuestra News</p>
                    <p class="footer_txt">Conoce nuestras novedades</p>
                    <form>
                        <input type="email" placeholder="correo electrónico"><button type="submit">Suscribirse</button>
                    </form>
                    <a href="" class="icon_redes"><i class="fa-brands fa-facebook-f fa-xl" style="color: #833f23"></i></a>
                    <a href="" class="icon_redes"><i class="fa-brands fa-instagram fa-2xl" style="color: #833f23"></i></a>
                </div>
            </div>
            <div class="footer_left">
                <p><a>@2025 Dulce Destino | Elaborado por Grupo#</a></p>
            </div>
        
    `;
    document.body.appendChild(footer);
});
