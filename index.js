const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()
      .use(express.static(path.join(__dirname, 'public')))
      .set('views', path.join(__dirname, 'views'))
      .set('view engine', 'ejs')
      .get('/', (req, res) => res.render('pages/index'))
      .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.post('/log/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    let response = {status:'ok'};
    res.send(response);
});
