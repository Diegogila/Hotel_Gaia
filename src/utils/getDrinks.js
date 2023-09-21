const API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export const getDrinkById = async (coktailID) => {
    try {
        const response = await fetch(`${API}${coktailID}`);
        const data = await response.json();
        return data.drinks[0];
    } catch (error) {
        console.error('Error al consultar API: ', error);
        return null; // O maneja el error de la forma adecuada para tu caso.
    }
};
export const getDrinks = async (id=undefined) => {

    
    
    const coktails = [
        11007,
        11000,
        11005,
        11002,
        12854,
        15403,
        12714,
        14602,
        13683,
        12402
    ];
    
    
    
    const fetchAllData = async (coktails) => {
        const promises = coktails.map(getDrinkById);
        const dataList = await Promise.all(promises);
        return dataList.filter(item => item !== null); // Filtra posibles elementos nulos si manejas errores de esa manera.
    };

    return fetchAllData(coktails);

};

export default {getDrinks,getDrinkById};