const router = require('express').Router()

const homeRoutes = require('./home')
const allWorkRoutes = require('./all-work')

module.exports = () => {
  router.use('/', homeRoutes())
  router.use('/allwork', allWorkRoutes())

  return router
}
