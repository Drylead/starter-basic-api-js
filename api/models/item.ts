const Datas = require('../datas/items.json');

// Fonction pour obtenir les items
const getItems = () => {
    try {
        return Datas;
    } catch (error) {
        console.error('Erreur lors de la lecture des données :', error);
        return [];
    }
};

// Fonction pour obtenir un item par ID
const getItemById = (id) => {
    try {
        return Datas.find((item) => item.id === id);
    } catch (error) {
        console.error('Erreur lors de la lecture des données :', error);
        return [];
    }
};

module.exports = { getItems, getItemById };