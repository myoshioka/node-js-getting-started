const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

app.get('/log/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    let response = {status:'ok'};
    res.send(response);
});


app.post('/log/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    let response = {status:'ok'};
    res.send(response);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
