
const getData = async (option) => {
    
    const API = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';

    try {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error al consultar API: ',error);
    };
};

export default getData;