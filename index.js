const express = require('express')
const app = express()
const path = require('path')
const env = require('./config/env')[app.get('env')]

app.listen(env.PORT, () => console.log(`Server is running on https://localhost:${env.PORT}`))
