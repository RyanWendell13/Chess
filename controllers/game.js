const router = require('express').Router()
const games = require('../models/games').games

router.get('/:id', (req, res) => {
    res.render('game', games[req.params.id])
})

module.exports = router
