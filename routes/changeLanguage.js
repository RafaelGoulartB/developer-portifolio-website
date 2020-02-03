const router = require('express').Router()

module.exports = () => {
  router.post('/', (req, res) => {
    req.session.language = req.body.lang
    res.redirect('/')
  })

  return router
}
