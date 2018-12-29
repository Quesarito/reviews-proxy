const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser());
app.use(express.static('public'));

app.listen(port, err => {
    if (err) {
        throw err;
    }
    console.log('Now listening on port ' + port);
});
