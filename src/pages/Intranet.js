const Intranet = () => {
    const view = `
    <section class="intranet">
        <h1 class="Primary-title">Intranet</h1>
        <article class="comments">
            <h2 class="Primary-subtitle">Ultimos Comentarios</h2>
            <div class="comments__container">
                <div class="comments__card">
                    <div class="card__info">
                        <p class="content-small-semibold">Usuario</p>
                        <span class="icon exit-icon"></span>
                    </div>
                    <p>“Contenido de comentario esto es un comentario y esta dlv”</p>
                </div>
            </div>
        </article>
        <article class="visitors">
            <h2>Visitantes</h2>
            <div class="visitors__container">
                <table class="main-table visitors__table">
                    <tr class="main-table__header">
                        <th>Huespeded</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Habitacion</th>
                    </tr>
                    <tr>
                        <td>Mario Alberto Alonzo Dominguez</td>
                        <td>999781245</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Efrain Alberto Rodriguez Castro</td>
                        <td>999458712</td>
                        <td>ejemplo1@hotmail.com</td>
                        <td>01</td>
                    </tr>
                    <tr>
                        <td>Manuel Jose Martinez Tirado</td>
                        <td>999658541</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Maria del Socorro Lozano Ruiz</td>
                        <td>99923024</td>
                        <td>ejemplo2@hotmail.com</td>
                        <td>01</td>
                    </tr>
                    <tr>
                        <td>Andrea Solis Meza</td>
                        <td>999364125</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
        </article>
    </section>
    `;
    return view;
}

export default Intranet;