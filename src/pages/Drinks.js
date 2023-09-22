import { getDrinkById, getDrinks } from "../utils/getDrinks.js";


const Drinks = async () => {
    const dataList = await getDrinks();
    const view = `
    <section class="Bebidas">
        <h1>Bebidas</h1>
        <article class="Mixo">
            <h2 class="Primary-subtitle">Preparados</h2>
            <div class="main-grid-cards bebidas__container">
                ${dataList.map(drink => `
                <div class="drink__card" id="${drink.idDrink}">
                    <p class="content-small-semibold">${drink.strDrink}</p>
                    <img  class="drink__image" src="${drink.strDrinkThumb}" alt="">
                </div>`).join('')}
            </div>
        </article>
        <div class="slide" class="reveal"></div>
    </section>`;
    return view;
}

export default Drinks;