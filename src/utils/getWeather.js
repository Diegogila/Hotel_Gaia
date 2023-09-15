import apikeyWeather from "../secrets/apikeys.js";

const getWeather = async (city) => {

    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikeyWeather}`;

    try {
        const response = await fetch(API);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error al consultar API: ',error);
    };
};

export default getWeather;