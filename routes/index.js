const router = require('express').Router()

const homeRoutes = require('./home')
const allWorkRoutes = require('./all-work')
const changeLangRoutes = require('./changeLanguage')

module.exports = () => {

  router.use('/', homeRoutes())
  router.use('/allwork', allWorkRoutes())
  router.use('/lang', changeLangRoutes())

  return router
}
