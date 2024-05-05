// products/products.js

const express = require('express');
const router = express.Router();
const db = require('../db/database');


router.get('/', (req, res) => {
    console.log('\x1b[34m' + 'an user send request to get products list ' + '\x1b[33m');

    
    db.query('SELECT id, name, price FROM products', (err, rows) => {
        if (err) {
            console.error('Error fetching products: ' + err.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(rows);
    });
});


router.get('/:id', (req, res) => {
    const productId = req.params.id;

    
    const query = 'SELECT id, name, price FROM products WHERE id = ?';
    db.query(query, [productId], (err, rows) => {
        if (err) {
            console.error('Error fetching product: ' + err.stack);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (rows.length === 0) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(rows[0]);
    });
});

module.exports = router;
