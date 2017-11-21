var Playlists = require('../models/playlist')
var router = require('express').Router()

// WHERE IS EXPRESS
router.get('/api/playlists', (req, res, next) => {
    // FIRST JOB is to go get the songs from the db
    Playlists.find({})
        .then(songs => res.send(songs))
        .catch(err => res.status(400).send(err))
})

router.get('/api/playlists/:id', (req, res, next) => {
    Playlists.findById(req.params.id)
        .then(song => res.send(song))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW Playlist
router.post('/api/songs', (req, res, next) => {
    Playlists.create(req.body)
        .then(playlist => res.send(playlist))
        .catch(err => res.status(400).send(err))
})

// router.delete('/api/playlists/:id', (req, res, next) => {
//     Songs.findByIdAndRemove(req.params.id)
//         .then((playlist) => {
//             res.send({ message: 'Successfully removed playlist at ' + req.params.id })
//         })
//         .catch(err => res.status(400).send(err))
// })


module.exports = router