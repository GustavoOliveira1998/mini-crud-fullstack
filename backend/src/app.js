const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());        // Permite requisições do frontend
app.use(express.json()); // Habilita interpretação de JSON no body

app.use(userRoutes);

module.exports = app;