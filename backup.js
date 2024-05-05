const express = require('express');
const mysqldump = require('mysqldump');
const fs = require('fs');
const config = require('./config');
const database = require('../db/database');

const router = express.Router();

function createBackup() {
    mysqldump({
        connection: database, 
        dumpToFile: './backup/' + getBackupFileName()
    })
    .then(() => {
        console.log('Backup created successfully!');
    })
    .catch(error => {
        console.error('Error creating backup:', error);
    });
}

function getBackupFileName() {
    const currentDate = new Date();
    const dateString = currentDate.toISOString().slice(0, 10);
    return `backup_${dateString}.sql`;
}

router.get('/backup', (req, res) => {
    createBackup();
    res.send('Backup created successfully!');
});

// Automatic backup if enabled in config
if (config.auto_backup) {
    // Run the backup process every hour
    setInterval(() => {
        createBackup();
    }, 60 * 60 * 1000); 
}

module.exports = router;
