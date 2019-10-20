const router = require('express').Router()

module.exports = () => {
  router.route('/')
    .get((req, res) => {
      res.render('allwork', {
        'title': 'All Work'
      })
    })

  return router
}
