
var mongoose = require('mongoose')
var connectionString = 'mongodb://test:test@ds040877.mlab.com:40877/vue-music-checkpoint'
var connection = mongoose.connection

mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: { socketOptions: {
        keepAlive: 300000, connectionTimeoutMS: 30000
    }}
})
connection.on('error', console.error.bind(console, 'Connection Error: '))
connection.once('open', () => {
    console.log('Connected to DB')
})