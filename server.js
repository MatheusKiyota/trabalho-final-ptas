const express = require('express');
const treinoRoutes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use('/treinos', treinoRoutes);

app.listen(4000, () => console.log('Servidor funcionando'));
