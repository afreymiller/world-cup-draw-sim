
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './client/views')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log('App listening on port 3000'))