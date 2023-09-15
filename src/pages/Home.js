import getWeather from "../utils/getWeather.js";

const Home = async (city="Mexico") => {
    const view = `
    <main>
    <section class="index">
        <img class="logo-small" src="./assets/images/Logo-small.png" alt="Logo Hotel Gaia">
        <weather-selector city="mexico"></weather-selector>
        <article class="main-grid-cards index__buttons">
            <a href="#login" id="Intranet-button">Intranet<span class="global-icon"></span></a>
            <a href="#habitaciones" id="Rooms-button">Habitaciones<span class="book-icon"></span></a>
            <a href="#bebidas" id="Drinks-button">Bebidas<span class="drink-icon"></span></a>
    </section>
</main>
    `;
    return view;
};

export default Home;