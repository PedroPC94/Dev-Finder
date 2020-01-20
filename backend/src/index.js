const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Connecting DB
mongoose.connect('mongodb+srv://admin:admin@cluster0-6ls6r.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors()) //Allow external access to the backend aplication
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP:  get, post, put, delete

// Tipos de parâmetros
// Query params: request.query (Filtros, ordenação, paginação, etc...)
// Route params: request.params(Identificar um recurso na alteração ou remoção)
// Body: 

// MongoDB (Não relacional) mongodb atlas (hospedado na nuvem)


