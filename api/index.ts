const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const Routes = require('./routes/index.ts');
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
    server.use(Routes)

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`);
    });
});

