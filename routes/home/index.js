const router = require('express').Router()
const pathJoin = require('path').join

module.exports = () => {
  router.route('/')
    .get((req, res) => {
      res.render('home', {
        title: 'Home',
        lang: req.session.language,
        texts: require(pathJoin(__dirname, '../', '../', 'lang', 'home', req.session.language)),
      })
    })

  return router
}
