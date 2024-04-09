const express = require('express');
const router = express.Router();
const db = require('../db/database');
const axios = require('axios');

router.get('/:id', (req, res) => {
    const imageId = req.params.id;
    console.log('\x1b[34mAn user sent a request to get an image. ID: ' + JSON.stringify(imageId) + '\x1b[0m');

    db.query('SELECT link FROM images WHERE id = ?', [imageId], (err, results) => {
        if (err) {
            console.error('Error retrieving image link:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Image not found' });
            return;
        }

        const imageLink = results[0].link;

        axios.get(imageLink, { responseType: 'arraybuffer' })
            .then(response => {
                const imageData = Buffer.from(response.data, 'binary');
                
                res.set('Content-Type', response.headers['content-type']);
                
                res.send(imageData);
            })
            .catch(error => {
                console.error('Error fetching image:', error);
                res.status(500).json({ error: 'Internal server error' });
            });
    });
});

module.exports = router;
