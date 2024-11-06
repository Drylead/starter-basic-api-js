const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const Datas = require('./datas.json');
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    const corsOptions = {
        origin: ['*'],
        optionsSuccessStatus: 200,
    };

    server.use(cors(corsOptions));

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Point de terminaison racine
    server.get('/', (req, res) => {
        res.send('Hello world');
    });
    // Point de terminaison pour récupérer tous les éléments
    server.get('/items', (req, res) => {
        if (!Datas || Datas.length === 0) {
            return res.status(500).json({ message: 'Erreur technique' });
        }
        res.json(Datas);
    });


    // Point de terminaison pour récupérer un élément spécifique par son identifiant
    server.get('/items/:id([0-9]+)', (req, res) => {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Identifiant invalide' });
        }
        const item = Datas.find(data => data.id === id);
        if (!item) {
            return res.status(404).json({ message: 'Élément non trouvé' });
        }
        res.json(item);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`);
    });
});

