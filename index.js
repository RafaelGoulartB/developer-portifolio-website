const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const path = require('path')
const env = require('./config/env')[app.get('env')]

// View Configs
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(env.PORT, () => console.log(`Server is running on https://localhost:${env.PORT}`))
