// database-create.js

const fs = require('fs');
const path = require('path');
const pool = require('./database');


function createTables() {
    const schemaFolder = path.join(__dirname, '../db');
    const files = fs.readdirSync(schemaFolder);

    files.forEach(file => {
        if (file.endsWith('.sql')) {
            const sql = fs.readFileSync(path.join(schemaFolder, file), 'utf8');
            pool.query(sql, (err, result) => {
                if (err) throw err;
                console.log('\x1b[31mTable created from ' + file + '\x1b[0m');
            });
        }
    });
}


createTables();
