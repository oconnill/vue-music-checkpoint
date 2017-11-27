var express = require('express')
var server = express()
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var songroutes = require('./routes/song-routes')
var cors = require('cors')


var server = express()
var port = 4000
//middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

server.use(songroutes)

server.listen(port, () => {
    console.log('Server is running on port, ', port)
})

///routes
//getmytunes get
//addsong to list post
//updateranking - put
//delete from list - delete
