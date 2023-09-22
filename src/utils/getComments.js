const API = `https://jsonplaceholder.typicode.com/comments`;

const getComments = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al consultar API: ', error);
        return null; // O maneja el error de la forma adecuada para tu caso.
    }
};

export default getComments;