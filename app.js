const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve('./views/productDetail.html'));
});

app.listen(8001, () => console.log ('servidor en puerto 8001'));