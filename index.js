
const express = require('express');
const crypto = require('crypto')

const app = express();

function doWork(duration) {
    const start = Date.now();

    while(Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there');
    });
});

app.get('/fast', (req, res) => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

