const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database-create');
const ProductsRouter = require('./products/products');
const imageRouter = require('./image/images'); 
const app = express();


app.use((req, res, next) => {
    console.log('\x1b[32m' + `[${new Date().toISOString()}] ${req.method} ${req.url}` + '\x1b[0m');
    next();
});

app.use(bodyParser.json());

app.get('/', (_request, response) => {
    response.send('Welcome to your store management API!');
});

app.use('/products', ProductsRouter); 
app.use('/image', imageRouter); 

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('\x1b[33mServer is running on port : ' + PORT + '\x1b[0m');
});
