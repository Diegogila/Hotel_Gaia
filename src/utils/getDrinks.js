const getDrinks = async () => {

    const API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
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

    const dataList = [];

    coktails.forEach( async (coktailID) => {
        try {
            const response = await fetch(`${API}${coktailID}`);
            const data = await response.json();
            dataList.push(...data.drinks)
        } catch (error) {
            console.error('Error al consultar API: ',error);
        };
    });

    return dataList;

};

export default getDrinks;