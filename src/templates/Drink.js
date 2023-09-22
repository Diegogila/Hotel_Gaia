import { getDrinkById } from "../utils/getDrinks.js";


const Drink = async (id) => {
    const data = await getDrinkById(id);
    console.log(data);
    const view = `
        <span id="closeSlide" class="close">&times;</span>
        <div class="slide-content">
            <img src="${data.strDrinkThumb}" alt="Imagen">
            <div class="slide-info">
                <h3 class="slide-title ">${data.strDrink}</h3>
                <div class="slide-p">
                <h3 class="content-semibold">Instrucciones:</h3>
                <p>${data.strInstructions}</p>
                </div>
            </div>
        </div>
`
    return view;
}

export default Drink;











{/* <section class="drink__details">
    <div class="drink__info">
        <h2>Mojito</h2>
        <div class="drink__igredientes">
            <h3 class="content-small-semibold">Ingredientes</h3>
            <p>Light rum</p>
            <p>Lime</p>
            <p>Sugar</p>
            <p>Mint</p>
        </div>
        <div class="drink__preparacion">
            <h3 class="content-small-semibold">Preparacion</h3>
            <p>Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked
                ice. Pour the rum and top with soda water. Garnish and serve with straw.</p>
        </div>
    </div>
    <div>
        <img class="drink__img" src="" alt="">
        <span class="cross-exit"></span>
    </div>
</section> */}