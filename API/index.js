const express = require('express');
const app = express();

app.use(express.json())
const tempDataBase = {}

app.post('/api/save', (request, response) => {
    const {key, value} = request.body
    tempDataBase[key] = value;
    response.json({ success: true })
})
app.get('/api/get', (req, res) => {
    const {key} = request.query
    const value = tempDataBase[key];
    if(value) {
        response.json(value)
    } else {
        response.status(404).json({ error: `Dados não encontrados`})
    }
})
module.exports = app