import router from "./routes/index.js";
import WeatherSelector from "./components/WeatherComponent.js";
import Navbar from "./components/Navbar.js";

console.log('Hola');

window.customElements.define('weather-selector', WeatherSelector);
window.customElements.define('my-navbar', Navbar);

window.addEventListener('load',router);
window.addEventListener('hashchange', router);

