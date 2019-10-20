const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const path = require('path')
const env = require('./config/env')[app.get('env')]
const routes = require('./routes')

// Global Variable
app.locals.sitename = env.sitename

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
app.use('/', routes())

// View Configs
app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(env.PORT, () => console.log(`Server is running on http://localhost:${env.PORT}`))
