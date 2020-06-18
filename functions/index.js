const functions = require('firebase-functions');
const express = require("express");
const { filesUpload } = require('./middleware');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/v1/get', (req, res) => {
    console.log(req.query);
    res.status(200).send({
        success: 'true',
        message: 'GET request successful'
    });
});

app.post('/v1/post', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        success: 'true',
        message: 'POST request successful'
    });
});

app.post('/v1/upload', filesUpload, (req, res) => {
    console.log(req.query);
    console.log(req.files);
    if (req.files.length > 0) {
        res.json({ msg: 'Uploaded: ' + req.files[0].originalname});
    } else {
        res.status(400).send({
            success: 'false',
            message: 'request empty'
        });
    }
});

app.use(express.static('public'));

const api = functions.https.onRequest(app);
module.exports = {
    api
}