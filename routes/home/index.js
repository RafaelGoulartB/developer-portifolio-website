const router = require('express').Router()

module.exports = () => {
  router.route('/')
    .get((req, res) => {
      res.render('home', {
        title: 'Home'
      })
    })

  return router
}
