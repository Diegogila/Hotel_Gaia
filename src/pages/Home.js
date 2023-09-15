const Home = () => {
    const view = `
    <main>
    <section class="index">
        <img class="logo-small" src="./assets/images/Logo-small.png" alt="Logo Hotel Gaia">
        <div class="index__weather">
            <p class="weather__temperature">24<span>°c</span></p>
            <p class="weather__data">Sunny</p>
            <div class="cutom-select">
                <select class="weather__select" id="options">
                    <option value="Mexico">Mexico</option>
                    <option value="España">España</option>
                    <option value="Francia">Francia</option>
                </select>
                <span></span>
            </div>
        </div>
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