const express = require('express');
const db = require('../db/database'); // Adjust the path as needed
const router = express.Router();

// Route for getting text by ID
router.get('/:id', (req, res) => {
    const textId = req.params.id;
    const query = 'SELECT text_content FROM texts WHERE id = ?';
    db.query(query, [textId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Text not found' });
            return;
        }
        const textContent = results[0].text_content;
        res.json({ textContent });
    });
});

module.exports = router;
