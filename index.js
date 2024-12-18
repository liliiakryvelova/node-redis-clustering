
const cluster = require('cluster');

if(cluster.isMaster){
    cluster.fork();
    cluster.fork();
    cluster.fork();
}else{
    const express = require('express');

    const app = express();

    function doWork(duration) {
        const start = Date.now();

        while(Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there');
    });

    app.get('/fast', (req, res) => {
        res.send('Hi there');
    });

    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}
