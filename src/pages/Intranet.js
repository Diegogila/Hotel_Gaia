import getComments from "../utils/getComments.js";
import getUsers from "../utils/getUsers.js";

const Intranet = async () => {
    const users = await getUsers();
    const comments = await getComments();
    const comment1 = {name:comments[0].name,body:comments[0].body}
    const comment2 = {name:comments[1].name,body:comments[1].body}
    const comment3 = {name:comments[2].name,body:comments[2].body}
    console.log(users);
    const view = `
    <section class="intranet">
        <h1 class="Primary-title">Intranet</h1>
        <article class="comments">
            <h2 class="Primary-subtitle">Ultimos Comentarios</h2>
            <div class="comments__container">
                <div class="comments__card">
                    <div class="card__info">
                        <p class="content-small-semibold">${comment1.name}</p>
                        <span class="icon exit-icon"></span>
                    </div>
                    <p>${comment1.body}</p>
                </div>
                <div class="comments__card">
                <div class="card__info">
                    <p class="content-small-semibold">${comment2.name}</p>
                    <span class="icon exit-icon"></span>
                </div>
                <p>${comment2.body}</p>
            </div>
            <div class="comments__card">
            <div class="card__info">
                <p class="content-small-semibold">${comment3.name}</p>
                <span class="icon exit-icon"></span>
            </div>
            <p>${comment3.body}</p>
        </div>
            </div>
        </article>
        <article class="visitors">
            <h2>Visitantes</h2>
            <div class="visitors__container">
                <table class="main-table visitors__table">
                    <tr class="main-table__header">
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                    </tr>
                    ${users.map(user => `
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.phone}</td>
                            <td>${user.email}</td>
                            <td>${user.address.city}</td>
                        </tr>
                    `)}
                </table>
            </div>
        </article>
    </section>
    `;
    return view;
}

export default Intranet;