const express = require('express');
const db = require('../db/database'); 
const router = express.Router();

router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    const query = `SELECT url FROM videos WHERE id = ${videoId}`;
    
    db.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Video not found');
            return;
        }
        const videoUrl = results[0].url;

        res.json({ videoUrl });
    });
});

module.exports = router;
