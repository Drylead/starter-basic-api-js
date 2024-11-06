const { getItems, getItemById } = require('../models/item.ts');

// Contrôleur pour obtenir tous les items
const getAllItems = (req, res) => {
    try {
        const items = getItems();
        res.status(200).json(items);
    } catch (error) {
        console.error("Erreur lors de la récupération des items:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// Contrôleur pour obtenir un item par ID
const getItem = (req, res) => {
    try {
        const itemId = parseInt(req.params.id, 10);
        const item = getItemById(itemId);

        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: "Item non trouvé" });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'item:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = { getAllItems, getItem };