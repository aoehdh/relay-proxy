const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/stream/:id', (req, res) => {
    const id = req.params.id;
    const url = `http://bestr11.leveldvb.com/live/${id}_.m3u8`;

    req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Relay Proxy running on port ${PORT}`);
});
