import router from "./routes/index.js";
import WeatherSelector from "./components/WeatherComponent.js";

console.log('Hola');

window.customElements.define('weather-selector', WeatherSelector);

window.addEventListener('load',router);
window.addEventListener('hashchange', router);