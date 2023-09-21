import getDrinks from "../utils/getDrinks.js";


const Drinks = async () => {
    const dataList = await getDrinks(); 
    console.log(dataList)
    const view = `
    <section class="Bebidas">
        <h1>Bebidas</h1>
        <article class="Mixo">
            <h2 class="Primary-subtitle">Preparados</h2>
            <div class="main-grid-cards bebidas__container">
                <div class="drink__card">
                    <p>Mojito</p>
                    <img  class="drink__image" src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg" alt="">
                </div>
                ${dataList.map(drink => `
                <div class="drink__card">
                    <p>${drink}</p>
                    <img  class="drink__image" src="${drink}" alt="">
                </div>`).join('')}
            </div>
        </article>
    </section>`;
    return view;
}

export default Drinks;