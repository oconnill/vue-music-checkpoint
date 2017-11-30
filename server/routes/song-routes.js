var Songs = require('../models/song')
var router = require('express').Router()

// WHERE IS EXPRESS
router.get('/api/songs', (req, res, next) => {
    // FIRST JOB is to go get the songs from the db
    Songs.find({})
        .then(songs => res.send(songs))
        .catch(err => res.status(400).send(err))
})

router.get('/api/songs/:id', (req, res, next) => {
    // not working
    Songs.findById(req.params.id)
        .then(songs => res.send(songs))
        .catch(err => res.status(400).send(err))
})

router.put('/api/songs', (req, res, next) => {
    // not working
    Songs.findById(req.params.id)
        .then(songs => res.send(songs))
        .catch(err => res.status(400).send(err))
})

// router.get('/api/songs/:id', (req, res, next) => {
//     Autos.findById(req.params.id)
//         .then(song => res.send(song))
//         .catch(err => res.status(400).send(err))
// })


router.post('/api/songs', (req, res, next) => {
    Songs.create(req.body)
        .then(song => res.send(song))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/songs/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send({ message: 'Successfully removed song at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router