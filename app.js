
const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('views', './client/views')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))