const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}`: API;

    try {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error al consultar API: ',error);
    };
};

export default getData;