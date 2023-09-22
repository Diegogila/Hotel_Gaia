import getWeather from "../utils/getWeather.js";

const style = `
*{
    margin: 0;
}

.index__weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.weather__temperature{
    display: flex;
    align-items: start;
    color: var(--primary-color);
    font-size: 48px;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.50);
}

.weather__data {
    color: var(--primary-color);
    font:var(--subtitle-small);
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.50);
}


.weather__temperature span {
    font-size: 32px;
}

.weather__select {
    height: 100%;
    width: 100%;
    padding: 0 8px;
    border: none;
    border-radius: 15px;
    background-color: var(--secondary-color-light);
    box-shadow: 0px 3px 4px 0px rgba(9, 30, 66, 0.10);
    color: var(--gray);
}

.cutom-select {
    width: 100%;
    position: relative;
    height: 24px;

}

.cutom-select span {
    position: absolute;
    top: 0;
    right: 4px;
    height: 100%;
    width: 24px;
    background-image: url('../assets/icons/cross-down-gray.svg');
    background-size: contain;
}
`;

class WeatherSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const cities = {
      "Mexico": "mexico",
      "Nueva York": "new,US",
      "Tokio": "tokio",
      "Londres": "london",
      "París": "paris",
      "Pekín": "pekin",
      "Río de Janeiro": "río de janeiro",
      "Sídney": "sidney",
      "El Cairo": "cairo",
      "Moscú": "moscu",
    };

    this.shadowRoot.innerHTML = `<style>${style}</style>`;

    this.temperature = document.createElement("p");
    this.temperature.classList.add("weather__temperature");
    

    this.weather = document.createElement("p");
    this.weather.classList.add("weather__data");

    const selectCity = document.createElement("select");
    selectCity.classList.add("weather__select");

    Object.keys(cities).map((city) => {
      const option = document.createElement("option");
      option.value = cities[city];
      option.text = city;
      selectCity.appendChild(option);
    });

    selectCity.addEventListener("change", () => {
      this.setAttribute("city", selectCity.value);
    });

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("custom-select");
    selectContainer.appendChild(selectCity);
    selectContainer.appendChild(document.createElement("span"));

    const index = document.createElement("div");
    index.classList.add("index__weather");
    index.append(this.temperature, this.weather, selectContainer);

    this.shadowRoot.appendChild(index);
  }

  async renderWeather(){
      const data = await getWeather(this.getAttribute('city'));
      this.temperature.innerHTML = `${Math.floor(data.main.temp)}<span>°c</span>`;
      console.log(data)
      this.weather.innerHTML = data.weather[0].main;

  }

  static get observedAttributes() {
    return ["city"];
  }
  async attributeChangedCallback(name, old, now){
    await this.renderWeather();
  }

  async connectedCallback() {
    await this.renderWeather();
  }
}

export default WeatherSelector;
// Definir el nombre del elemento personalizado
