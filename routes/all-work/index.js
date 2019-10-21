const router = require('express').Router()
const pathJoin = require('path').join

module.exports = () => {
  router.route('/')
    .get((req, res) => {
      res.render('allwork', {
        title: 'All Work',
        lang: req.session.language,
        texts: require(pathJoin(__dirname, '../', '../', 'lang', 'all-work', req.session.language)),
      })
    })

  return router
}
